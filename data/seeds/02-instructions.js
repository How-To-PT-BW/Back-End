
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step_number: 1,
          step_title: 'Body',
          description: 'There are plenty of different ways you could hold a crochet hook and yarn, but most of the time, crocheters fall into either of two groups: the pencil grippers and the knife grippers. Learn how each method works, as well as how to hold a Tunisian crochet hook. As you try out these grips, keep in mind that these are only the most common ways of working. There are lots of possibilities and variations, so if they do not work for you keep trying different things to see what is most comfortable for you.When you hold your crochet hook in much the same way you would hold a pencil or pen, it is called the "pencil grip." The pencil grip gives you the same type of control as you would have when writing with a pencil or pen, or when painting with a paintbrush. In this method, the hook typically works from above and goes down into the stitches. ',
          how_to_id: 1
        },
        {

          step_number: 2,
          step_title: 'Head',
          description: 'There are plenty of different ways you could hold a crochet hook and yarn, but most of the time, crocheters fall into either of two groups: the pencil grippers and the knife grippers. Learn how each method works, as well as how to hold a Tunisian crochet hook. As you try out these grips, keep in mind that these are only the most common ways of working. There are lots of possibilities and variations, so if they do not work for you, keep trying different things to see what is most comfortable for you. When you hold your crochet hook in much the same way you wouldd hold a pencil or pen, it is called the "pencil grip." The pencil grip gives you the same type of control as you would have when writing with a pencil or pen, or when painting with a paintbrush. In this method, the hook typically works from above and goes down into the stitches. ',
          how_to_id: 1
        },
        {

          step_number: 3,
          step_title: 'Body',
          description: 'There are plenty of different ways you could hold a crochet hook and yarn, but most of the time, crocheters fall into either of two groups: the pencil grippers and the knife grippers. Learn how each method works, as well as how to hold a Tunisian crochet hook. As you try out these grips, keep in mind that these are only the most common ways of working. There are lots of possibilities and variations, so if they do not work for you, keep trying different things to see what is most comfortable for you.When you hold your crochet hook in much the same way you would hold a pencil or pen, it is called the "pencil grip." The pencil grip gives you the same type of control as you would have when writing with a pencil or pen, or when painting with a paintbrush.In this method, the hook typically works from above and goes down into the stitches. ',
          how_to_id: 1
        },
        {

          step_number: 4,
          step_title: 'Assembly',
          description: 'There are plenty of different ways you could hold a crochet hook and yarn, but most of the time, crocheters fall into either of two groups: the pencil grippers and the knife grippers. Learn how each method works, as well as how to hold a Tunisian crochet hook. As you try out these grips, keep in mind that these are only the most common ways of working. There are lots of possibilities and variations, so if they do not work for you, keep trying different things to see what is most comfortable for you.When you hold your crochet hook in much the same way you would hold a pencil or pen, it is called the "pencil grip." The pencil grip gives you the same type of control as you would have when writing with a pencil or pen, or when painting with a paintbrush. In this method, the hook typically works from above and goes down into the stitches. ',
          how_to_id: 1
        },
        {

          step_number: 1,
          step_title: 'Find a great big river.',
          description: 'The trick is to find you one of those rivers that’s big enough that when your elephant walks into it the water is like above their shoulders but not totally above their back so that they’re not underwater.  Elephants are like ten feet tall so find a river that’s like six feet deep.',
          how_to_id: 2
        },
        {

          step_number: 2,
          step_title: 'Soak elephant with river water',
          description: 'The trick is to find you one of those rivers that’s big enough that when your elephant walks into it the water is like above their shoulders but not totally above their back so that they’re not underwater.  Elephants are like ten feet tall so find a river that’s like six feet deep.',
          how_to_id: 2
        },
        {

          step_number: 3,
          step_title: 'Scrub elephant with brush and soap',
          description: 'The trick is to find you one of those rivers that’s big enough that when your elephant walks into it the water is like above their shoulders but not totally above their back so that they’re not underwater.  Elephants are like ten feet tall so find a river that’s like six feet deep.',
          how_to_id: 2
        },
        {

          step_number: 4,
          step_title: 'Rinse off with river water',
          description: 'The trick is to find you one of those rivers that’s big enough that when your elephant walks into it the water is like above their shoulders but not totally above their back so that they’re not underwater.  Elephants are like ten feet tall so find a river that’s like six feet deep.',
          how_to_id: 2
        }

      ]);
    });
};
