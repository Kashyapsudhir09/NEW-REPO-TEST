// CyberSecurity learning portal frontend script
const $ = sel => document.querySelector(sel);

const trainings = [
  {
    id: 1,
    title: 'Intro to Network Security',
    level: 'Beginner',
    duration: '3 weeks',
    desc: 'Foundations of networking, protocols, firewalls, and common network attacks.',
    syllabus: [
      'OSI/TCP-IP model recap',
      'Common network protocols (TCP/UDP/HTTP/HTTPS/DNS)',
      'Firewalls, NAT, VPN basics',
      'Common attacks: sniffing, MITM, DDoS',
      'Hands-on: packet capture and basic filtering'
    ],
    prereq: 'Basic computer literacy',
    mode: 'Online self-paced'
  },
  {
    id: 2,
    title: 'Web Application Security (OWASP-focused)',
    level: 'Intermediate',
    duration: '4 weeks',
    desc: 'OWASP Top 10, secure coding, input validation, and testing techniques.',
    syllabus: [
      'Threat modeling for web apps',
      'Injection flaws & prevention',
      'Authentication/Session management',
      'Access control weaknesses',
      'Hands-on: pentest lab (sqlmap, burp basics)'
    ],
    prereq: 'Basic web development or security fundamentals',
    mode: 'Instructor-led (recorded sessions)'
  },
  {
    id: 3,
    title: 'Cloud Security Essentials (AWS/Azure)',
    level: 'Intermediate',
    duration: '4 weeks',
    desc: 'Secure cloud configuration, IAM, workload protection, and compliance basics.',
    syllabus: [
      'Shared responsibility model',
      'Identity and Access Management best-practices',
      'Secure storage and encryption',
      'Network controls in cloud',
      'Hands-on: secure S3/Blob and IAM policies'
    ],
    prereq: 'Familiarity with cloud concepts',
    mode: 'Online self-paced'
  },
  {
    id: 4,
    title: 'Incident Response & Digital Forensics',
    level: 'Advanced',
    duration: '6 weeks',
    desc: 'Detecting, containing, and investigating security incidents with practical forensic techniques.',
    syllabus: [
      'IR lifecycle and playbooks',
      'Memory and disk forensics basics',
      'Log analysis and timeline building',
      'Containment and eradication strategies',
      'Hands-on: triage lab and evidence collection'
    ],
    prereq: 'Security fundamentals and Linux/Windows admin knowledge',
    mode: 'Instructor-led'
  },
  {
    id: 5,
    title: 'Practical Penetration Testing (Intro to OSCP track)',
    level: 'Advanced',
    duration: '8 weeks',
    desc: 'Offensive techniques, exploitation chains, and lab practice to prepare for practical pentest assessments.',
    syllabus: [
      'Reconnaissance and enumeration',
      'Exploitation fundamentals',
      'Privilege escalation',
      'Post-exploitation and persistence',
      'Reporting and remediation guidance'
    ],
    prereq: 'Comfortable with Linux, networking and scripting',
    mode: 'Lab-based'
  },
  {
    id: 6,
    title: 'Security Automation with Python',
    level: 'Intermediate',
    duration: '4 weeks',
    desc: 'Automate common security workflows: parsing logs, scanning, and alerting with Python.',
    syllabus: [
      'Python for security engineers',
      'Log parsing and enrichment',
      'Using APIs for automation',
      'Building basic scanners and alerting scripts'
    ],
    prereq: 'Basic Python knowledge',
    mode: 'Online self-paced'
  },
  {
    id: 7,
    title: 'Risk Management & GRC Foundations',
    level: 'Beginner / Intermediate',
    duration: '3 weeks',
    desc: 'Core GRC concepts, risk assessment methodologies, and designing controls to meet compliance.',
    syllabus: [
      'Governance frameworks overview (ISO27001, NIST)',
      'Risk assessment techniques',
      'Policy lifecycle and control mapping',
      'Audit readiness and evidence collection'
    ],
    prereq: 'None required',
    mode: 'Online self-paced'
  },
  {
    id: 8,
    title: 'Cloud-native Application Security (Kubernetes)',
    level: 'Advanced',
    duration: '5 weeks',
    desc: 'Securing containerized workloads and Kubernetes clusters in production environments.',
    syllabus: [
      'Kubernetes architecture and threat model',
      'Image scanning and supply-chain security',
      'Network policies and RBAC',
      'Runtime protection and monitoring'
    ],
    prereq: 'Kubernetes basics',
    mode: 'Instructor-led'
  }
];

