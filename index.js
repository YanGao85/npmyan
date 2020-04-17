module.exports = function piglatin(string) {
  const speechSynth = window.speechSynthesis;
  const pigString = new SpeechSynthesisUtterance(`Default Text`);
  pigString.text = string
    .replace(/^([aeiouy])(._)/, "$1$2way")
    .replace(/^(_[_^aeiouy]+)(._)/, "$2$1ay");
  speechSynth.speak(pigString);
};
