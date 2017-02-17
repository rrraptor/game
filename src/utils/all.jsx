import { armored_1, armored_2, armored_3 } from 'assets/avatars';

const lore = {
  classTypes: [
    { 
      name: 'Fighter',
      hitDie: 10
    },
    {
      name: 'Rogue',
      hitDie: 6
    },
    {
      name: 'Mage',
      hitDie: 4
    }  
  ],
  races: [
    {
      name: 'Human',
      minAge: 18,
      maxAge: 80,
      img: {
        male:'http://cdn.obsidianportal.com/assets/100264/brylinn2.jpg',
        female: 'https://bradtough.files.wordpress.com/2015/02/d2.jpg'
      }
    },
      {
      name: 'Dwarf',
      minAge: 40,
      maxAge: 250,
      img: {
        male: armored_1, // 'https://s-media-cache-ak0.pinimg.com/originals/1f/60/71/1f6071ec2d71c363e8b304d6d83d5527.jpg',
        female: 'https://s-media-cache-ak0.pinimg.com/736x/d7/65/00/d765005db08dd0aa4439a969b34f57e3.jpg'
        }
      },
     
      {
      name: 'Elf',
      minAge: 100,
      maxAge: 2345,
      img:{
        male: 'http://shadesofgrey.wdfiles.com/local--files/the-adventurers/Class_ElfRanger.png',
        female: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuLt2ZpvuVQm_NARM3Qh57Da0Vt5AfYrohlHRR4XIlM5nYtKSN'
      }
    },
      {
      name: 'Halfling',
      minAge: 18,
      maxAge: 70,
      img: {
        male: 'https://c1.staticflickr.com/4/3119/3179345649_8aba2a44bc.jpg',
        female: 'http://img-cache.cdn.gaiaonline.com/3991743f936ad468ba672a1e5cdbc671/http://i104.photobucket.com/albums/m185/KitaNeeko/86143066-953b-42f6-b8d5-fe2c893f9509_zpscd8dbbb4.jpg'}
    }
  ]
};

const getInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const rollDice = (number, faces) => {
  let sum = 0;
  for(let i = 0; number > i; i++) {
    sum += getInt(0, faces) +1;
  }

  return  sum;
};

function httpGet(url){
  var xhrObject = new XMLHttpRequest();
 

  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState === 4) {
      if (xhrObject.status === 200 || xhrObject.status === 304) {

        // Success! Do stuff with data.
        return xhrObject.responseText;

      }
    }
  };

  xhrObject.open(
    "GET", 
    url, 
    true
  );
  xhrObject.send();
};

export { httpGet, rollDice, getInt, lore };

