//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
        quote: `"Life is about making an impact, not making an income."`,
        person: `Kevin Kruse`
    },

    {
        quote: `"Whatever the mind of man can conceive and believe, it can achieve."`,
        person: `Napoleon Hill`
    },

    {
        quote: `"Strive not to be a success, but rather to be of value."`,
        person: `Albert Einstein`
    },

    {
        quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. "`,
        person: `Wayne Gretzky`
    },

    {
        quote: `" You miss 100% of the shots you don’t take."`,
        person: `Wayne Gretzky`
    },

    {
        quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
        person: `Amelia Earhart`
    },

    {
        quote: `"Every strike brings me closer to the next home run."`,
        person: `Babe Ruth`
    },

    {
        quote: `"Definiteness of purpose is the starting point of all achievement."`,
        person: `W. Clement Stone`
    },

    {
        quote: `" Two roads diverged in a wood, and I—I took the one less traveled by, 
    And that has made all the difference. "`,
        person: `Robert Frost`
    },

    {
        quote: `" We become what we think about. "`,
        person: `Earl Nightingale`
    },

    {
        quote: `"Life is what happens to you while you’re busy making other plans. "`,
        person: `John Lennon`
    },

    {
        quote: `"Life is 10% what happens to me and 90% of how I react to it."`,
        person: `Charles Swindoll`
    },

    {
        quote: `"The most common way people give up their power is by thinking they don’t have any."`,
        person: `Alice Walker`
    },

    {
        quote: `"The mind is everything. What you think you become. "`,
        person: `Buddha`
    },

    {
        quote: `"The best time to plant a tree was 20 years ago. 
    The second best time is now. "`,
        person: `Chinese Proverb`
    },

    {
        quote: `"Eighty percent of success is showing up.  "`,
        person: `Socrates`
    },

    {
        quote: `"An unexamined life is not worth living.  "`,
        person: `Woody Allen`
    },

    {
        quote: `"Your time is limited, 
    so don’t waste it living someone else’s life. "`,
        person: `Steve Jobs`
    },

    {
        quote: `"Winning isn’t everything, but wanting to win is.  "`,
        person: `Vince Lombardi`
    },

    {
        quote: `"I am not a product of my circumstances. 
    I am a product of my decisions.  "`,
        person: `Stephen Covey`
    },

    {
        quote: `"Every child is an artist. 
     The problem is how to remain an artist once he grows up.  "`,
        person: `Pablo Picasso`
    },

    {
        quote: `" You can never cross the ocean until you have the courage to lose sight of the shore.  "`,
        person: `Christopher Columbus`
    },

    {
        quote: `" Either you run the day, or the day runs you. "`,
        person: `Jim Rohn`
    },

    {
        quote: `" Whether you think you can or you think you can’t, 
    you’re right. "`,
        person: `Henry Ford`
    },

    {
        quote: `" The two most important days in your life are the day you are born and the day you find out why. "`,
        person: `Mark Twain`
    },

    {
        quote: `"The best revenge is massive success. "`,
        person: `Frank Sinatra`
    },

    {
        quote: `"Life shrinks or expands in proportion to one's courage. "`,
        person: `Anais Nin`
    },

    {
        quote: `" There is only one way to avoid criticism: do nothing, 
    say nothing, and be nothing. "`,
        person: `Aristotle`
    },

    {
        quote: `" TAsk and it will be given to you; search, and you will find; 
    knock and the door will be opened for you.  "`,
        person: `Jesus`
    },

    {
        quote: `" The only person you are destined to become is the person you decide to be.  "`,
        person: `Ralph Waldo Emerson`
    },

    {
        quote: `" Go confidently in the direction of your dreams.  Live the life you have imagined.  "`,
        person: `Henry David Thoreau`
    },

    {
        quote: `"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."`,
        person: `Booker T. Washington`
    },

    {
        quote: `"Certain things catch your eye, but pursue only those that capture the heart."`,
        person: `Ancient Indian Proverb`
    },

    {
        quote: `"Believe you can and you’re halfway there."`,
        person: `Theodore Roosevelt`
    },

    {
        quote: `"Everything you’ve ever wanted is on the other side of fear."`,
        person: `George Addair`
    },

    {
        quote: `"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."`,
        person: `Plato`
    },

    {
        quote: `"Teach thy tongue to say, 'I do not know,' and thou shalt progress."`,
        person: `Maimonides`
    },

    {
        quote: `"Start where you are. Use what you have. Do what you can."`,
        person: `Arthur Ashe`
    },

    {
        "quote": "Fall seven times and stand up eight.",
        "person": "Japanese Proverb"
    },

    {
        "quote": "Everything has beauty, but not everyone can see.",
        "person": "Confucius"
    },

    {
        "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        "person": "Anne Frank"
    },

    {
        "quote": "When I let go of what I am, I become what I might be.",
        "person": "Lao Tzu"
    },

    {
        "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        "person": "Maya Angelou"
    },

    {
        "quote": "Happiness is not something readymade. It comes from your own actions.",
        "person": "Dalai Lama"
    },

    {
        "quote": "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
        "person": "Sheryl Sandberg"
    },

    {
        "quote": "If the wind will not serve, take to the oars.",
        "person": "Latin Proverb"
    },

    {
        "quote": "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
        "person": "Unknown"
    },

    {
        "quote": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        "person": "Marie Curie"
    },

    {
        "quote": "Too many of us are not living our dreams because we are living our fears.",
        "person": "Les Brown"
    },

    {
        "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "person": "Joshua J. Marine"
    },

    {
        "quote": "If you want to lift yourself up, lift up someone else.",
        "person": "Booker T. Washington"
    },

    {
        "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        "person": "Leonardo da Vinci"
    },

    {
        "quote": "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
        "person": "Jamie Paolinetti"
    },

    {
        "quote": "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
        "person": "Erica Jong"
    },

    {
        "quote": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        "person": "Bob Dylan"
    },

    {
        "quote": "I didn’t fail the test. I just found 100 ways to do it wrong.",
        "person": "Benjamin Franklin"
    },

    {
        "quote": "In order to succeed, your desire for success should be greater than your fear of failure.",
        "person": "Bill Cosby"
    },

    {
        "quote": "A person who never made a mistake never tried anything new.",
        "person": "Albert Einstein"
    },

    {
        "quote": "The person who says it cannot be done should not interrupt the person who is doing it.",
        "person": "Chinese Proverb"
    },

    {
        "quote": "There are no traffic jams along the extra mile.",
        "person": "Roger Staubach"
    },

    {
        "quote": "It is never too late to be what you might have been.",
        "person": "George Eliot"
    },

    {
        "quote": "You become what you believe.",
        "person": "Oprah Winfrey"
    },

    {
        "quote": "I would rather die of passion than of boredom.",
        "person": "Vincent van Gogh"
    },

    {
        "quote": "A truly rich man is one whose children run into his arms when his hands are empty.",
        "person": "Unknown"
    },

    {
        "quote": "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
        "person": "Abigail Van Buren"
    },

    {
        "quote": "Build your own dreams, or someone else will hire you to build theirs.",
        "person": "Farrah Gray"
    },

    {
        "quote": "Education costs money. But then so does ignorance.",
        "person": "Sir Claus Moser"
    },

    {
        "quote": "I have learned over the years that when one's mind is made up, this diminishes fear.",
        "person": "Rosa Parks"
    },

    {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "person": "Confucius"
    },

    {
        "quote": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "person": "Oprah Winfrey"
    },

    {
        "quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        "person": "Dalai Lama"
    },

    {
        "quote": "You can’t use up creativity. The more you use, the more you have.",
        "person": "Maya Angelou"
    },

    {
        "quote": "Dream big and dare to fail.",
        "person": "Norman Vaughan"
    },

    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "person": "Martin Luther King Jr."
    },

    {
        "quote": "Do what you can, where you are, with what you have.",
        "person": "Teddy Roosevelt"
    },

    {
        "quote": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
        "person": "Tony Robbins"
    },

    {
        "quote": "Dreaming, after all, is a form of planning.",
        "person": "Gloria Steinem"
    },

    {
        "quote": "It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.",
        "person": "Mae Jemison"
    },

    {
        "quote": "You may be disappointed if you fail, but you are doomed if you don't try.",
        "person": "Beverly Sills"
    },

    {
        "quote": "Remember no one can make you feel inferior without your consent.",
        "person": "Eleanor Roosevelt"
    },

    {
        "quote": "Life is what we make it, always has been, always will be.",
        "person": "Grandma Moses"
    },

    {
        "quote": "The question isn’t who is going to let me; it’s who is going to stop me.",
        "person": "Ayn Rand"
    },

    {
        "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        "person": "Henry Ford"
    },

    {
        "quote": "It’s not the years in your life that count. It’s the life in your years.",
        "person": "Abraham Lincoln"
    },

    {
        "quote": "Change your thoughts and you change your world.",
        "person": "Norman Vincent Peale"
    },

    {
        "quote": "Either write something worth reading or do something worth writing.",
        "person": "Benjamin Franklin"
    },

    {
        "quote": "Nothing is impossible, the word itself says, 'I’m possible!'",
        "person": "Audrey Hepburn"
    },

    {
        "quote": "The only way to do great work is to love what you do.",
        "person": "Steve Jobs"
    },

    {
        "quote": "If you can dream it, you can achieve it.",
        "person": "Zig Ziglar"
    }


]

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})




























