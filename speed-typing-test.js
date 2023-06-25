const readline = require("readline");

function runSpeedTypingTest() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let totalWordsTyped = 0;
  let startTime = null;

  function startTest() {
    console.log("Type the following sentence:");
    console.log("The quick brown fox jumps over the lazy dog.");
    console.log("Press Enter when you finish.\n");
    startTime = Date.now();
  }

  rl.on("line", (input) => {
    if (startTime === null) {
      startTest();
    } else {
      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

      const words = input.trim().split(" ");
      const wordsTyped = words.length;
      totalWordsTyped += wordsTyped;

      const typingSpeed = totalWordsTyped / elapsedTime;

      console.log(`\nWords typed: ${wordsTyped}`);
      console.log(`Total words typed: ${totalWordsTyped}`);
      console.log(`Typing speed: ${typingSpeed.toFixed(2)} words per second\n`);

      // Reset the test
      startTime = null;
      totalWordsTyped = 0;
    }
  });

  rl.on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });

  startTest();
}

module.exports = runSpeedTypingTest;
