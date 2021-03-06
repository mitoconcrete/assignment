const dummyDescription = [
  "Star Is Born, A",
  "Tender Mercies",
  "Ref, The",
  "Watch on the Rhine",
  "Hidden (a.k.a. Cache) (Caché)",
  "Three Men and a Cradle (3 hommes et un couffin)",
  "Sunset Strip",
  "Freejack",
  "Dark Horse (Voksne mennesker)",
  "Heist",
  "Sudden Manhattan",
  "EXPO: Magic of the White City",
  "South Park: Imaginationland",
  "Walkabout",
  "Jaws",
  "Adelheid",
  "No Exit (Huis clos)",
  "Poltergeist",
  "Cause for Alarm!",
  "Boy on a Dolphin",
  "Renaissance Man",
  "Animal Factory",
  "Rango",
  "Scars of Dracula",
  "New Town Killers",
  "Hollywood Ending",
  "Mental",
  "Follow Me Quietly",
  "Lars and the Real Girl",
  "Clockwatchers",
  "Boys Life 2",
  "Barbary Coast",
  "Pelle Svanslös",
  "Fun in Acapulco",
  "Sita Sings the Blues",
  "Scott Walker: 30 Century Man",
  "Redirected",
  "To the Sea (Alamar)",
  "Varg Veum - Fallen Angels (Varg Veum - Falne Engler)",
  "Il Mare (Siworae)",
  "Broken Kingdom",
  "Deadly Friend",
  "Some Came Running",
  "Second Wind (Le deuxième souffle) (Second Breath)",
  "Violette (Violette Nozière)",
  "Carandiru",
  "Our Folks (Sami swoi)",
  "Body of War",
  "Brigham Young",
  "Ben-Hur: A Tale of the Christ",
  "Passchendaele",
  "Ordinary Sinner",
  "Brother (Hermano)",
  "Roadside Prophets",
  "One Missed Call (Chakushin ari)",
  "Ballad of the Paper Balloons (a.k.a. Humanity and Paper Balloons) (Ninjô kami fûsen)",
  "Martyrs",
  "Monterey Pop",
  "Cherry Blossoms (Kirschblüten - Hanami)",
  "Outfoxed: Rupert Murdoch's War on Journalism",
  "Pale Rider",
  "Man with the Gun",
  "Disgrace",
  "Knock on Any Door",
  "Slap Shot 2: Breaking the Ice",
  "Clockers",
  "Pelle the Conqueror (Pelle erobreren)",
  "Ocho apellidos vascos",
  "Tomcats",
  "Superstar",
  "Bionicle 2: Legends of Metru Nui",
  "Liberal Arts",
  "At Sea",
  "This Girl's Life",
  "Vasermil",
  "Smooth Talk",
  "Dark Blue",
  "Titanic",
  "Bright Days Ahead",
  "Mischief",
  "Into the Woods",
  "Training Day",
  "Kate & Leopold",
  "Clownhouse",
];

const dummyTitle = [
  "Yodo",
  "Yoveo",
  "Yakidoo",
  "Fatz",
  "Zoozzy",
  "Meemm",
  "Minyx",
  "Jaxspan",
  "Shuffletag",
  "Meevee",
  "Thoughtworks",
  "Thoughtworks",
  "Kaymbo",
  "Oyoba",
  "Zoozzy",
  "Jabbersphere",
  "Topicshots",
  "Myworks",
  "Flashdog",
  "Zoovu",
  "Trunyx",
  "Voolith",
  "Jazzy",
  "Gigaclub",
  "Twinder",
  "Zooveo",
  "Dabvine",
  "Eabox",
  "Brightdog",
  "Flipbug",
  "Topicshots",
  "Vimbo",
  "Leenti",
  "Babbleblab",
  "Layo",
  "Realblab",
  "Dynabox",
  "Katz",
  "Pixope",
  "Katz",
  "Devcast",
  "Zooxo",
  "Leexo",
  "Yodo",
  "Wikizz",
  "Youtags",
  "Einti",
  "InnoZ",
  "Thoughtbridge",
  "Latz",
  "Topicblab",
  "Twitterbeat",
  "Dynazzy",
  "Jaxworks",
  "Dynava",
  "Tagfeed",
  "Fliptune",
  "Zooxo",
  "Trilia",
  "Livetube",
  "Skibox",
  "Photofeed",
  "Chatterpoint",
  "Brainlounge",
  "Skynoodle",
  "Photojam",
  "Twitterlist",
  "Oyondu",
  "Abatz",
  "Bubblebox",
  "Quimm",
  "Babbleset",
  "Avamba",
  "Eire",
  "Voomm",
  "Zazio",
  "Thoughtbridge",
  "Jabbercube",
  "Edgeblab",
  "Tanoodle",
  "Jamia",
  "Thoughtsphere",
  "Topicshots",
  "Rhybox",
  "Wikizz",
  "Yozio",
  "Edgetag",
  "Mudo",
  "Centimia",
  "Devpoint",
  "Topiczoom",
  "Rhycero",
  "Pixonyx",
  "Browsezoom",
  "Topicblab",
  "Oyoba",
  "Twitterworks",
  "Wikivu",
  "Quimba",
  "Skivee",
];

const dummyArticleDataMaker = (roopCnt) => {
  const data = [];
  let cnt = roopCnt;
  if (cnt > 8) {
    cnt = 8;
  }

  for (let i = 0; i < cnt; i++) {
    const titleIdx = parseInt(Math.random() * dummyTitle.length);
    const descriptionIdx = parseInt(Math.random() * dummyDescription.length);

    const payload = {
      title: dummyTitle[titleIdx],
      description:
        dummyDescription[descriptionIdx] +
        dummyDescription[descriptionIdx] +
        dummyDescription[descriptionIdx] +
        dummyDescription[descriptionIdx],
      src: `/public/image/${i}.jpg`,
    };
    data.push(payload);
  }
  return data;
};

export { dummyArticleDataMaker };
