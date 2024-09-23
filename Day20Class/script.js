


class Students{
    constructor(name,grid,marks,institue){
        this.name = name,
        this.grid = grid,
        this.marks = marks,
        this.institue = institue
    }
    getValue(){
        return this.marks * this.marks
    }
}



let student1 = new Students("deepak","6251","45","Red&White")
student1.getValue()
let student2 = new Students("Deepak","542","35","Red&White")
student2.getValue()
console.log(student1,student2)