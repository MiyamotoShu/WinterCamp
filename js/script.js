window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.content-section');
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if(sectionTop < triggerBottom) {
          section.classList.add('show');
      } else {
          section.classList.remove('show');
      }
  });

  const subSections = document.querySelectorAll('.sub-section');
  subSections.forEach(subSection => {
      const subSectionTop = subSection.getBoundingClientRect().top;

      if(subSectionTop < triggerBottom) {
          subSection.classList.add('show');
      } else {
          subSection.classList.remove('show');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const firstSection = document.getElementById('section1');
  if (firstSection) {
      firstSection.classList.add('show');
  }
});
