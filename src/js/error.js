if (document.querySelector('.serch-result__title') && document.querySelector('.reception__error-pop-up')) {
  // Получаем нужный элемент
var element = document.querySelector('.serch-result__title');
var popUp = document.querySelector('.reception__error-pop-up');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
		popUp.style.display = 'block';
  } else {
    // Если элемент не видно, то запускаем этот код
		popUp.setAttribute("style", "position: sticky; top: 81px; left: 0; display: block");
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible(element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);
}

