def maskify(cc)
    if cc.length < 4
        return cc
        exit
    end
    string = cc.to_s[0..-5]
    ending = cc.to_s[-4,4]
    for i in 0..string.length - 1  do
        string[i] = "#"
    end
    return string + ending
end



# best way to do this
def maskify(cc)
    cc.gsub(/.(?=....)/, '#')
end





x = maskify('1')
print(x)