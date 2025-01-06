// Get all anchor links
const anchors = document.querySelectorAll('nav a');
    
// Listen for click events on anchor links
anchors.forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    // Remove active class from all links
    anchors.forEach(a => a.classList.remove('active'));

    // Add active class to the clicked link
    event.preventDefault();  // Prevent default anchor behavior
    this.classList.add('active');
    
    // Scroll smoothly to the target section
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 50, // Adjust this for any fixed navigation bar
      behavior: 'smooth'
    });
  });
});
    
// Detect when a section is in the viewport
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const anchor = document.querySelector(`a[href="#${section.id}"]`);
    
    // Check if the section is in the viewport
    if (rect.top <= 0 && rect.bottom >= 0) {
      anchor.classList.add('active');
    } else {
      anchor.classList.remove('active');
    }
  });
});

/*------------------------------------------------*/

