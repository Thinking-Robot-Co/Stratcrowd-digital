document.addEventListener('DOMContentLoaded', function() {
  // Typewriter effect for rotating suffix
  const suffixes = [
    "creative solutions",
    "innovative strategies",
    "robust campaigns",
    "cutting-edge ideas",
    "remarkable growth"
  ];
  
  let currentSuffixIndex = 0;
  let currentCharIndex = 0;
  let currentText = "";
  const rotatingSuffixElement = document.getElementById("rotatingSuffix");

  function typeSuffix() {
    if (currentCharIndex < suffixes[currentSuffixIndex].length) {
      currentText += suffixes[currentSuffixIndex].charAt(currentCharIndex);
      rotatingSuffixElement.textContent = currentText;
      currentCharIndex++;
      setTimeout(typeSuffix, 100); // adjust typing speed as desired
    } else {
      setTimeout(deleteSuffix, 2000); // pause after finishing typing
    }
  }

  function deleteSuffix() {
    if (currentCharIndex > 0) {
      currentText = currentText.substring(0, currentText.length - 1);
      rotatingSuffixElement.textContent = currentText;
      currentCharIndex--;
      setTimeout(deleteSuffix, 50); // adjust deleting speed as desired
    } else {
      // Move to the next suffix
      currentSuffixIndex = (currentSuffixIndex + 1) % suffixes.length;
      setTimeout(typeSuffix, 500); // short pause before typing next suffix
    }
  }

  // Start the typewriter effect
  typeSuffix();

  // Navbar toggle function
  window.myFunction = function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  // Feedback slider function
  let currentFeedbackIndex = 0;
  window.showFeedback = function(direction) {
    const feedbackElements = document.querySelectorAll('.client-feedback');

    // Hide the current feedback
    feedbackElements[currentFeedbackIndex].style.display = 'none';

    // Calculate the new index based on the direction
    if (direction === 'next') {
      currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackElements.length;
    } else if (direction === 'back') {
      currentFeedbackIndex = (currentFeedbackIndex - 1 + feedbackElements.length) % feedbackElements.length;
    }

    // Show the new feedback
    feedbackElements[currentFeedbackIndex].style.display = 'block';
  };
});
