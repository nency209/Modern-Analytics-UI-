const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.remove('hidden');
  sidebar.classList.add('block'); // Ensure it becomes visible in flow
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('block');
  sidebar.classList.add('hidden');
});
