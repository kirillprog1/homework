document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('reviewsTrack');
  const container = document.querySelector('.reviews__slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!track || !container || !prevBtn || !nextBtn) return;

  const originalCards = Array.from(track.children);
  const totalOriginal = originalCards.length;
  const cardWidth = 400;
  const gap = 20;
  const step = cardWidth + gap;

  // 1. Делаем клоны (по 2 набора с каждой стороны для бесшовности)
  for (let i = 0; i < 2; i++) {
    originalCards.forEach(card => track.appendChild(card.cloneNode(true)));
  }
  for (let i = 0; i < 2; i++) {
    [...originalCards].reverse().forEach(card => track.insertBefore(card.cloneNode(true), track.firstChild));
  }

  // 2. Начальный индекс (середина всей ленты)
  let currentIndex = totalOriginal * 2;
  let isMoving = false;

  const updatePosition = (animation = true) => {
    track.style.transition = animation ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
    
    const containerWidth = container.offsetWidth;
    
    // Вычисляем смещение так, чтобы ТРИ карточки были в фокусе.
    // Центральная карточка (currentIndex) должна быть в центре контейнера.
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    
    const xPos = -(currentIndex * step) + centerOffset;
    track.style.transform = `translateX(${xPos}px)`;
  };

  // Инициализация
  updatePosition(false);

  // 3. Функции движения
  const move = (direction) => {
    if (isMoving) return;
    isMoving = true;
    currentIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    updatePosition(true);
  };

  nextBtn.onclick = () => move('next');
  prevBtn.onclick = () => move('prev');

  // 4. Бесконечный прыжок
  track.addEventListener('transitionend', () => {
    isMoving = false;
    
    // Если ушли в клоны слишком далеко
    if (currentIndex >= totalOriginal * 3) {
      currentIndex = totalOriginal * 2;
      updatePosition(false);
    }
    if (currentIndex < totalOriginal) {
      currentIndex = totalOriginal * 2 + (currentIndex % totalOriginal);
      updatePosition(false);
    }
  });

  // 5. Пересчет при изменении окна
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => updatePosition(false), 100);
  });
});
