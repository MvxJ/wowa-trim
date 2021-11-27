const counters = document.querySelectorAll('.wowa-number-count');
const speed = 200;
const card = document.querySelector('.wowa-services-counter-card');

card.addEventListener('scroll', counter());

function counter() {
    counters.forEach(counter => {
        const updatedValue = () => {
            const target = +counter.getAttribute('data-target')
            const count = +counter.innerText;
    
            const inc = target/speed;
    
            if (count < target) {
                counter.innerText = Math.round(count + inc);
                setTimeout(updatedValue, 1);
            } else {
                count.innerText = target;
            }
        }
    
        updatedValue();
    });
}
