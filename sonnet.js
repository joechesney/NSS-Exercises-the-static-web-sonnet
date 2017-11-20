var sonnet = document.getElementById("sonnet").innerHTML;
console.log(sonnet);
//find 'orphan' in sonnet
function findOrphan() {
    var orphan = sonnet.indexOf("orphan");
    var orphanL = "The word 'orphan' starts at character " + orphan + ".";
    console.log(orphanL);
    document.getElementById("orphanLocation").innerHTML = orphanL;

}
findOrphan();
// sonnet length
var sonnetL = "This sonnet is " + sonnet.length + " characters long.";
console.log(sonnetL);
document.getElementById("sonnetLength").innerHTML = sonnetL;
// replace 'winter' with 'yuletide'
var newSonnet = sonnet.replace("winter", "yuletide");
// replace 'the' with 'a large'
var newSonnet2 = newSonnet.replace(/the/g, "a large");

sonnet = newSonnet2;
console.log(newSonnet2);