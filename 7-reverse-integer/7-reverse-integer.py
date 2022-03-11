class Solution:
    def reverse(self, x: int) -> int:
        x_str=str(x)
        if x_str[0]=='-':
            x_str=x_str[1::]
            x_str=x_str[::-1]
            if int(x_str)*-1<-2147483647:
                return 0
            else:
                return int(x_str)*-1
        else:
            x_str=x_str[::-1]
            if int(x_str)> 2147483647:
                return 0
            else:
                return int(x_str)
            
            
            
            
            
            