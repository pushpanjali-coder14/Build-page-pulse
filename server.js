const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/audit', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const startTime = Date.now();

  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: { 'User-Agent': 'PagePulse-Bot/1.0' }
    });

    const responseTime = Date.now() - startTime;
    const $ = cheerio.load(response.data);

    // Data extraction
    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';
    const h1Count = $('h1').length;
    const imagesMissingAlt = $('img').filter((i, el) => !$(el).attr('alt')).length;
    const wordCount = $('body').text().split(/\s+/).filter(Boolean).length;

    res.json({
      http_status: response.status,
      response_time_ms: responseTime,
      page_title: title,
      meta_description: metaDescription,
      h1_count: h1Count,
      images_missing_alt: imagesMissingAlt,
      approximate_word_count: wordCount
    });

  } catch (error) {
    const responseTime = Date.now() - startTime;
    if (error.code === 'ECONNABORTED') {
      return res.status(408).json({ error: "Request timed out" });
    }
    if (error.response) {
      return res.status(error.response.status).json({ error: "Failed to fetch URL", status: error.response.status });
    }
    return res.status(500).json({ error: "Invalid URL or network error" });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));