// Directory structure data
const directoryStructure = {
    "project_name": {
        "public": {
            "index.html": null,
            "styles": {
                "style.css": null
            },
            "scripts": {
                "script.js": null
            }
        },
        "server": {
            "app.js": null
        }
    }
};

// Function to recursively create directory structure
function createDirectory(parent, structure) {
    for (const [name, content] of Object.entries(structure)) {
        const element = document.createElement('div');
        element.textContent = name;
        if (content !== null && typeof content === 'object') {
            element.classList.add('directory');
            element.addEventListener('click', () => {
                if (element.classList.contains('collapsed')) {
                    element.classList.remove('collapsed');
                    element.classList.add('expanded');
                } else {
                    element.classList.remove('expanded');
                    element.classList.add('collapsed');
                }
            });
            parent.appendChild(element);
            createDirectory(element, content);
        } else {
            element.classList.add('file');
            parent.appendChild(element);
        }
    }
}

// Display directory structure
const fileDirectory = document.getElementById('fileDirectory');
createDirectory(fileDirectory, directoryStructure);
