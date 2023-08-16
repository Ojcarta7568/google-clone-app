const age = 18

function ableToVote(age){
    if (age > 20) {
        console.log("eligible to vote")
    } else {
        console.log("not up to 18, not eligible to vote")
    }
}
ableToVote(10)