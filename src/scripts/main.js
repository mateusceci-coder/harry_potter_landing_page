document.addEventListener('DOMContentLoaded', function() {    
    const section = document.querySelector('section')
    const heightSection = section.clientHeight

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY

        if(currentPosition < heightSection) {
            hideButton()
        } else {
            showButton()
        }
    })
})


//Change underline link
function updateLinks() {
    const links = document.querySelectorAll('a');
    
    links.forEach((link) => {
    const targetId = link.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement && isElementInViewport(targetElement)) {
        link.classList.add('is-active');
    } else {
        link.classList.remove('is-active');
    }
    });
}

window.addEventListener('scroll', updateLinks)


function hideButton() {
    const headerButton = document.querySelector("#headerButton")
    headerButton.classList.add('is-hidden')
}

function showButton() {
    const headerButton = document.querySelector("#headerButton")
    headerButton.classList.remove('is-hidden')
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}



//Change collectible-item
const collectibleItems = document.querySelectorAll('.collectible-item');
    let currentIndex = 0;

    function showItem(index) {
        for (let i = 0; i < collectibleItems.length; i++) {
        collectibleItems[i].classList.remove('visible');
    }
        collectibleItems[index].classList.add('visible');
    }

    document.getElementById('nextButton').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % collectibleItems.length;
        showItem(currentIndex);
    });

    document.getElementById('prevButton').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + collectibleItems.length) % collectibleItems.length;
        showItem(currentIndex);
    });

   
    showItem(currentIndex);