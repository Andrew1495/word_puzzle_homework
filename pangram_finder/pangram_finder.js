const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().replace(/[^a-zA]/g, '').split("");
}
PangramFinder.prototype.isPangram = function () {
  const sortedPhrase =  [...new Set(this.phrase.sort())];
  const alpSort = this.alphabet.sort()

  return sortedPhrase.length === alpSort.length &&
    sortedPhrase.every((letter, ind) => letter = alpSort[ind]);
    }


module.exports = PangramFinder;
