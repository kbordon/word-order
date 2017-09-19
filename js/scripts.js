$(document).ready(function() {
  $("#formBlock").submit(function(event) {
    event.preventDefault();

    var block = $("input#blockInput").val();
    splitBlock = block.split(" ").sort();

    var uniqueWords = [];
    var uniqueWordsCount = [];

    splitBlock.forEach(function(word){
      if (uniqueWords.includes(word)) {
         uniqueWordsCount[uniqueWords.indexOf(word)] += 1;
      } else {
        uniqueWords.push(word);
        uniqueWordsCount.push(1);
      }
    });

    uniqueWords.forEach(function(uniqueWord) {
      $(".results").append("<li>" + uniqueWord + ": " + uniqueWordsCount[uniqueWords.indexOf(uniqueWord)] + "</li>")
    });
    // $(".results").text(splitBlock.join(" "));

  });
});


// RIng around the rosies, a pocket full of posies, ashes, ashes, we all fall down!
