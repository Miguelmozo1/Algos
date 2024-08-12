def xo(s):
    word = s.lower()
    x = word.count("x")
    o = word.count("o")
    solution = ""
    if x == 0 and o == 0:
        solution = True
    if x == o:
        solution = True
    if x != o:
        solution = False
    
    return solution


#  or

def solution(s):
    s = s.lower()
    return s.count('x') == s.count('o')


x = xo("oOxXx")
print(x)