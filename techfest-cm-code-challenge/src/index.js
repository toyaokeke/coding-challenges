import "./styles.css";
import { basicArray, arrayWithJunk, theBigOne } from "./data";
import { handleArrayResponse } from "./helpers";

function sortAndFilterArray(array, removeDivisibleByFive = false) {
  removeNegatives(array);

  if (removeDivisibleByFive) {
    // implement this logic in challenge #3 :)
    filter(array);
    bubbleSort(array);
    flatten(array);
    return array;
  }

  /**
   * Here is where the majority of your work should go for challenges
   * #1 and #2
   */
  bubbleSort(array);
  flatten(array);
  return array;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = arr.length - 1; j > i; j--) {
      if (arr[j][1] < arr[j - 1][1]) {
        // Compare items
        var temp = arr[j - 1]; // Create a temporary integer to store value 1
        arr[j - 1] = arr[j]; // Swap value 1 to value 2
        arr[j] = temp; // Swap value 2 to value 1
      }
    }
  }
}

function filter(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] % 5 == 0) {
      arr.splice(i, 1);
    }
  }
}

function removeNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] < 0) {
      arr.splice(i, 1);
    }
  }
}

function flatten(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].splice(1, 1);
  }
}

/**
 * THE PROBLEM:
 * We've been given a weird set of coded messages. The messages
 * are each ARRAYs containing a range of elements that are also
 * ARRAYS. Each element array has two items:
 * [<letter>, <sort order>]
 */

/**
 * CHALLENGES!
 */

/**
 * Challenge #1: Modify the sortAndFilterArray method to perform
 * two tasks:
 * 1) Sort the array based on each individual element's sort order
 * property
 * 2) Flatten the array so it only returns an array of letters, i.e,
 * ['h', 'e', 'l', 'l', 'o']
 *
 * WARNING: Do not worry about running any sort of Array to string
 * aggregation. That is performed in the sandbox code below.
 */

// Don't modify this line -  you should see DECODED #1 change
// into a legible string
const step1 = sortAndFilterArray(basicArray);

/**
 * Challenge #2: Modify the sortAndFilterArray method to remove any
 * negative sort order's in the elements.
 */

// Don't modify this line -  you should see DECODED #2 change
// into a legible string
const step2 = sortAndFilterArray(arrayWithJunk);

/**
 * Challenge #3: Implement the missing condition for
 * sortFilterArray. If we pass TRUE to 'removeDivisibleByFive',
 * it should filter out all sort orders that are divisible
 * by FIVE.
 */

// Don't modify this line -  you should see DECODED #3 change
// into a legible string
const step3 = sortAndFilterArray(theBigOne, true);

/**
 * DO NOT MODIFY BELOW THIS LINE OR YOU'RE
 * PROBABLY DOING SOMETHING WRONG!
 */

document.getElementById("app").innerHTML = `
<h1>Array Sprints - CM Code Challenge</h1>
<h4>Read the code comments for instructions!</h4>
<div>
<p><strong>Decoded #1:</strong> ${handleArrayResponse(step1)}</p>
<p><strong>Decoded #2:</strong> ${handleArrayResponse(step2)}</p>
<p><strong>Decoded #3:</strong> ${handleArrayResponse(step3)}</p>
</div>
`;
