# QuickFind algorithm

This algorithm is quite okay using union, initialize operations involved the for-loop that fires through the entire array. It is quick but quickfind has to touch in a constant proportional to the argument variable n times after touching the array entry. It is literally just to a constant number of times check array entries. 

## Con:

There is a problem when approaching an issue like this. The union operation is too expensive.  If you just have N commands on N objects which is not unreasonable, then they're either connected or not, then that will take a quadratic time in squared time.  Quadratic time is just too slow and the reason being is they just do not scale.