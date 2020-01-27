function QuickUnion(n){
    this.id = [];

    for (let i = 0; i < n; i++) {
        this.id[i] = i;
        
    }
    this.root = function(i){
       while (i != this.id[i]) i = this.id[i];
           return i;
    }

    this.connected= function(p, q) {
        return this.root(this.p) === this.root(this.q);
    }


    this.union = function(i, j){
        i = this.root(this.p);
        j = this.root(this.q);
        this.id[i] = this.j;
    }
}

x = new QuickUnion(4);
console.log(x.root(1,2,3));
console.log(x.connected(x.root()));
console.log(x.union(3,1,2));