function hello(){
  let currentIndex1 = 0;
  const slides = document.querySelectorAll('.slider img');

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.opacity = i === index ? '1' : '0';
      });
  }

  function nextSlide() {
      currentIndex1 = (currentIndex1 + 1) % slides.length;
      showSlide(currentIndex1);
  }

  function prevSlide() {
      currentIndex1 = (currentIndex1 - 1 + slides.length) % slides.length;
      showSlide(currentIndex1);
  }

  setInterval(nextSlide, 3000); // Chuyển ảnh mỗi 3 giây
};

function slider2(){
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 0;
  let autoSlideInterval;

  // Nhân bản các mục sản phẩm để tạo hiệu ứng xoay vòng
  function cloneItems() {
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[totalItems - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, items[0]);
  }

  function updateCarousel() {
    const offset = -currentIndex * (100 / (totalItems + -1.5)); // Tính toán độ dịch chuyển
    track.style.transform = `translateX(${offset}%)`;
  }

  function showNext() {
    currentIndex++;
    // Nếu đã đến sản phẩm cuối cùng, đặt lại chỉ số về 0
    if (currentIndex >= totalItems + -1.5) {
      currentIndex = 1; // Bỏ qua sản phẩm đầu tiên (clone)
      track.style.transition = 'none'; // Bỏ hiệu ứng chuyển tiếp
      track.style.transform = `translateX(-100%)`; // Đặt lại vị trí
    } else {
      track.style.transition = 'transform 0.5s ease'; // Thiết lập lại hiệu ứng
    }
    updateCarousel();
  }

  function startAutoSlide() {
    cloneItems(); // Nhân bản các sản phẩm
    autoSlideInterval = setInterval(showNext, 3000); // Thay đổi sản phẩm mỗi 3 giây
  }

  startAutoSlide();
}
