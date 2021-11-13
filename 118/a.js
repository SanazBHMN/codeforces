var s = readline().toLowerCase().split("");
var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = [];

for (var i = 0; i < s.length; i++) {
  if (!vowels.includes(s[i])) {
    consonants.push(s[i]);
  }
}

print("." + consonants.join("."));
