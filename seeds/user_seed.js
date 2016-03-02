
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('readit_posts').del(),

    // Inserts seed entries
    knex('readit_posts').insert({id: 1000, title: 'Polar Bears!', author: 'Bear Face', img_url:'https://media0.giphy.com/media/lXiRnox22vuMUm1Og/200.gif', description:'Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?', votes: 5}),
    knex('readit_posts').insert({id: 1001, title: 'Sneak Cats!', author: 'Bear Face', img_url:'https://media4.giphy.com/media/h7pmVQ2crHvd6/200.gif', description:'Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?', votes: -2}),
    knex('readit_posts').insert({id: 1002, title: 'spot!', author: 'Bear Face', img_url:'https://media2.giphy.com/media/oDLDbBgf0dkis/200.gif', description:'Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?', votes: 2}),
    knex('readit_posts').insert({id: 1003, title: 'sloth!!', author: 'Bear Face', img_url:'https://media4.giphy.com/media/dmmcDyDMjTVEQ/200.gif', description:'Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?', votes: 11})
  );
};
