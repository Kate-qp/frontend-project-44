#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для генерации арифметической прогрессии
const generateProgression = (length, start, step, hiddenIndex) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..'; // Заменяем скрытое значение на '..'
    return { progression, hiddenValue };
};

// Функция для запуска игры
const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    const totalQuestions = 3; // Количество вопросов
    for (let i = 0; i < totalQuestions; i++) {
        const length = Math.floor(Math.random() * 6) + 5; // Длина прогрессии от 5 до 10
        const start = Math.floor(Math.random() * 100);
        const step = Math.floor(Math.random() * 10) + 1; // Шаг от 1 до 10
        const hiddenIndex = Math.floor(Math.random() * length); // Случайная позиция скрытого элемента

        const { progression, hiddenValue } = generateProgression(length, start, step, hiddenIndex);

        const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);

        if (parseInt(userAnswer, 10) === hiddenValue) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
            console.log(`Let's try again, ${name}!`);
            return; // Завершение игры при неправильном ответе
        }
    }

    console.log(`Congratulations, ${name}! You've answered all questions correctly!`);
};

playGame();