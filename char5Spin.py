# takes in a sentence, and any word greater or equal than 5 characters, is reversed

def spin_words(sentence):
    spin = []
    words = sentence.split(" ")
    for word in words:
        val = word
        if len(word) >= 5:
            val =  word[::-1]
        spin.append(val)
        print(word)
        newS = " ".join(str(x) for x in spin)
    return newS

print(spin_words("This makes me wonder how it'll work"))



# compact version
def spin_words(sentence):
    # Your code goes here
    return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])