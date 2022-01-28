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
  <lastmod>2021-09-08T23:53:55+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.hypeds.com/hypedbot</loc>
  <lastmod>2021-09-08T23:53:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.hypeds.com/hypedmusic</loc>
  <lastmod>2021-09-08T23:53:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.hypeds.com/discord</loc>
  <lastmod>2021-09-08T23:53:55+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.hypeds.com/tos</loc>
  <lastmod>2021-09-08T23:53:55+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>`)
})

module.exports = router;