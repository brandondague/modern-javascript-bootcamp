function gradeCalc (score, total, extraCredit = 0) {
    if (typeof score !== "number" || typeof total !== "number") {
        throw Error("Arguments must be a number")
    } else if (score > total) {
        throw Error("Score exceeds total possible score.")
    } else if (score < 0) {
        throw Error("ERROR: Score must be greater than zero.")
    }

    let grade = parseInt(((score + extraCredit) / total) * 100)
    return parseGrade(grade)
}

function parseGrade (grade) {
    let letterGrade

    if (grade >= 90) {
        letterGrade = "A"
    } else if (grade >= 80) {
        letterGrade = "B"
    } else if (grade >= 70) {
        letterGrade = "C"
    } else if (grade >= 60) {
        letterGrade = "D"
    } else {
        letterGrade = "F"
    }

    if (letterGrade === "A" || letterGrade === "F") {
        return `You got an ${letterGrade} (${grade}%)!`
    }

    return `You got a ${letterGrade} (${grade}%)!`
}

try {
    let test = gradeCalc(30, 35, 2)
    console.log(test)
} catch (e) {
    console.log(e)
}