const certifications = [
  {
    name: '(ISC)² CISSP',
    vendor: '(ISC)²',
    about: 'A broad, management-level certification covering 8 domains of information security. Recommended for senior security roles.',
    exam: '250 multiple-choice/advanced items; recommended experience: 5 years',
    avgSalary: '$120k+',
    recommendedPrep: ['CISSP Official Study Guide', 'Bootcamp (3-5 days)', 'Practice exams']
  },
  {
    name: 'ISACA CISM',
    vendor: 'ISACA',
    about: 'Focuses on information security management and governance, ideal for security managers and aspiring CISOs.',
    exam: 'Multiple choice; recommended experience: 5 years',
    avgSalary: '$115k+',
    recommendedPrep: ['ISACA training', 'Manager-level courses', 'Practice questions']
  },
  {
    name: 'CompTIA Security+',
    vendor: 'CompTIA',
    about: 'Entry-level vendor-neutral certification covering security fundamentals and hands-on troubleshooting.',
    exam: 'Performance-based and multiple choice; good for beginners',
    avgSalary: '$75k+',
    recommendedPrep: ['Security+ study guide', 'Hands-on labs']
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    vendor: 'EC-Council',
    about: 'Covers offensive security concepts, attack tools, and basic pentesting methodology.',
    exam: 'Multiple choice; targets pentest basics',
    avgSalary: '$90k+',
    recommendedPrep: ['CEH course', 'Labs and capture-the-flag practice']
  },
  {
    name: 'Offensive Security Certified Professional (OSCP)',
    vendor: 'Offensive Security',
    about: 'Practical, hands-on certification requiring exploitation of multiple machines in a timed lab and a report.',
    exam: '24-hour practical exam; highly regarded for pentesters',
    avgSalary: '$110k+',
    recommendedPrep: ['PWK course', 'Extensive lab practice', 'Report writing practice']
  }
];

const breaches = [
  {
    id: 1,
    company: 'Equifax',
    year: 2017,
    summary: 'A vulnerability in a web application framework exposed sensitive consumer data at scale.',
    impact: 'Large-scale exposure of personal data (SSNs, birthdates, addresses).',
    countermeasures: ['Timely patching of frameworks', 'WAF for application protection', 'Encryption of sensitive fields', 'Network segmentation'],
    history: [
      '2017-03: Vulnerability introduced via legacy code',
      '2017-05: Attackers exploited the vulnerability to access files',
      '2017-07: Breach disclosed publicly' 
    ],
    refs: ['https://www.example.com/equifax-postmortem', 'https://en.wikipedia.org/wiki/Equifax_data_breach']
  },
  {
    id: 2,
    company: 'Capital One',
    year: 2019,
    summary: 'Misconfigured cloud resource and excessive IAM permissions allowed data exfiltration by an attacker.',
    impact: 'Customer data exposure in cloud storage.',
    countermeasures: ['Least-privilege IAM policies', 'Automated infrastructure scanning', 'Cloud posture management', 'Strong logging and alerting'],
    history: [
      '2019-03: Misconfigured web application firewall rule allowed SSRF',
      '2019-04: Attacker used SSRF to access metadata and obtain credentials',
      '2019-07: Breach disclosed and remediation announced'
    ],
    refs: ['https://www.example.com/capitalone-analysis','https://en.wikipedia.org/wiki/Capital_One_data_breach']
  },
  {
    id: 3,
    company: 'SolarWinds',
    year: 2020,
    summary: 'A supply-chain compromise inserted malicious code into a legitimate vendor update.',
    impact: 'High-impact compromise of enterprise networks via trusted software.',
    countermeasures: ['Supply-chain risk management', 'Code signing verification', 'Runtime detection and restrict lateral movement', 'Zero-trust segmentation'],
    history: [
      '2020-03: Malicious code introduced into build pipeline',
      '2020-09: Malicious updates distributed to customers',
      '2020-12: Incident response and widespread disclosure'
    ],
    refs: ['https://www.example.com/solarwinds-report','https://en.wikipedia.org/wiki/2020_SolarWinds_hack']
  },
  {
    id: 4,
    company: 'Yahoo',
    year: 2013,
    summary: 'Large historical breach where user account data was harvested over multiple incidents.',
    impact: 'Credentials and account data exposed; long-term user risk.',
    countermeasures: ['Password hashing with salts', 'MFA', 'Credential monitoring and breach notification'],
    history: [
      '2013-01: Unauthorized access detected',
      '2014-02: Further investigation revealed larger compromise',
      '2016-12: Public disclosure of breach'
    ],
    refs: ['https://www.example.com/yahoo-breach','https://en.wikipedia.org/wiki/2013_Yahoo!_data_breach']
  },
  {
    id: 5,
    company: 'Colonial Pipeline',
    year: 2021,
    summary: 'Ransomware incident that disrupted critical infrastructure operations.',
    impact: 'Operational downtime and supply disruption.',
    countermeasures: ['Backup & recovery drills', 'Network segmentation of OT/IT', 'Endpoint protection and patching', 'Incident response playbooks'],
    history: [
      '2021-05: Ransomware infection detected',
      '2021-05: Pipeline operations paused to contain the incident',
      '2021-06: Recovery and public disclosure'
    ],
    refs: ['https://www.example.com/colonial-pipeline','https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack']
  }
];

