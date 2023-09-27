throw new Error();

// synchronous try/catch/finally block
function fail() {
    try {
        console.log("this works");
        throw new Error("oopsie!!!");
    } catch (error) {
        console.log("we have made an oopsie", error);
    } finally {
        console.log("still good");
    }
}

fail();
// this works // because it goes line by line
// we have made an oopsie Error: oopsie at fail
// still good

// asynchronous .catch()
Promise.resolve("asyncfail")
.then(response => {
    console.log(response);
    return response;
})
.catch(error => {
    console.log(err);
});

(async function() {
    try {
        await Promise.resolve("oopsie #1");
        await Promise.reject("oopsie #2");
    } catch (err) {
        console.log(err);
    }
    console.log("is this still good?");
})();

// Promise {} // Promise resolved
// ooopsie #2
// is this still good?