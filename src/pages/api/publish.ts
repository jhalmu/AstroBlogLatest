// src/pages/api/publish.ts
import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';
import slugify from 'slugify';

// Otetaan API-avain ympäristömuuttujista
const API_KEY = import.meta.env.API_KEY;

// Cachetetaan blog-hakemiston olemassaolo
let blogDirExists = false;

/**
 * Tarkistaa onko päivämäärä kelvollisessa ISO-muodossa
 */
function isValidISODate(dateStr: string): boolean {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(dateStr)) {
    return false;
  }
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

/**
 * Luo vastauksen yhdenmukaisella tavalla
 */
function createResponse(body: any, statusCode: number = 200) {
  return new Response(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

/**
 * Käsittelee OPTIONS-pyynnöt CORS-esitarkistuksia varten
 */
export const OPTIONS: APIRoute = async ({ request }) => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400'
    }
  });
};

/**
 * Käsittelee POST-pyynnöt blogien julkaisua varten
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    // Tarkista autentikaatio
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return createResponse({ error: 'Authorization header missing' }, 401);
    }

    // Tarkistetaan Bearer token
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7).trim();
      if (!token || token !== API_KEY) {
        return createResponse({ error: 'Invalid API key' }, 401);
      }
    } else {
      // Jos header ei ala "Bearer ", tarkistetaan onko se suoraan API-avain
      if (authHeader !== API_KEY) {
        return createResponse({ error: 'Invalid authorization format or API key' }, 401);
      }
    }

    // Parsi pyynnön sisältö
    const data = await request.json();
    const { content, frontMatter } = data;

    if (!content) {
      return createResponse({ error: 'Content is required' }, 400);
    }

    if (!frontMatter || typeof frontMatter !== 'object') {
      return createResponse({ error: 'frontMatter object is required' }, 400);
    }

    // Tarkista, että pubDate on oikeassa muodossa (ISO-datetime)
    if (frontMatter.pubDate && !isValidISODate(frontMatter.pubDate)) {
      return createResponse({
        error: 'Invalid pubDate format',
        details: `pubDate tulee olla ISO-datetime muodossa (esim. 2025-01-16T00:23:53.332Z)`
      }, 400);
    }
    
    // Tarkista, että tags on taulukko
    if (frontMatter.tags && !Array.isArray(frontMatter.tags)) {
      // Jos tags ei ole taulukko, muunna se taulukoksi
      try {
        if (typeof frontMatter.tags === 'string') {
          // Yritä parsata taulukko merkkijonosta
          if (frontMatter.tags.startsWith('[') && frontMatter.tags.endsWith(']')) {
            frontMatter.tags = JSON.parse(frontMatter.tags);
          } else {
            frontMatter.tags = frontMatter.tags.split(',').map(tag => tag.trim());
          }
        } else {
          return createResponse({
            error: 'Invalid tags format',
            details: 'tags-kentän tulee olla taulukko tai taulukoksi muunnettavissa oleva merkkijono'
          }, 400);
        }
      } catch (error) {
        return createResponse({
          error: 'Invalid tags format',
          details: 'tags-kentän parsinta epäonnistui'
        }, 400);
      }
    }

    // Varmista, että tarvittavat hakemistot ovat olemassa
    const contentDir = path.join(process.cwd(), 'src', 'content');
    const blogDir = path.join(contentDir, 'blog');

    if (!blogDirExists) {
      try {
        await fs.mkdir(blogDir, { recursive: true });
        blogDirExists = true;
      } catch (error) {
        console.error('Error creating blog directory:', error);
        return createResponse({ error: 'Failed to create blog directory' }, 500);
      }
    }

    // Luo slug otsikosta
    const title = frontMatter.title || 'Untitled Post';
    const slug = slugify(title, { lower: true, strict: true });
    const timestamp = new Date().getTime();
    const fileName = `${slug}-${timestamp}.md`;
    const filePath = path.join(blogDir, fileName);

    // Kirjoita tiedosto
    try {
      await fs.writeFile(filePath, content);
    } catch (error) {
      console.error('Error writing file:', error);
      return createResponse({ error: 'Failed to write blog post to file' }, 500);
    }

    // Generoi URL julkaisulle
    const baseUrl = import.meta.env.SITE || 'https://juhahalmu.net';
    const url = `${baseUrl}/blog/${slug}`;

    return createResponse({
      success: true,
      message: 'Post published successfully',
      fileName,
      url
    });
  } catch (error) {
    console.error('Error processing publish request:', error);
    return createResponse({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : String(error)
    }, 500);
  }
};
