class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return `${this.fullName} has ${65 - this.age} years left.`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade = 0, likes) {
        super(firstName, lastName, age, likes)
        try {
            this.grade = this.validateGrade(grade)
        } catch (e) {
            console.log(e.message)
        }
    }
    validateGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            return grade
        }
        throw Error(`Grade of ${grade} is invalid. Grade must be between 0 and 100.`)
    }
    getBio() {
        if (this.grade >= 70) {
            return `${this.firstName} is passing the class.`
        }
        return `${this.firstName} is failing the class.`
    }
    updatedGrade(num) {
        let updatedGrade = this.grade + num
        try {
            this.grade = this.validateGrade(updatedGrade)
        } catch (e) {
            console.log(e.message)
        }
    }
}

const student = new Employee("Brandon", "Dague", 30, "Developer")
student.fullName = "Jason Orozco"
console.log(student.getBio())