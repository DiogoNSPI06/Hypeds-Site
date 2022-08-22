const express = require("express");
const router = express.Router();

router.get("/sitemap", (req, res) => {
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://www.hypeds.com/</loc>
  <lastmod>2022-06-16T19:25:50+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.hypeds.com/hypedmusic</loc>
  <lastmod>2022-06-16T19:28:25+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://hypeds.com/</loc>
  <lastmod>2022-06-16T19:25:50+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://hypeds.com/hypedmusic</loc>
  <lastmod>2022-06-16T19:28:25+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://e.hypeds.com/</loc>
  <lastmod>2022-05-27T03:13:01+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://api.hypeds.com/v5/oauth/login</loc>
  <lastmod>2022-05-27T03:13:01+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.hypeds.com/minecraft</loc>
  <lastmod>2022-06-16T19:26:58+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.hypeds.com/docs</loc>
  <lastmod>2022-06-16T19:28:05+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.hypeds.com/discord</loc>
  <lastmod>2022-06-16T19:29:56+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.hypeds.com/tos</loc>
  <lastmod>2022-05-27T03:13:01+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>`)
})

module.exports = router;