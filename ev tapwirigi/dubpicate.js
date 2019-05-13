var arr = [17, 15, 14, 17, 21, 14];
var arr1 = [1,2,3,4,5,2,3,1];
var arr2 = [1,2,3,4,5,6];

// dublicat deyerleri elde etmek;

function dublicatarr(array) {
    var count = " ";
    for (var index = array.length - 1; index >= 0; index--) {

        for (var index1 = 1; index1 <= index; index1++) {

            if (array[index] == array[index1 - 1]) {
                count += " " + array[index].toString();
            }
            
        }

    }
    return count;
}

console.log(dublicatarr(arr));

console.log(dublicatarr(arr1))

console.log(dublicatarr(arr2));