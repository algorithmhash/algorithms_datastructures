function QuickUnion(n){
    this.id = [];
    this.count ;

    this.constructor = function(n){
        count = n;
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
            
        }
    }
    this.count = function(){
        return this.count;
    }
    this.find = function(p) {
        return this.id[p];
    }

    this.connected= function(p, q) {
        return this.id(this.p) === this.id(this.q);
    }


    this.union = function(i, j){
        if (this.connected(p, q)) return;
        var pid = this.id[p];
        for (var i = 0; i < this.id.length; i++) {
            this.id[i] == p[id] ? this.[id] = this.id[q] : this.count--;
        }
       this.constructor(n);
    }
}

var x = new QuickUnion(n);
console.log(x.id);

var a = '2-1 3-7 6-9 3-4 6-7';

a = a.split(' ');

for (let b = 0; b < a.length; b++) {
    var p = a[b].split('-')[0] | 0;
    var q = a[j].split('-')[1] |0;
    x.union(p,q);
}

console.log(x.id)
console.log(x.id.toString().replace(/,/g,' '));