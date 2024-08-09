const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Açık Mod';
    } else {
      toggleButton.textContent = 'Koyu Mod';
    }
  });
