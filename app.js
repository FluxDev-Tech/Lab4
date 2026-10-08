const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const student = { name: 'John Lawrence V. Martinez', course: 'BS Information Technology' };
const services = [
  { icon: 'bi-person-plus', title: 'Student Registration', text: 'Register and manage your student information.' },
  { icon: 'bi-megaphone', title: 'View Announcements', text: 'Stay updated with the latest school news and notices.' },
  { icon: 'bi-journal-text', title: 'View Academic Records', text: 'Check your grades and academic history.' }
];

app.get('/', (req, res) => res.render('index', { active: 'home', title: 'Home', student, services }));
app.get('/services', (req, res) => res.render('services', { active: 'services', title: 'Services', student, services }));
app.get('/about', (req, res) => res.render('about', { active: 'about', title: 'About', student, services }));

app.listen(PORT, () => console.log(`Student Portal running at http://localhost:${PORT}`));
