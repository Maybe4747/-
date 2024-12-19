
document.addEventListener('DOMContentLoaded', function() {
  // 动态年份更新
  const year = new Date().getFullYear();
  document.getElementById('current-year').textContent = year;

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // 联系表单提交
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          // 这里可以添加表单提交逻辑，比如使用 AJAX 发送数据到服务器
          alert('感谢您的留言！我会尽快回复。');
          this.reset();
      });
  }

  // 项目卡片悬停效果
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.addEventListener('mouseover', () => {
          card.style.transform = 'translateY(-10px) scale(1.03)';
      });
      card.addEventListener('mouseout', () => {
          card.style.transform = 'translateY(0) scale(1)';
      });
  });

  // 滚动动画
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.project-card, .hobby-card, .blog-card');
      elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          if (rect.top <= windowHeight * 0.75) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
          }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // 初始调用以处理已经可见的元素
});