# def solution(number):
#     sum = 0;
#     i = 0;
#     for i in range(number):
#         if i %3 == 0 and i %5 ==0:
#             sum += i
#             i += 1
#             continue
#         if i %5 == 0:
#             sum += i
#             i += 1
#             continue
#         if i %3 == 0:
#             sum += i
#             i += 1
#             continue
#     return sum




# concise answer
def solution(number):
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)



x = solution(20)
print(x)