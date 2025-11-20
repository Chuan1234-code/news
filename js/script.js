// 新闻分类筛选功能
document.addEventListener('DOMContentLoaded', function() {
    // 分类按钮事件
    const categoryButtons = document.querySelectorAll('.category-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');
            
            const selectedCategory = this.getAttribute('data-category');
            
            // 筛选新闻卡片
            newsCards.forEach(card => {
                if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // 暗黑/亮色模式切换（可选功能）
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌙';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255,255,255,0.1);
        border: 1px solid #333;
        color: white;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        this.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
});

// 文章详情页动态内容加载
function loadArticleContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('news');
    
    // 这里可以根据newsId加载不同的文章内容
    // 目前是静态内容，可以扩展为动态加载
    console.log('Loading article:', newsId);
}

// 如果是在文章页面，加载内容
if (window.location.pathname.includes('article.html')) {
    loadArticleContent();
}
