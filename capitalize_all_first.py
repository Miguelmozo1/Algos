def solution(string):
    x = ' '.join([word[0].upper() + word[1:].lower() for word in string.split()])
    return x

# or

def solution(string):
    return ' '.join(word.capitalize() for word in string.split())


u = solution("How can mirrors be real if our eyes aren't real")
print(u)