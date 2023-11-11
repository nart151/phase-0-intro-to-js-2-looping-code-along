function writeCards(names, event) {
  let thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouMessages;
}
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}