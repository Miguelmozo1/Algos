# def create_phone_number(n):
#     x = "".join(map(str, n))
#     number = "({}) {}-{}".format(x[:3], x[3:6], x[6:])
#     return number

    # far concise manner
def create_phone_number(n):
	return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

x = create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
print(x)