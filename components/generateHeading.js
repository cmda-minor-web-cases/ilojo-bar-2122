export default function generateHeading() {
    if (typeof window !== "undefined") {

        let node = document.querySelectorAll('h2');

        node.forEach(node => {
            if (node) {
                let content = node.textContent.trim().split(" ").map((word, i) => i === 2 || i === 3 ? `<span>${word}</span>` : word);
                node.innerHTML = content.join(" ")
            }
        })
    }
}