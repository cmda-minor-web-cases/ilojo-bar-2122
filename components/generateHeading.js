export default function generateHeading() {
    if (typeof window !== "undefined") {

        let node = document.querySelectorAll('h2, h1');

        node.forEach(node => {
            if (node) {
                let content = node.textContent.trim().split(" ").map((word, i) => i === 1 || i === 2 ? `<span>${word}</span>` : word);
                console.log(content);
                node.innerHTML = content.join(" ")
            }
        })
    }
}