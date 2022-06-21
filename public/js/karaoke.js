// const allBodyText = document.querySelectorAll('p');

// allBodyText.forEach(paragraph => {
//     const paragraphString = paragraph.innerHTML;
//     const singleWord = paragraphString.split(' ')
//     const wrapped = []

//     singleWord.forEach(word => {
//         const wrappedWord = `<span class="karaoke">${word}</span>`;
//         wrapped.push(wrappedWord)
//     })
//     paragraph.innerHTML = wrapped.join(' ')

//     const myObserver = new IntersectionObserver(elements => {
//         if (elements[0].intersectionRatio !== 0) {
//             console.log("The element is in view!");
//             // console.log(elements[0].target);

//             const inviewWrapped = document.querySelectorAll(`p > span`);

//             let i = 0
        
//             // console.log(inviewWrapped[1]);
//             setInterval(() => {
//                 inviewWrapped[i++].classList.add('read');
//                 // console.log(inviewWrapped[i++]);

//             }, 100)
            

//         } else {
//             console.log("The element is out of view")
//         }
//     })
      
      
//     myObserver.observe(paragraph);
// })

