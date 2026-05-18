const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

function handleToggle(clickedNode) {
    if (good.checked && cheap.checked && fast.checked) {
        if (clickedNode === good) {
            fast.checked = false;
        }
        if (clickedNode === cheap) {
            good.checked = false;
        }
        if (clickedNode === fast) {
            cheap.checked = false;
        }
    }
}

good.addEventListener('click', () => handleToggle(good));
cheap.addEventListener('click', () => handleToggle(cheap));
fast.addEventListener('click', () => handleToggle(fast));