const questionList = [
    new Question(
        "Beşiktaş kaç yılında kuruldu?",
        {a:"1903",b:"1900",c:"1950",d:"1951"},
        "a"
    ),
    new Question(
        "Şenol Güneş Kaç Yaşındadır?",
        {a:"55",b:"73",c:"31",d:"90"},
        "b"
    ),
    new Question(
        "Süperligde Namağlup Şampiyon Kimdir?",
        {a:"Beşiktaş",b:"Galatasaray",c:"Fenerbahçe",d:"Trabzonspor"},
        "a"
    ),
    new Question(
        "Bu uygulamayı kim geliştiriyor?",
        {a:"beni seçme",b:"Cevap d knk",c:"Ben değil",d:"Tabiki ben"},
        "d"
    ),
];

const quiz = new Quiz(questionList);

document.getElementById("getQuestion").addEventListener("click",function() {
    console.log("soru getirdim");

    console.log(quiz.getQuestions());
    quiz.questionIndex += 1;
    
    
});