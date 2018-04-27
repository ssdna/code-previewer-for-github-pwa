import $ from './$';

const swipeDirection = (x1, x2, y1, y2) => {
    let hDirection = x1 - x2 > 0 ? 'left' : 'right', vDirection = y1 - y2 > 0 ? 'up' : 'down';
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? hDirection : vDirection;
};

function handleStart(e) {
    console.log('handleStart', e);
}
function handleEnd(e) {
    console.log('handleEnd', e);
}
function handleCancel(e) {
    console.log('handleCancel', e);
}
function handleMove(e) {
    console.log('handleMove', e);
}

document.addEventListener('touchstart', handleStart, false);
document.addEventListener('touchend', handleEnd, false);
document.addEventListener('touchcancel', handleCancel, false);
document.addEventListener('touchmove', handleMove, false);