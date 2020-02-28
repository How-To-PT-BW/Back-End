
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('how_to').del()
    .then(function () {
      // Inserts seed entries
      return knex('how_to').insert([
        {

          title: 'Crochet a Baby Yoda',
          problem: 'Official dolls will not be available until Spring 2020, and your kid(or you) need one now.',
          solution: 'Follow the below steps and the attached pattern to make a little 50-year old traesure of your own. I have spoken.',
          topic: 'Arts and Crafts',
          user_id: 1
        },
        {
          title: 'Washing an Elephant',
          problem: 'Sometimes these elephants man the just need washinn\'',
          solution: 'Water, soap, and good stiff brushes and get scrubbinn\'',
          topic: 'Home and Garden',
          user_id: 1
        }
        
      ]);
    });
};
