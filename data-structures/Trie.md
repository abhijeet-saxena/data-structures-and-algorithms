# Tries

## > A trie is a tree like data structure which stores strings, and helps you find the data associated with that string using the prefix of the string.

The word trie is an inflix of the word “retrieval”, because the trie can find a single word in a dictionary with only a prefix of the word.

Trie is an efficient data retrieval data structure. Using trie, search complexities can be brought to an optimal limit, i.e. length of the string. However, the penalty on tries is the storage requirements.

## Implementation

```js
class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
  }

  add(input, node = this.root) {
    if (input.length == 0) {
      node.end = true;
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node(input[0]));
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  isWord(word) {
    let node = this.root;

    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).end ? true : false;
  }

  print() {
    const words = [];

    const search = (node, string) => {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.end) words.push(string);
      } else {
        if (string.length > 0) words.push(string);
        return;
      }
    };

    search(this.root, "");

    return words.length > 0 ? words : [];
  }
}

myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");

console.log(myTrie.print()); // ['ball', 'bat','doll', 'dork','dorm', 'do','send', 'sense']

console.log(myTrie.isWord("doll")); // true
console.log(myTrie.isWord("dor")); // false
console.log(myTrie.isWord("dorf")); // false
```
