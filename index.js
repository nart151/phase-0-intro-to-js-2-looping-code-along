const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  // Example usage:
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  
  function countDown(count) {
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  // Example usage:
  countDown(10);
  