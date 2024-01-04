
document.addEventListener('scroll', function() {
  const body = document.body;
  const offset = window.scrollY;
  body.style.backgroundPositionY = offset * 0.7 + 'px';
});

document.addEventListener('scroll', function() {
  const section2 = document.getElementById('section2');
  const section2Top = section2.offsetTop; // 獲取區塊距離頂部的距離
  const scrollDistance = window.scrollY; // 獲取當前滾動位置

  if (scrollDistance >= section2Top) {
      let scale = 1 + (scrollDistance - section2Top) / 1000; // 計算縮放比例
      scale = Math.min(scale, 2); // 設置最大放大限制，例如 2 倍

      section2.style.transform = `scale(${scale})`;
  }
});
