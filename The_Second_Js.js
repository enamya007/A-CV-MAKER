// Génération automatique du CV à partir de config.js
document.addEventListener('DOMContentLoaded', function() {
    // Header
    document.getElementById('nom').textContent = CV_CONFIG.nom;
    document.getElementById('titre').textContent = CV_CONFIG.titre;
    
    // Contact
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${CV_CONFIG.localisation}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>${CV_CONFIG.telephone}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:${CV_CONFIG.email}">${CV_CONFIG.email}</a>
        </div>
        <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <a href="https://${CV_CONFIG.linkedin}" target="_blank">${CV_CONFIG.linkedin}</a>
        </div>
        <div class="contact-item">
            <i class="fab fa-github"></i>
            <a href="https://${CV_CONFIG.github}" target="_blank">${CV_CONFIG.github}</a>
        </div>
    `;
    
    // Profil
    document.getElementById('profil').textContent = CV_CONFIG.profil;
    
    // Formation
    const formationDiv = document.getElementById('formation');
    CV_CONFIG.formation.forEach(f => {
        formationDiv.innerHTML += `
            <div class="formation-item">
                <p class="annee">${f.annee}</p>
                <h3>${f.diplome}</h3>
                <p>${f.etablissement}</p>
            </div>
        `;
    });
    
    // Parcours
    const parcoursDiv = document.getElementById('parcours');
    CV_CONFIG.parcours.forEach(p => {
        parcoursDiv.innerHTML += `
            <div class="parcours-item">
                <p class="annee">${p.periode}</p>
                <h3>${p.type}</h3>
                <p>${p.lieu}</p>
            </div>
        `;
    });
    
    // Langues
    const languesDiv = document.getElementById('langues');
    CV_CONFIG.langues.forEach(l => {
        languesDiv.innerHTML += `
            <div class="langue-item">
                <strong>${l.langue}</strong>
                <span>${l.niveau}</span>
            </div>
        `;
    });
    
    // Compétences
    const competencesDiv = document.getElementById('competences');
    const compCategories = [
        { key: 'langages', title: 'Langages', icon: 'fa-code' },
        { key: 'web', title: 'Web', icon: 'fa-globe' },
        { key: 'backend', title: 'Backend', icon: 'fa-server' },
        { key: 'frontend', title: 'Frontend', icon: 'fa-paint-brush' },
        { key: 'databases', title: 'Bases de données', icon: 'fa-database' },
        { key: 'outils', title: 'Outils', icon: 'fa-tools' },
        { key: 'os', title: 'Systèmes', icon: 'fa-desktop' }
    ];
    
    compCategories.forEach(cat => {
        const skills = CV_CONFIG.competences[cat.key];
        if (skills && skills.length > 0) {
            competencesDiv.innerHTML += `
                <div class="competence-category">
                    <h3><i class="fas ${cat.icon}"></i> ${cat.title}</h3>
                    <div class="skills-grid">
                        ${skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    // Projets
    const projetsDiv = document.getElementById('projets');
    CV_CONFIG.projets.forEach(p => {
        projetsDiv.innerHTML += `
            <div class="projet-item">
                <span class="projet-type">${p.type}</span>
                <h3>${p.nom}</h3>
                <p class="projet-tech">${p.tech}</p>
            </div>
        `;
    });
    
    // Qualités
    const qualitesDiv = document.getElementById('qualites');
    CV_CONFIG.qualites.forEach(q => {
        qualitesDiv.innerHTML += `<span class="tag">${q}</span>`;
    });
    
    // Intérêts
    const interetsDiv = document.getElementById('interets');
    CV_CONFIG.interets.forEach(i => {
        interetsDiv.innerHTML += `<span class="tag">${i}</span>`;
    });
});