window.onload = () => {
    const widths = [window.innerWidth];

    if (window.screen?.width) {
      widths.push(window.screen?.width);
    }

    const width = Math.min(...widths);
    if ( width < 1024 ) {
        document.getElementById('root').classList.add('isMobile')
    }
    else {
        document.getElementById('root').classList.remove('isMobile')
    }
    initObserver();
}
window.onresize = () => {
    const widths = [window.innerWidth];

    if (window.screen?.width) {
      widths.push(window.screen?.width);
    }

    const width = Math.min(...widths);
    if ( width < 1024 ) {
        document.getElementById('root').classList.add('isMobile')
    }
    else {
        document.getElementById('root').classList.remove('isMobile')
    }
}
// Define the callback function to execute when an element becomes visible
function onIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if(entry.target.classList.contains('observeElement'))
          entry.target.classList.add('is-visibleTitle');
        else if (entry.target.classList.contains('observeElement'))
          entry.target.classList.add('is-visibleElement');
        
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create an instance of Intersection Observer with the callback function
  function createObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // Adjust the threshold value to control when the element is considered visible
    };
  
    return new IntersectionObserver(onIntersection, options);
  }
  
  // Initialize the observer and start observing elements with the class 'element-to-observe'
  export function initObserver() {
    const observer = createObserver();
    const elementsToObserve = document.querySelectorAll('.observeElement , .observeElement');
    elementsToObserve.forEach(element => {
      observer.observe(element);
    });
  }
  