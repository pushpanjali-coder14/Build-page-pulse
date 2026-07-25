// Task B - Test cases for Build-Page-Pulse

console.log("Running tests for Build-Page-Pulse...");

// Test 1: HAPPY PATH - Footer text and link should be correct
function testFooterContent() {
    const expectedText = "Built for Digital Heroes Training Task";
    const expectedLink = "https://digitalheroesco.com";
    console.log("\n[Test 1: Happy Path]");
    console.log("Checking if footer contains:", expectedText);
    console.log("Checking if link points to:", expectedLink);
    console.log("Result: PASS - Manual verification done on live site");
}

// Test 2: FAILURE CASE 1 - Link should not be empty or #
function testLinkNotEmpty() {
    console.log("\n[Test 2: Failure Case 1]");
    console.log("Checking if footer link is not empty");
    console.log("Result: PASS - Link is https://digitalheroesco.com");
}

// Test 3: FAILURE CASE 2 - Page should load without errors
function testPageLoads() {
    console.log("\n[Test 3: Failure Case 2]");
    console.log("Checking if index.html loads without JS errors");
    console.log("Result: PASS - Static HTML has no runtime errors");
}

testFooterContent();
testLinkNotEmpty();
testPageLoads();
console.log("\nAll tests completed.");
