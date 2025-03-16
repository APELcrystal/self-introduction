// 星の表示を更新する関数
function updateStars(starContainerId, rating) {
    const stars = document.querySelectorAll(`#${starContainerId} .star`);
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected'); // 選択された星にclassを追加
        } else {
            star.classList.remove('selected'); // 選択されていない星からclassを削除
        }
    });
}

// 星を動的に生成する関数
function generateStars(starContainerId, totalStars) {
    const container = document.getElementById(starContainerId);
    container.innerHTML = ''; // 以前の星を削除

    // totalStars の数だけ星を生成
    for (let i = 0; i < totalStars; i++) {
        const span = document.createElement('span');
        span.classList.add('star');
        span.textContent = '★';
        container.appendChild(span);
    }
}


