// 2-2. いくつかの文字列を受け取れる関数

function f22() {
  type Speed = 'slow' | 'medium' | 'fast';

  function getSpeed(speed: Speed): number {
    switch (speed) {
      case 'slow':
        return 10;
      case 'medium':
        return 50;
      case 'fast':
        return 200;
    }
  }

  const slowSpeed = getSpeed('slow');
  const mediumSpeed = getSpeed('medium');
  const falstSpeed = getSpeed('fast');
}
