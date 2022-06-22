    if (typeof window !== "undefined") {

        let node = document.querySelectorAll('h2, h1');

        node.forEach(node => {
            if (node) {
                let content = node.textContent.trim().split(" ").map((word, i) => i === 1 || i === 2 ? `<span>${word}</span>` : word);
                node.innerHTML = content.join(" ")
            }
        })
    }
