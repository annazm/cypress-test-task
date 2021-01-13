# QA test task
Hi there! 👋

Wanna join [Ackee](https://ackee.cz)? Or you just don't know what to do on a lazy sunday afternoon? Here is a task for you!

Your goal is to implement and improve automtic tests on our troubled project. Don't worry, everything is already set up for you and you will learn everything in a minute. 

## ✅ E2E

End-to-End tests are powered by framework [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell). You will run all the tests locally. 

You need to have [Node.jS](https://nodejs.org/en/) environment and package manager [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) ready...

1. **Install tools** - inside the repository run 

    ```sh
    yarn install
    ```

    to install all dependencies including Cypress.

2. **Start cypress** - To start cypress tests locally run
    ```sh
    yarn test
    # or equal command
    yarn start
    ```

This will run the tests on our ready web located at https://stage.flashsport.com/.


### Writing new tests

1. The first task is to improve a test that has been written by one lousy QA engineer. You can find the test file in `cypress/e2e/`.

2. The second task is to write an automatic test for login. First try out possible responses and then try to cover them with tests. You can use the prepared commands in `cypress/support/commands`, or you can improve them. You will also find a test user in [environment variables](https://docs.cypress.io/guides/guides/environment-variables.html#Option-1-configuration-file). If you see any other improvment, feel free to rewrite whatever is needed. 

### Help

* Look at [how to write](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file) first Cypress test
* Learn how to [write and organize tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Support-file)
* Read and try to follow [best practices](https://docs.cypress.io/guides/references/best-practices.html) for writing tests
* There are also video courses about Cypress at [TestingJavascript.com](https://testingjavascript.com/) and [Egghead.io](egghead.io), ask if you're interested
* If you don't know and have questions about anything - ask. 

## Result

If you clone this repo from our git

1. create a branch with your name and
2. push your result to the newly created branch.

Otherwise you can create your own repo on Github or just pack us an archive and send it via e-mail. 

Be a responsible developer; don't forget to work with git properly and commit regularly. If you are not sure how do we work with git, take a look at [Ackee git guide](https://github.com/AckeeCZ/styleguide/blob/master/git/README.md). 

Good luck 🍀