const aboutArticle = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll(".content");


aboutArticle.addEventListener('click', function(event){
    const id = event.target.dataset.id;

    if(id) {
        btns.forEach(function(eachbtn) {
            eachbtn.classList.remove("active");
            event.target.classList.add("active");
        });

        //hide all articles and display one which has matching id
        articles.forEach(function(article){
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})