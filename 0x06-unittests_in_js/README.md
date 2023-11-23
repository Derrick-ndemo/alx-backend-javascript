# Unittests in JS

![img](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/90f79a666e174e6c4ffc.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20231123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231123T063241Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e15b3fc5e399119b15c391fc9f62b6377d6328efd0f508ccd605380d5464dd63)

# Resources

* [Mocha Documentation](https://mochajs.org/)
* [Chai](https://www.chaijs.com/api/)
* [Sinonjs](https://sinonjs.org/releases/)
* [Express](https://expressjs.com/en/guide/routing.html)
* [Request](https://www.npmjs.com/package/request)
* [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs#spies-stubs-mocks)

## Tasks
> Basic test with Mocha and Node assertion library

**Install Mocha using npm:**

* Set up a scripts in your `package.json` to quickly run Mocha `npm test`
* You have to use `assert`

**Create a new file named `0-calcul.js`**

* Create a function named `calclulateNumber`. It should accept to arguments (number) `a` and `b`
* The function should round `a` and `b` and return the sum of it

**Test cases**

* Create a file `0-calcul.test.js` that contains test cases of this function
* You can assume `a` and `b` are always numbers
* Tests should be around the "rounded" part

**Tips:**

* For the sake of the example, this test suite is slightly extreme nd probably not needed
* However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

**Requirements:**

* You have to use `assert`
* You should be able to run the test suite using `npm test 0-calcul.test.js`
* Every test should pass without any warning

**Expected Output**

```> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 
```

**Run Test**

```bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$
```