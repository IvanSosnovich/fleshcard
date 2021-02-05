const { connect, User, Question } = require("./model");

async function main() {
  await connect(
    "mongodb://localhost:27017/flashcard",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Успешно подключились к базе данных.");
    }
  );

  const questions = [];
  const users = [];

  const question1 = new Question({
    question: "На какой планете самый короткий день?",
    answer1: "Меркурий",
    answer2: "Земля",
    answer3: "Нептун",
    answer4: "Юпитер",
    rightAnswer: "Юпитер",
  });

  const question2 = new Question({
    question: "Какой континент самый маленький в мире?",
    answer1: "Австралия",
    answer2: "Антарктида",
    answer3: "Соединенные Штаты Америки",
    answer4: "Северная Америка",
    rightAnswer: "Австралия",
  });

  const question3 = new Question({
    question: "Сколько костей в теле взрослого человека?",
    answer1: "501",
    answer2: "105",
    answer3: "206",
    answer4: "347",
    rightAnswer: "206",
  });

  const question4 = new Question({
    question: "Какое государство часто называют «страной ветряных мельниц»?",
    answer1: "Венесуэла",
    answer2: "Швейцария",
    answer3: "Соединенные Штаты Америки",
    answer4: "Нидерланды",
    rightAnswer: "Нидерланды",
  });

  const question5 = new Question({
    question: "Назовите страну – родину Олимпийских игр:",
    answer1: "Греция",
    answer2: "Египет",
    answer3: "Германия",
    answer4: "Португалия",
    rightAnswer: "Греция",
  });

  const question6 = new Question({
    question:
      "Какая страна заслуженно получила статус мирового лидера по производству сыра и вина?",
    answer1: "Италия",
    answer2: "Испания",
    answer3: "Франция",
    answer4: "Швейцария",
    rightAnswer: "Франция",
  });

  const question7 = new Question({
    question: "В какой стране появился и начал развиваться футбол?",
    answer1: "Бразилия",
    answer2: "Англия",
    answer3: "Испания",
    answer4: "Португалия",
    rightAnswer: "Англия",
  });

  const question8 = new Question({
    question:
      "Команда из какой страны чаще всего становилась победителем чемпионата мира и сколько раз?",
    answer1: "Бразилия",
    answer2: "Англия",
    answer3: "Испания",
    answer4: "Германия",
    rightAnswer: "Бразилия",
  });

  const question9 = new Question({
    question: "Назовите правильные размеры стандартных футбольных ворот?",
    answer1: "7,22 на 2,45 метра",
    answer2: "6,9 на 2,11 метра",
    answer3: "7,11 на 2,33 метра",
    answer4: "7,32 на 2,44 метра+",
    rightAnswer: "7,32 на 2,44 метра+",
  });

  const question10 = new Question({
    question: "Сколько существует размеров футбольных мячей?",
    answer1: "5 размеров",
    answer2: "2 размера",
    answer3: "3 размерa",
    answer4: "6 размеров",
    rightAnswer: "5 размеров",
  });

  const question11 = new Question({
    question: "При каких условиях футболисты играют красным или желтым мячом?",
    answer1: "Если мяч вылетел за пределы поля",
    answer2: "Во втором тайме",
    answer3: "Когда начинается дополнительное время игры",
    answer4: "Во время неблагоприятных погодных условий – дождь, снег, туман",
    rightAnswer:
      "Во время неблагоприятных погодных условий – дождь, снег, туман",
  });

  const question12 = new Question({
    question: "Какое сухопутное животное может открыть рот максимально широко?",
    answer1: "Аллигатор",
    answer2: "Крокодил",
    answer3: "Бабуин",
    answer4: "Бегемот",
    rightAnswer: "Бегемот",
  });

  const question13 = new Question({
    question: "Почему каланы («морские выдры») держатся за руки?",
    answer1: "Потому что они любят друг друга",
    answer2: "Чтобы показать, что они в одной семье",
    answer3: "Чтобы они не уплывали, когда спят",
    answer4: "Потому что они играют",
    rightAnswer: "Чтобы они не уплывали, когда спят",
  });

  const question14 = new Question({
    question: "Почему змеи высовывают язык?",
    answer1: "Чтобы напугать хищников",
    answer2: "Чтобы облизать добычу",
    answer3: "Чтобы издать шипящий звук",
    answer4: "Чтобы «понюхать» воздух",
    rightAnswer: "Чтобы «понюхать» воздух",
  });

  const question15 = new Question({
    question: "Какая планета самая большая в Солнечной системе?",
    answer1: "Юпитер",
    answer2: "Сатурн",
    answer3: "Нептун",
    answer4: "Меркурий",
    rightAnswer: "Юпитер",
  });

  questions.push(
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15
  );

  await Question.insertMany(questions);
  await User.insertMany(users);
}

main();
