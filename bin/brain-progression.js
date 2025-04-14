#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateProgression = (length, start, step, hiddenIndex) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return { progression, hiddenValue };
};

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    const totalQuestions = 3;
    for (let i = 0; i < totalQuestions; i++) {
        const length = Math.floor(Math.random() * 6) + 5;
        const start = Math.floor(Math.random() * 100);
        const step = Math.floor(Math.random() * 10) + 1;
        const hiddenIndex = Math.floor(Math.random() * length);

        const { progression, hiddenValue } = generateProgression(length, start, step, hiddenIndex);

        const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);

        if (parseInt(userAnswer, 10) === hiddenValue) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}! You've answered all questions correctly!`);
};

playGame();
