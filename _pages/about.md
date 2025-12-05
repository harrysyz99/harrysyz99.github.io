---
permalink: /
title: ""
excerpt: ""
author_profile: false
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

<span class='anchor' id='about-me'></span>

<div class="bento-container">
  
  <!-- 1. Profile Card -->
  <div class="bento-card profile-card">
    <img src="images/profile.jpg" alt="Shiyang Zhang" class="profile-img">
    <h2>Shiyang Zhang</h2>
    <div class="profile-bio">Ph.D. Student @ Yale</div>
    <div class="profile-social">
      <a href="mailto:harryzhang957@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
      <a href="https://scholar.google.com/citations?user=pez-fEUAAAAJ&hl=en" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
      <a href="https://github.com/harrysyz99" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/harry-shiyang-zhang/" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/harrysyz99" title="Twitter"><i class="fab fa-twitter"></i></a>
    </div>
  </div>

  <!-- 2. Intro Card -->
  <div class="bento-card intro-card">
    <div>
      <h1>Hello, I'm Shiyang. 👋</h1>
      <p>
        I explore the intersection of <strong>Large Language Models</strong>, <strong>Deep Learning</strong>, and <strong>Complex Biological Systems</strong>.
      </p>
      <p style="font-size: 0.95rem; margin-top: 10px; opacity: 0.85;">
        Currently a Ph.D. student in <a href="https://www.yale.edu/" style="color:white; text-decoration:underline;">Prof. David van Dijk's lab</a> at Yale University. 
        Previously M.S. from Columbia, B.Sc. from UBC.
      </p>
    </div>
  </div>

  <!-- 3. Stats Cards -->
  <div class="bento-card stat-card">
    <div>
      <div class="stat-number">4</div>
      <div class="stat-label">Papers</div>
    </div>
    <i class="fas fa-scroll"></i>
  </div>

  <div class="bento-card stat-card">
    <div>
      <div class="stat-number">Yale</div>
      <div class="stat-label">CS Ph.D.</div>
    </div>
    <i class="fas fa-university"></i>
  </div>

  <!-- 4. News Card -->
  <div class="bento-card news-card">
    <h3>🔥 Latest News</h3>
    <div class="bento-timeline">
      <div class="timeline-item">
        <span class="timeline-date">2024.09</span>
        <div class="timeline-content">Started Ph.D. at <strong>Yale University</strong>! 🎉</div>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">2024.05</span>
        <div class="timeline-content">Graduated from <strong>Columbia University</strong> (M.S.). 🎓</div>
      </div>
      <div class="timeline-item">
        <span class="timeline-date">2024.04</span>
        <div class="timeline-content">New paper on "Intelligence at the Edge of Chaos" released.</div>
      </div>
    </div>
  </div>

  <!-- 5. Featured Research -->
  <div class="bento-card research-card">
    <h3><i class="fas fa-star" style="color: #ffc107;"></i> Featured Research</h3>
    <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">
      Intelligence at the Edge of Chaos
    </p>
    <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">
      Shiyang Zhang, Aakash Patel, Syed A Rizvi, et al.
    </p>
    <div style="display: flex; gap: 10px;">
      <span class="badge-blue">arXiv 2024</span>
      <a href="https://arxiv.org/abs/2410.02536" style="font-size: 0.9rem; font-weight: 600;">View Paper &rarr;</a>
    </div>
  </div>

</div>

<!-- Standard Section for Content Flow -->
<h2 style="margin-top: 2rem; border-bottom: 2px solid #eaecef; padding-bottom: 10px;">📝 All Publications</h2>

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
                yearSection.innerHTML = '<h3 style="margin-top: 1.5em; font-size: 1.1rem; color: #999;">' + year + '</h3>';

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
