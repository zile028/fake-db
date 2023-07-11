/ select the target node
var target = document.getElementById('mce-success-response');
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (target.innerHTML === "Thank you for subscribing!") {
      target.innerHTML = "Check your email!";
    }
  });
});
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
// pass in the target node, as well
