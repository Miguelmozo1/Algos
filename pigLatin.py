def pig_it(text):
    words = text.split();
    new = []
    for word in words:
        if len(word[0]):
            x = word[0] + "ay"
        if not word.isalpha():
            x = word
        else:
            x = word[:1] + "ay"
        y = word[1:]
        new.append(y+x)
    return " ".join(new)

print(pig_it("O tempora o mores !"));



# Efficient way of doing it

def pig_it(text):
    lst = text.split()
    return ' '.join( [word[1:] + word[:1] + 'ay' if word.isalpha() else word for word in lst])