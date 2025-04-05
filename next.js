document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('animated-title');
    const text = title.textContent;
    title.innerHTML = ''; // 元のテキストをクリア

    // 各文字を<span>で囲み、インデックスを設定
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.setProperty('--index', index);
        title.appendChild(span);
    });
});
