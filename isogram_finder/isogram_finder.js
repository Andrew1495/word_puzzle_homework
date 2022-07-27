const IsogramFinder = function (word) {
this.word = word.toLowerCase().split("")
}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.length === [...new Set(this.word)].length;
}

module.exports = IsogramFinder;
