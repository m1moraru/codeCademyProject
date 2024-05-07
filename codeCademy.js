function generateRandomNumber (num) {
    return Math.floor(Math.random() * num);

}

const programmingJokes = {
    question: [
        'How do robots eat pizza?', 
        'What does the R in Recursion stand for?', 
        'How did the first program die?',
        'Why did the monkey fall from the tree?', 
        'Why do Java programmers wear glasses?', 
        'What do you call 8 hobbits?',
        'What do you call when 8 mosquitos bit you?' ],
    
    answer: [
        'One byte at a time.', 
        'Recursion.', 
        'It was executed.', 
        ' It’s node got deleted.', 
        'They can’t C#.', 
        'A hobbyte', 
        'A mosquito byte.'],

    humorInJoke: [
        'That was sharp! Did it come with extra cheese?',
        'Recursion, huh? I feel like I have seen this joke before!',
        'Executed? I guess that joke had quite the impact!',
        'That answer fell a bit. Ready to climb back up?',
        'Java programmers with glasses? Now that is a clear vision of humor!',
        'Hobbits? Sounds like a small world of big jokes!',
        'Mosquito bites? This joke really sucks... in a good way!' 
    ]
};

// Get a random index based on the length of the question array
let randomIdx = generateRandomNumber(programmingJokes.question.length);

// Retrieve a random question using the generated index
let randomQuestion = programmingJokes.question[randomIdx];

// Retrieve the corresponding answer using the same index
let correspondingAnswer = programmingJokes.answer[randomIdx];

//Retrieve the corrisponding image using the same index
let humorInJoke = programmingJokes.humorInJoke[randomIdx];

// Output the random question and its corresponding answer
console.log(`Q: ${randomQuestion}`);
console.log(`A: ${correspondingAnswer}`);
console.log(`${humorInJoke}`)
