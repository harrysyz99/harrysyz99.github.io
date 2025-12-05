---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@google-scholar-stats/" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/google-scholar-stats/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="bio-hero">
  <p>
    I am a first-year Ph.D. student in <strong>Professor David van Dijk's lab</strong> at <a href="https://www.yale.edu/" target="_blank">Yale University</a>. My work lies at the intersection of large language models, deep learning, and intelligent agent systems.
  </p>
  <p style="margin-top: 10px; margin-bottom: 0;">
    Prior to Yale, I earned my M.S. from Columbia University and hold a B.Sc. in Statistics from the University of British Columbia. I am passionate about developing foundation models to tackle complex biological challenges.
  </p>
</div>

<div style="display: flex; gap: 10px; margin-bottom: 2rem;">
  <a href='https://scholar.google.com/citations?user=pez-fEUAAAAJ&hl=en'>
    <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=00356B&style=flat-square&label=citations">
  </a>
  <a href='https://github.com/harrysyz99' target='_blank'>
    <img src="https://img.shields.io/github/followers/harrysyz99?label=GitHub&style=flat-square&color=24292e">
  </a>
  <a href="mailto:harryzhang957@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact_Me-00356B?style=flat-square&logo=gmail">
  </a>
</div>

# 🔥 News

<div class="timeline">
  <div class="timeline-item">
    <span class="timeline-date">2024.09</span>
    <span class="timeline-content">Started Ph.D. journey at <strong>Yale University</strong> in Prof. David van Dijk's lab! 🎉</span>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2024.05</span>
    <span class="timeline-content">Graduated with M.S. from <strong>Columbia University</strong>. 🎓</span>
  </div>
</div>

# 📖 Education

<div class="pub-card" style="padding: 1.2rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline;">
    <h3 style="font-size: 1.1rem; margin: 0;">Yale University</h3>
    <span style="font-size: 0.85rem; color: #666; font-family: monospace;">2024 - Present</span>
  </div>
  <div style="color: #444;">Ph.D. in Computer Science</div>
  <div style="font-size: 0.9rem; color: #666; margin-top: 5px;">Advisor: Prof. David van Dijk</div>
</div>

<div class="pub-card" style="padding: 1.2rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline;">
    <h3 style="font-size: 1.1rem; margin: 0;">Columbia University</h3>
    <span style="font-size: 0.85rem; color: #666; font-family: monospace;">2022 - 2024</span>
  </div>
  <div style="color: #444;">M.S. in Operation Research</div>
</div>

<div class="pub-card" style="padding: 1.2rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline;">
    <h3 style="font-size: 1.1rem; margin: 0;">University of British Columbia</h3>
    <span style="font-size: 0.85rem; color: #666; font-family: monospace;">2018 - 2022</span>
  </div>
  <div style="color: #444;">B.Sc. in Statistics</div>
</div>

# 🌟 Selected Publications

<div class="pub-card">
  <h3>Intelligence at the Edge of Chaos</h3>
  <div class="pub-authors">
    <strong>Shiyang Zhang</strong>, Aakash Patel, Syed A Rizvi, Nianchen Liu, Sizhuang He, Amin Karbasi, Emanuele Zappala, David van Dijk
  </div>
  <div class="pub-info">
    arXiv preprint, 2024
  </div>
  <div class="pub-desc">
    A novel framework exploring the intersection of complexity theory and neural network dynamics.
  </div>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2410.02536" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
  </div>
</div>

<div class="pub-card">
  <h3>Scaling Large Language Models for Next-Generation Single-Cell Analysis</h3>
  <div class="pub-authors">
    Syed Asad Rizvi*, Daniel Levine*, Aakash Patel*, <strong>Shiyang Zhang*</strong>, Eric Wang, Sizhuang He, David Zhang, et al.
  </div>
  <div class="pub-info">
    bioRxiv, 2025
  </div>
  <div class="pub-desc">
    Developing foundation models specifically designed for single-cell genomics data analysis.
  </div>
  <div class="pub-links">
    <a href="https://www.biorxiv.org/content/10.1101/2025.04.14.648850.abstract" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
  </div>
</div>

<div class="pub-card">
  <h3>RankAdaptor: Hierarchical Dynamic Low-Rank Adaptation for Structural Pruned LLMs</h3>
  <div class="pub-authors">
    Changhai Zhou*, Shijie Han*, <strong>Shiyang Zhang*</strong>, Shichao Weng, Zekai Liu, Cheng Jin
  </div>
  <div class="pub-info">
    arXiv preprint, 2024
  </div>
  <div class="pub-desc">
    Novel approach for efficient fine-tuning of large language models through dynamic rank adaptation.
  </div>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2406.15734" target="_blank"><i class="fas fa-file-pdf"></i> Paper</a>
  </div>
</div>

# 📝 All Publications

<div id="publications-container">
  <p><em>Loading publications from Google Scholar...</em></p>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    {% if site.google_scholar_stats_use_cdn %}
    var gsDataBaseUrl = 'https://cdn.jsdelivr.net/gh/{{ site.repository }}@google-scholar-stats'
    {% else %}
    var gsDataBaseUrl = 'https://raw.githubusercontent.com/{{ site.repository }}/google-scholar-stats'
    {% endif %}

    fetch(gsDataBaseUrl + '/gs_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            var container = document.getElementById('publications-container');
            container.innerHTML = ''; 

            var pubs = Object.values(data.publications || {});
            pubs.sort((a, b) => (b.bib.pub_year || 0) - (a.bib.pub_year || 0));

            if (pubs.length === 0) {
                container.innerHTML = '<p><em>No publications found yet.</em></p>';
                return;
            }

            var pubsByYear = {};
            pubs.forEach(pub => {
                var year = pub.bib.pub_year || 'In Press';
                if (!pubsByYear[year]) pubsByYear[year] = [];
                pubsByYear[year].push(pub);
            });

            Object.keys(pubsByYear).sort((a, b) => {
                if (a === 'In Press') return -1;
                if (b === 'In Press') return 1;
                return b - a;
            }).forEach(year => {
                var yearSection = document.createElement('div');
                yearSection.innerHTML = '<h3 style="margin-top: 1.5em; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">' + year + '</h3>';

                pubsByYear[year].forEach((pub) => {
                    // Create Card Wrapper
                    var card = document.createElement('div');
                    card.className = 'pub-card'; // Use our new class
                    
                    // Authors
                    var authors = pub.bib.author || '';
                    authors = authors.replace(/Shiyang Zhang/gi, '<strong>Shiyang Zhang</strong>');
                    
                    // Venue
                    var venueHtml = '';
                    if (pub.bib.venue) {
                        venueHtml = '<div class="pub-info">' + pub.bib.venue + '</div>';
                    }

                    // Links
                    var linkHtml = '<div class="pub-links"><a href="' + (pub.pub_url || '#') + '" target="_blank">View Paper</a></div>';

                    // Construct Inner HTML
                    card.innerHTML = `
                        <h3>${pub.bib.title}</h3>
                        <div class="pub-authors">${authors}</div>
                        ${venueHtml}
                        ${linkHtml}
                    `;
                    
                    yearSection.appendChild(card);
                });

                container.appendChild(yearSection);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('publications-container').innerHTML = '<p>Load failed.</p>';
        });
});
</script>
