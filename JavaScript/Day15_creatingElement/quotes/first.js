const bhagavadGitaQuotes = [
  "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
  "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
  "A person is said to have attained yoga, the union with the Divine, when he is not agitated by the dualities of happiness and distress.",
  "The soul is neither born, nor does it die; it is eternal and indestructible.",
  "Change is the law of the universe. You can be a millionaire, or a pauper in an hour.",
  "Perform your duty and abandon all attachment to success or failure.",
  "One who sees inaction in action, and action in inaction, is intelligent among men.",
  "He who has no attachments can really love others, for his love is pure and divine.",
  "Know that which is neither being nor non-being is the eternal Brahman, the ultimate reality.",
  "The mind is everything. What you think you become.",
  "To the one who has conquered the mind, the mind is the best of friends; but to the one who has failed to do so, the mind will be the greatest enemy.",
  "In this world, there are two kinds of people: those who act out of selfish desires, and those who act out of duty.",
  "It is better to live your own destiny imperfectly than to live an imitation of somebody else’s life with perfection.",
  "Man is made by his belief. As he believes, so he is.",
  "There are three gates to this self-destructive hell: lust, anger, and greed. Renounce these three.",
  "Those who cannot renounce attachment to the results of their work are far from the path.",
  "A Karma-yogi performs action by body, mind, intellect, and senses, without attachment, only for self-purification.",
  "Happiness derived from a combination of the senses and the sense objects is always a cause of distress and should be avoided by all means.",
  "A gift is pure when it is given from the heart to the right person at the right time and at the right place, and when we expect nothing in return.",
  "One should strive and employ oneself to uplift oneself. One should never dishonor oneself. The self is one’s friend as well as one’s enemy.",
  "As they approach me, so I receive them. All paths, Arjuna, lead to me.",
  "Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.",
  "Always perform your duty efficiently and without attachment to the results, because by doing work without attachment one attains the Supreme.",
  "The impermanent appearance of happiness and distress and their disappearance in due course are like the appearance and disappearance of winter and summer seasons. They arise from a sense of perception, and one must learn to tolerate them without being disturbed.",
  "No one who does good work will ever come to a bad end, either here or in the world to come.",
  "What the outstanding person does, others will try to do. The standards such people create will be followed by the whole world.",
  "I am the beginning, middle, and end of creation.",
  "When one’s mind dwells on the objects of Senses, fondness for them grows on him, from fondness comes desire, from desire anger.",
  "The Gita is not a book of commandments but a book of choices.",
  "When your mind has overcome the confusion of duality, you will attain the state of holy indifference to things you hear and things you have heard.",
  "Everything we do produces karma in the mind. In fact, it is in the mind rather than the world that karma’s seeds are planted.",
  "Actions do not cling to me because I am not attached to their results. Those who understand this and practice it live in freedom.",
  "When the mind constantly runs after the wandering senses, it drives away wisdom, like the wind blowing a ship off course.",
  "All that we are is the result of what we have thought: it is founded on our thoughts; it is made of our thoughts.",
  "The law of karma states unequivocally that though we cannot see the connections, we can be sure that everything that happens to us, good and bad, originated once in something we did or thought.",
  "The immature think that knowledge and action are different, but the wise see them as the same.",
  "Death is no more traumatic than taking off an old coat.",
  "Just as the dweller in this body passes through childhood, youth and old age, so at death he merely passes into another kind of body. The wise are not deceived by that.",
  "Seek refuge in the attitude of detachment and you will amass the wealth of spiritual awareness.",
  "The true goal of action is knowledge of the Self.",
  "Those established in Self-realization control their senses instead of letting their senses control them.",
  "Pleasures conceived in the world of the senses have a beginning and an end and give birth to misery, Arjuna.",
  "When a person responds to the joys and sorrows of others as if they were his own, he has attained the highest state of spiritual union.",
  "I am time, the destroyer of all; I have come to consume the world.",
  "All that we are is the result of what we have thought. We are made of our thoughts; we are molded by our thoughts.",
  "There was never a time when I did not exist, nor you, nor any of these kings. Nor is there any future in which we shall cease to be.",
  "Our mistake is in taking this for ultimate reality, like the dreamer thinking that nothing is real except his dream.",
  "The soul is neither born, nor does it die; it is eternal and indestructible.",
  "Change is the law of the universe. You can be a millionaire, or a pauper in an hour.",
  "Perform your duty and abandon all attachment to success or failure.",
  "One who sees inaction in action, and action in inaction, is intelligent among men.",
];

const generateRandomQuotes = () => {
  const random = Math.floor(Math.random() * bhagavadGitaQuotes.length);
  const text = document.getElementById("quote");
  text.textContent = bhagavadGitaQuotes[random];
};

setInterval(generateRandomQuotes, 3000);
// console.log(random);
function generateRandomColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
const cont = document.getElementsByClassName("container")[0];
setInterval(() => {
  document.body.style.backgroundColor = generateRandomColor();
  cont.style.backgroundColor = generateRandomColor();
}, 3000);
