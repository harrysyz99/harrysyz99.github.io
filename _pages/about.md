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

I am a first-year Ph.D. student in Professor van Dijk's lab at Yale University whose work lies at the intersection of large language models, deep learning, and intelligent agent systems. I earned my M.S. from Columbia University and hold a B.Sc. in Statistics from the University of British Columbia (Canada), with a strong foundation in data-driven discovery.

My research focuses on developing foundation models and AI agents to tackle complex biological challenges. I am passionate about applying these approaches to biological data while collaborating across disciplines to push the boundaries of AI in biology.

I am always interested in discussing new ideas and potential collaborations. Feel free to reach out via email!

<a href='https://scholar.google.com/citations?user=pez-fEUAAAAJ&hl=en'>
  <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations">
</a> |
<a href='https://github.com/harrysyz99'>GitHub</a> |
Total Citations: <strong><span id='total_cit'>Setting up...</span></strong>


# 🔥 News
- *2024.09*: &nbsp;🎉🎉 Started my Ph.D. journey at Yale University in Professor van Dijk's lab!
- *2024.05*: &nbsp;🎉🎉 Graduated with M.S. from Columbia University.

# 📖 Education
- *2024.09 - Present*, **Ph.D. in Computer Science**, Yale University, New Haven, CT
  - Advisor: Professor van Dijk
  - Research focus: Large language models, deep learning, and AI agents for biological discovery
- *2022 - 2024*, **M.S. in Computer Science**, Columbia University, New York, NY
- *2018 - 2022*, **B.Sc. in Statistics**, University of British Columbia, Vancouver, Canada

# 🌟 Selected Publications

<div style="margin-bottom: 2em;">
  <h3 style="color: #333; margin-top: 1.5em;">Intelligence at the Edge of Chaos</h3>
  <p style="margin-left: 1em;">
    <strong>Shiyang Zhang</strong>, Aakash Patel, Syed A Rizvi, Nianchen Liu, Sizhuang He, Amin Karbasi, Emanuele Zappala, David van Dijk<br>
    <em>arXiv preprint, 2024</em> | <a href="https://arxiv.org/abs/2410.02536" target="_blank">Paper</a><br>
    <span style="color: #666;">A novel framework exploring the intersection of complexity theory and neural network dynamics.</span>
  </p>
</div>

<div style="margin-bottom: 2em;">
  <h3 style="color: #333; margin-top: 1.5em;">Scaling Large Language Models for Next-Generation Single-Cell Analysis</h3>
  <p style="margin-left: 1em;">
    Syed Asad Rizvi*, Daniel Levine*, Aakash Patel*, <strong>Shiyang Zhang</strong>, Eric Wang, Sizhuang He, David Zhang, et al.<br>
    <em>bioRxiv, 2025</em> | <a href="https://www.biorxiv.org/content/10.1101/2025.04.14.648850.abstract" target="_blank">Paper</a><br>
    <span style="color: #666;">Developing foundation models specifically designed for single-cell genomics data analysis.</span>
  </p>
</div>

<div style="margin-bottom: 2em;">
  <h3 style="color: #333; margin-top: 1.5em;">RankAdaptor: Hierarchical Dynamic Low-Rank Adaptation for Structural Pruned LLMs</h3>
  <p style="margin-left: 1em;">
    Changhai Zhou, Shijie Han, <strong>Shiyang Zhang</strong>, Shichao Weng, Zekai Liu, Cheng Jin<br>
    <em>arXiv preprint, 2024</em> | <a href="https://arxiv.org/abs/2406.15734" target="_blank">Paper</a><br>
    <span style="color: #666;">Novel approach for efficient fine-tuning of large language models through dynamic rank adaptation.</span>
  </p>
</div>

# 🎖 Honors and Awards
*Updates coming soon!*

# 💬 Talks & Presentations
*Coming soon!*

