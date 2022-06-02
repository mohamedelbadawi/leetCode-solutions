class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& A) {
    int row = A.size();
    int col = A[0].size();

    vector < vector<int> > res;
    res.resize(col);
    for (int i = 0; i < res.size(); i++) {
        res[i].resize(row);
    }

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            res[j][i] = A[i][j];
        }
    }

    return res;
    }
};