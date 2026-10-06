const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
buttons.forEach(button => button.addEventListener('click', () => {
 const filter = button.dataset.filter;
 buttons.forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
 let count = 0;
 projects.forEach(project => { project.hidden = filter !== 'all' && !project.dataset.category.split(' ').includes(filter); if (!project.hidden) count++; });
 document.getElementById('filter-count').textContent = `Showing ${count} projects`;
}));
