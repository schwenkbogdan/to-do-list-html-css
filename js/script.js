var userAgent = navigator.userAgent;

if (userAgent.includes('Mobile')) {
    console.log('Пользователь использует мобильное устройство.');
} else {
    console.log('Пользователь использует настольное устройство.');
}

const markdownFilePath = 'content/README.md';

function loadMarkdownFile(filePath) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const markdownContent = xhr.responseText;
            document.getElementById('markdown-content').textContent = markdownContent;
        }
    };
    xhr.send();
}

// Загружаем содержимое файла Markdown и отображаем его
loadMarkdownFile(markdownFilePath);


const markdownContent = `
# Заголовок
Это текст в *курсиве*.
`;

const htmlContent = convertMarkdownToHtml(markdownContent);
document.getElementById('markdown-content').innerHTML = htmlContent;

function convertMarkdownToHtml(markdown) {
    // код для преобразования Markdown в HTML
    return html;
}   