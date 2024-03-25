console.clear()
import { faker } from 'https://esm.sh/@faker-js/faker';



// tweet data structure
// const tweet = {
//   user: {
//     displayName: "",
//     userName: "",
//     isVerified: true,
//     profilePicture: ""
//   },
//   post: {
//     text: "",
//     picture: ""
//   },
//   dateCreated: "",
//   views: 2323,
//   retweets: 43345,
//   saves: 345634,
//   comments: [
//     {
//       user: {
//         displayName: "",
//         userName: "",
//         isVerified: true,
//         profilePicture: ""
//       },
//       post: {
//         text: "",
//         picture: ""
//       },
//       dateCreated: "",
//       views: 2323,
//       retweets: 43345,
//       saves: 345634
//     }
//   ]
// };

function getRandomNum(max=1250) {
  return Math.floor(Math.random() * max);
}

function getRandomBool() {
  const result = Math.round(Math.random() * 1)
  if (result === 0) {
    return false
  }
  return true
}

function createTweet() {
  return {
    user: {
    displayName: faker.internet.displayName(),
    userName: faker.internet.userName(),
    isVerified: getRandomBool(),
    profilePicture: faker.image.url()
 
  },
     post: {
        text: faker.word.words({
          count: {min: 1, max: 80}
        }),
        picture: faker.image.url()
      },
dateCreated: new Date(),
  views: getRandomNum(),
  retweets: getRandomNum(),
  saves: getRandomNum(),
  comments: createComments()

  }
}

function createComments(max =12) {
  const comments = []
  for(let i = 0; i < max; i++) {
   let comment = {
      user: {
        displayName: faker.internet.displayName(),
        userName: faker.internet.userName(),
        isVerified: true,
        profilePicture: faker.image.url(),
      },
      post: {
        text: faker.word.words({
          count: {min: 1, max: 80}
        }),
        picture: faker.image.url()
      },
      dateCreated: new Date(),
      views: getRandomNum(),
      retweets: getRandomNum(),
      saves: getRandomNum()
    }
    comments.push(comment)
  }
 return comments
}

 
  

  
 const myTweet1 = createTweet()
 const myTweet2 = createTweet()
 
 console.log(myTweet1, myTweet2)