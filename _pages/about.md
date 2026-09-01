---
permalink: /
title: ""
excerpt: ""
author_profile: true
layout: default
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

<div id="about-me"></div>

<div class="bio-hero">
  <h1 style="margin-top: 0; font-size: 2em; font-weight: 800;">Hello, I'm Shiyang. 👋</h1>
  <p style="font-size: 1.1rem; margin-top: 1em;">
    I am a Ph.D. student in <strong>Professor David van Dijk's lab</strong> at <a href="https://www.yale.edu/" target="_blank">Yale University</a>. My work lies at the intersection of <strong>Large Language Models</strong>, <strong>Deep Learning</strong>, and <strong>Agent Systems</strong>.
  </p>
  <p style="margin-bottom: 0;">
    Prior to Yale, I earned my M.S. from Columbia University and hold a B.Sc. in Statistics from the University of British Columbia. My research focuses on developing foundation models and agentic systems to unravel the complexities of biological systems.
  </p>
</div>

<div style="display: flex; gap: 10px; margin-bottom: 2rem; flex-wrap: wrap;">
  <a href='https://scholar.google.com/citations?user=pez-fEUAAAAJ&hl=en'>
    <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=004aad&style=flat-square&label=citations">
  </a>
  <a href='https://github.com/harrysyz99' target='_blank'>
    <img src="https://img.shields.io/github/followers/harrysyz99?label=GitHub&style=flat-square&color=2c3e50">
  </a>
  <a href="mailto:harryzhang957@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact_Me-004aad?style=flat-square&logo=gmail">
  </a>
</div>

<div id="news"></div>
<h2 style="border-bottom: none; margin-bottom: 1rem;">🔥 News</h2>

<div class="timeline">
  <div class="timeline-item">
    <span class="timeline-date">2026.08</span>
    <div class="timeline-content">
      Contributed to the development and release of <a href="https://arxiv.org/abs/2608.23283" target="_blank" rel="noopener noreferrer"><strong>Apodex 1.1</strong></a> during my summer research internship at <strong>Apodex</strong>. 🚀
    </div>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2024.09</span>
    <div class="timeline-content">Started Ph.D. journey at <strong>Yale University</strong> in Prof. David van Dijk's lab! 🎉</div>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2024.05</span>
    <div class="timeline-content">Graduated with M.S. from <strong>Columbia University</strong>. 🎓</div>
  </div>
</div>

<div id="experience"></div>
<h2 style="border-bottom: none; margin-bottom: 1rem;">💼 Experience</h2>

<div class="pub-card" style="padding: 1.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
    <div>
      <h3 style="font-size: 1.2rem; margin: 0; font-weight: 700;">Apodex</h3>
      <div style="color: #444; margin-top: 0.35rem;">Research Intern</div>
    </div>
    <span style="font-size: 0.9rem; color: #666; font-family: monospace;">Summer 2026</span>
  </div>
  <div class="pub-desc">
    <ul style="margin: 0; padding-left: 1.2rem;">
      <li style="margin-bottom: 0.65rem;">Contributed to the development and release of <strong>Apodex 1.1: Scaling Agentic Intelligence for Complex Work</strong>, supporting the end-to-end model development process across large-scale data construction, mid-training, post-training, and agent-system evaluation.</li>
      <li style="margin-bottom: 0.65rem;">Built and iterated on <strong>50B-token-scale data synthesis pipelines</strong> for mid-training and post-training, spanning data generation, filtering, quality control, task construction, and dataset validation across <strong>tool-use, health &amp; clinical, and agentic reasoning</strong> domains.</li>
      <li style="margin-bottom: 0.65rem;">Developed large-scale <strong>tool-use training data and evaluation workflows</strong>, constructing diverse tool-interaction trajectories and multi-step tasks to improve models' ability to select, invoke, and coordinate tools in complex execution environments.</li>
      <li style="margin-bottom: 0.65rem;">Contributed to <strong>health &amp; clinical data synthesis</strong> for model training through domain-specific data construction, quality filtering, and evaluation, while supporting broader <strong>AI4Science projects</strong> with scientific data generation and model evaluation workflows.</li>
      <li style="margin-bottom: 0.65rem;">Implemented and improved the <strong>agentic system and execution harness</strong> for complex, long-horizon work, including task decomposition, tool interaction, and intermediate-state management.</li>
      <li>Designed evaluation and iteration pipelines to systematically analyze agent failures, compare model checkpoints and data recipes, and identify bottlenecks in reasoning, tool selection, and end-to-end task completion.</li>
    </ul>
  </div>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2608.23283" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i>&nbsp; Apodex 1.1</a>
  </div>
</div>

<div id="education"></div>
<h2 style="border-bottom: none; margin-bottom: 1rem;">📖 Education</h2>

<div class="pub-card" style="padding: 1.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <h3 style="font-size: 1.2rem; margin: 0; font-weight: 700;">Yale University</h3>
    <span style="font-size: 0.9rem; color: #666; font-family: monospace;">2024 - Present</span>
  </div>
  <div style="color: #444; margin-top: 0.5rem;">Ph.D. in Computer Science</div>
  <div style="font-size: 0.95rem; color: #666; margin-top: 5px;">Advisor: Prof. David van Dijk</div>
</div>

<div class="pub-card" style="padding: 1.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <h3 style="font-size: 1.2rem; margin: 0; font-weight: 700;">Columbia University</h3>
    <span style="font-size: 0.9rem; color: #666; font-family: monospace;">2022 - 2024</span>
  </div>
  <div style="color: #444; margin-top: 0.5rem;">M.S. in Operation Research</div>
</div>

<div class="pub-card" style="padding: 1.5rem;">
  <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
    <h3 style="font-size: 1.2rem; margin: 0; font-weight: 700;">University of British Columbia</h3>
    <span style="font-size: 0.9rem; color: #666; font-family: monospace;">2018 - 2022</span>
  </div>
  <div style="color: #444; margin-top: 0.5rem;">B.Sc. in Statistics</div>
</div>

<div id="publications"></div>
<h2 style="border-bottom: none; margin-bottom: 1rem;">🌟 Selected Publications</h2>

<div class="pub-card">
  <h3>Apodex 1.1: Scaling Agentic Intelligence for Complex Work</h3>
  <div class="pub-authors">
    Apodex Team · Contributor: <strong>Shiyang Zhang</strong>
  </div>
  <div class="pub-info">
    arXiv preprint, 2026
  </div>
  <div class="pub-desc">
    A general-purpose model and execution system for long-horizon, verifiable work. My contributions covered large-scale data construction, model training, agent-system development, and evaluation.
  </div>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2608.23283" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i> Paper</a>
  </div>
</div>

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

<div id="publications-all"></div>
<h2 style="border-bottom: none; margin-top: 3rem; margin-bottom: 1rem;">📝 All Publications</h2>

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
                yearSection.innerHTML = '<h3 style="margin-top: 2rem; color: #999; font-size: 1.1rem;">' + year + '</h3>';

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
