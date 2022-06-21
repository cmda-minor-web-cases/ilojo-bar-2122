let observedElements = document.querySelectorAll('img'); // Define the elements you want to intiate an action on

const options = { //define your options
    root: null, // Null = based on viewport
    rootMargin: "0px", // Margin for root if desired
    treshold: 0.5
}

const inViewCallback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // define the event/property you want to use
            entry.target.classList.add('inview');
            //do something with the element
        }
    });
}
let observer = new IntersectionObserver(inViewCallback, options); // create a new instance using our callback which contains our elements and actions, using the options we defined

observedElements.forEach(element => {
    observer.observe(element) // run the observer 
});