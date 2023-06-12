const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	let ct=0;
  for(let x of library){
	  if(x.readingStatus=== true){
		  ct++;
	  }
  }
	return ct;
};

// Do not change the code below

alert(numberOfBooksRead());
