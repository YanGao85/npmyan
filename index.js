export default function piglatin(string) {
  const speechSynth = window.speechSynthesis;
  const pigString = new SpeechSynthesisUtterance("hi");
  pigString.text = string
    .split(" ")
    .map((word) =>
      word
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay")
    )
    .join(" ");
  speechSynth.speak(pigString);
}
