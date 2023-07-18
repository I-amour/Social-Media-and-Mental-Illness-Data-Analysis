// Emoticon Animation on Scroll
const emoticons = document.querySelectorAll('.emoticon');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  emoticons.forEach((emoticon) => {
    const offsetTop = emoticon.offsetTop;
    if (scrollPosition > offsetTop - window.innerHeight + 100) {
      emoticon.classList.add('animate');
    }
  });
});
