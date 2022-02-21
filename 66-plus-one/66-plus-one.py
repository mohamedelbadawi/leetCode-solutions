class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        strings=[str(digit) for digit in digits]
        num_string="".join(strings)
        integer=int(num_string)
        integer+=1
        str_int=str(integer)
        map_digits=map(int,str_int)
        return list(map_digits)
        
        