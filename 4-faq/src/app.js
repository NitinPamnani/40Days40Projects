//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function(eachQuestion){
    const btn = eachQuestion.querySelector('.question-btn');
    btn.addEventListener('click', function(event){
        questions.forEach(function(item){
            //item.classList.remove("show-text");
            if(item!==eachQuestion) {
                item.classList.remove("show-text");
            }
        })
        eachQuestion.classList.toggle("show-text");
    })

})



// traversing the dom

// const questionButtons = document.querySelectorAll(".question-btn");

// questionButtons.forEach(function(eachBtn) {
//     eachBtn.addEventListener('click', function(event){
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");

//     });
// });


