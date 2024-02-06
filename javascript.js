window.addEventListener('DOMContentLoaded', function () {
            var aboutLink = document.querySelector('a[href="#about"]');
    
            aboutLink.addEventListener('click', function (event) {
                event.preventDefault(); // 阻止點擊連結時的預設行為
    
                var aboutSection = document.getElementById('about-section');
                aboutSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動到目標位置
            });
        });
        window.addEventListener('DOMContentLoaded', function () {
            var aboutLink = document.querySelector('a[href="#contact"]');
    
            aboutLink.addEventListener('click', function (event) {
                event.preventDefault(); // 阻止點擊連結時的預設行為
    
                var aboutSection = document.getElementById('collme');
                aboutSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動到目標位置
            });
        });