function createCard({thumb, icon, title, meta, html, actionsHtml}){
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="thumb">${thumb || icon || ''}</div>
    <h3>${title}</h3>
    ${meta?`<div class="meta">${meta}</div>`:''}
    ${html?`<p>${html}</p>`:''}
    ${actionsHtml?`<div class="actions">${actionsHtml}</div>`:''}
  `;
  return card;
}

function renderTrainings(list){
  const container = document.getElementById('trainings');
  container.innerHTML = '';
  list.forEach(t => {
    const initials = t.title.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    const thumb = `<div class="thumb-inner">${initials}</div>`;
    const actions = `<button class="primary details" data-id="t-${t.id}">Details</button> <button class="primary enroll" data-id="${t.id}">Enroll</button>`;
    const card = createCard({thumb:thumb, title:t.title, meta:`${t.level} • ${t.duration} • ${t.mode}`, html:t.desc, actionsHtml:actions});
    const details = document.createElement('div');
    details.className = 'details hidden';
    details.id = `t-${t.id}`;
    details.innerHTML = `<strong>Syllabus</strong><ul>${t.syllabus.map(s=>`<li>${s}</li>`).join('')}</ul><p><strong>Prerequisites:</strong> ${t.prereq}</p>`;
    card.appendChild(details);
    container.appendChild(card);
  });
}

function renderCertifications(list = certifications){
  const container = document.getElementById('cert-list');
  container.innerHTML = '';
  list.forEach(c => {
    const initials = c.name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    const thumb = `<div class="thumb-inner">${initials}</div>`;
    const html = `${c.about}<p><strong>Exam:</strong> ${c.exam}<br><strong>Avg salary:</strong> ${c.avgSalary}</p>`;
    const actions = `<button class="secondary cert-details" data-name="${c.name}">More</button>`;
    const card = createCard({thumb:thumb, title:c.name, meta:c.vendor, html:html, actionsHtml:actions});
    container.appendChild(card);
  });
}

function renderBreaches(list = breaches){
  const container = document.getElementById('breach-list');
  container.innerHTML = '';
  list.forEach(b => {
    const initials = b.company.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    const thumb = `<div class="thumb-inner">${initials}</div>`;
    const html = `${b.summary}`;
    const actions = `<button class="secondary breach-details" data-id="b-${b.id}">Details</button>`;
    const card = createCard({thumb:thumb, title:`${b.company} — ${b.year}`, meta:`Impact: ${b.impact}`, html:html, actionsHtml:actions});
    const details = document.createElement('div');
    details.className = 'details hidden';
    details.id = `b-${b.id}`;
    details.innerHTML = `<strong>Recommended Countermeasures</strong><ul>${b.countermeasures.map(c=>`<li>${c}</li>`).join('')}</ul><strong>History / Timeline</strong><ul>${(b.history||[]).map(h=>`<li>${h}</li>`).join('')}</ul><strong>References</strong><ul>${(b.refs||[]).map(r=>`<li><a href="${r}" target="_blank" rel="noopener noreferrer">${r}</a></li>`).join('')}</ul>`;
    card.appendChild(details);
    container.appendChild(card);
  });
}

// Event handlers: toggles and enroll demos
document.addEventListener('click', e => {
  if(e.target.matches('.details')){
    const id = e.target.dataset.id;
    const el = document.getElementById(id);
    if(el) el.classList.toggle('hidden');
  }
  if(e.target.matches('.breach-details')){
    const id = e.target.dataset.id;
    const el = document.getElementById(id);
    if(el) el.classList.toggle('hidden');
  }
  if(e.target.matches('.enroll')){
    const id = Number(e.target.dataset.id);
    const t = trainings.find(x=>x.id===id);
    alert('Enrollment recorded (demo): ' + t.title);
  }
  if(e.target.matches('.cert-details')){
    const name = e.target.dataset.name;
    alert('Certification details (demo): ' + name + '\nRecommended study: see resources on this portal.');
  }
});

// Search across trainings, certs and breaches
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  renderTrainings(trainings.filter(t => (t.title + ' ' + t.desc + ' ' + t.syllabus.join(' ')).toLowerCase().includes(q)));
  renderCertifications(certifications.filter(c => (c.name + ' ' + c.about).toLowerCase().includes(q)));
  renderBreaches(breaches.filter(b => (b.company + ' ' + b.summary + ' ' + b.countermeasures.join(' ')).toLowerCase().includes(q)));
});

// initial render
renderTrainings(trainings);
renderCertifications();
renderBreaches();


