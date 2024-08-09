def count_bits(n):
    x = bin(n)
    bits = 0
    for i in x:
        if i == "1":
            bits += 1
    return bits


def count_bits(n):
    return bin(n).count("1")

u = count_bits(10)
print(u)