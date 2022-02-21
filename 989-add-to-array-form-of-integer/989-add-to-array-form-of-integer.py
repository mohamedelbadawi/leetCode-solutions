class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        str_num=[str(n) for n in num]
        string_nums="".join(str_num)
        integer_num=int(string_nums)
        integer_num+=k
        string_num=str(integer_num)
        mapp=map(int,string_num)
        return list(mapp)