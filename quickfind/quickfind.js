function quickfind(n){

    this.id = [];

    for (var i = 0; i < n; i++) {
        this.id[i] = i;
        
    }


    this.connected = function(p, q){
        return this.id[p] === this.id[q];
    }


    this.union = function(p, q){
        pid = this.id[p];
        qid = this.id[q];

        for (var i = 0; i < this.id.length; i++) {
            if(this.id[i] === pid) this.id[i] = qid;
        }
    }

}
var x = new quickfind(4);
x.union(0,1);
x.union(0,2);
x.union(0,3);
console.log(x.id);
console.log(x.connected(0, 1));