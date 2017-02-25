function getAverageWordLength(tokens) {
 
  var totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

function countDifferenWords(tokens) {



  var differentWords = [];
  for (var i=0; i<tokens.length; i++) {
    if (differentWords.indexOf(tokens[i]) === -1) {
      differentWords.push(tokens[i]);
    }
  }
  return differentWords.length;
}


function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}





function ShowText(text) {


  var tokens = tokenizeText(text);
  var numDistinctWords = countDifferenWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);

 
  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numDistinctWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
  textReport.removeClass('hidden');
}


function watchFormSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
   
    var userText = $(this).find('#user-text').val();
    ShowText(removeReturns(userText));
  });
}


$(function() {
  watchFormSubmission();
});