# 💻 Experience
*Updates coming soon!*

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
            console.log('Fetching from URL:', gsDataBaseUrl + '/gs_data.json');
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            var container = document.getElementById('publications-container');
            container.innerHTML = ''; // Clear loading message

            // Update total citations in the about section
            var totalCitElement = document.getElementById('total_cit');
            if (totalCitElement) {
                totalCitElement.innerHTML = data.citedby || '0';
            }

            // Get publications and sort by year (newest first)
            var pubs = Object.values(data.publications || {});
            pubs.sort((a, b) => (b.bib.pub_year || 0) - (a.bib.pub_year || 0));

            if (pubs.length === 0) {
                container.innerHTML = '<p><em>No publications found yet. Publications will appear here once they are indexed by Google Scholar.</em></p>';
                return;
            }

            // Group publications by year
            var pubsByYear = {};
            pubs.forEach(pub => {
                var year = pub.bib.pub_year || 'In Press';
                if (!pubsByYear[year]) pubsByYear[year] = [];
                pubsByYear[year].push(pub);
            });

            // Display publications by year
            Object.keys(pubsByYear).sort((a, b) => {
                if (a === 'In Press') return -1;
                if (b === 'In Press') return 1;
                return b - a;
            }).forEach(year => {
                var yearSection = document.createElement('div');
                yearSection.className = 'publication-year-section';
                yearSection.innerHTML = '<h3 style="margin-top: 1.5em;">' + year + '</h3>';

                pubsByYear[year].forEach((pub, index) => {
                    var pubDiv = document.createElement('div');
                    pubDiv.className = 'publication-item';
                    pubDiv.style.marginBottom = '1.5em';

                    // Build authors string with your name in bold
                    var authors = pub.bib.author || '';
                    authors = authors.replace(/Shiyang Zhang/gi, '<strong>Shiyang Zhang</strong>');

                    var pubHtml = '<p>';
                    pubHtml += (index + 1) + '. ';
                    pubHtml += authors + '. ';
                    pubHtml += '"<a href="' + (pub.pub_url || '#') + '" target="_blank">' + pub.bib.title + '</a>." ';

                    if (pub.bib.venue) {
                        pubHtml += '<em>' + pub.bib.venue + '</em>';
                        if (pub.bib.volume) pubHtml += ', ' + pub.bib.volume;
                        if (pub.bib.number) pubHtml += '(' + pub.bib.number + ')';
                        if (pub.bib.pages) pubHtml += ', pp. ' + pub.bib.pages;
                        pubHtml += '. ';
                    }

                    if (pub.num_citations > 0) {
                        pubHtml += '<span style="color: #666;">Citations: ' + pub.num_citations + '</span>';
                    }

                    pubHtml += '</p>';
                    pubDiv.innerHTML = pubHtml;
                    yearSection.appendChild(pubDiv);
                });

                container.appendChild(yearSection);
            });

            // Add total publications count
            var summary = document.createElement('p');
            summary.style.marginTop = '2em';
            summary.style.fontStyle = 'italic';
            summary.innerHTML = 'Total publications: ' + pubs.length + ' | Total citations: ' + (data.citedby || 0);
            container.appendChild(summary);
        })
        .catch(error => {
            console.error('Error fetching Google Scholar data:', error);
            var container = document.getElementById('publications-container');
            var totalCitElement = document.getElementById('total_cit');
            if (totalCitElement) {
                totalCitElement.innerHTML = '0';
            }

            // Use manual publication data as fallback
            console.log('Using fallback data due to error:', error.message);
            {% if site.data.publications %}
            var manualPubs = {{ site.data.publications.publications | jsonify }};
            console.log('Manual publications available:', manualPubs);
            if (manualPubs && manualPubs.length > 0) {
                container.innerHTML = '<p><em>Showing manually entered publications (Google Scholar temporarily unavailable)</em></p>';

                manualPubs.forEach((pub, index) => {
                    var pubDiv = document.createElement('div');
                    pubDiv.style.marginBottom = '1.5em';
                    var pubHtml = '<p>' + (index + 1) + '. ';
                    pubHtml += pub.authors.replace(/Shiyang Zhang/gi, '<strong>Shiyang Zhang</strong>') + '. ';
                    pubHtml += '"<a href="' + (pub.url || '#') + '" target="_blank">' + pub.title + '</a>." ';
                    pubHtml += '<em>' + pub.venue + '</em>. ';
                    if (pub.citations > 0) {
                        pubHtml += '<span style="color: #666;">Citations: ' + pub.citations + '</span>';
                    }
                    pubHtml += '</p>';
                    pubDiv.innerHTML = pubHtml;
                    container.appendChild(pubDiv);
                });

                if (totalCitElement) {
                    totalCitElement.innerHTML = '{{ site.data.publications.stats.total_citations }}';
                }
            } else {
            {% endif %}
                container.innerHTML = '<div style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin: 10px 0;">' +
                    '<p><em>Google Scholar integration is experiencing issues. Your publications will appear here once the service is restored.</em></p>' +
                    '<p>In the meantime, you can add publications manually by editing <code>_data/publications.yml</code></p>' +
                    '</div>';
            {% if site.data.publications %}
            }
            {% endif %}
        });
});
</script>