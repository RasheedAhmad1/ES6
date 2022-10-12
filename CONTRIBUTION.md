# Contributing guidelines
## Before contributing
Welcome to [Javascript!](https://github.com/RasheedAhmad1/JavaScript-ES6) Before sending your pull requests, make sure that you read the whole guidelines. If you have any doubt on the contributing guide, please feel free to [state it clearly in an issue](https://github.com/RasheedAhmad1/JavaScript-ES6/issues/new) or ask the community on [Gitter](https://gitter.im/RasheedAhmad1/community).

# Contributing
## Contributor
I am very happy that you consider implementing algorithms and data structure for others! This repository is referenced and used by learners from all over the globe. Being one of our contributors, you agree and confirm that:

* You did your work - no plagiarism allowed
* Any plagiarized work will not be merged.
* Your work will be distributed under MIT License once your pull request is merged
* Your submitted work fulfils or mostly fulfils our styles and standards
New implementation is welcome! For example, new solutions for a problem, different representations for a graph data structure or algorithm designs with different complexity but identical implementation of an existing implementation is not allowed. Please check whether the solution is already implemented or not before submitting your pull request.

Improving comments and writing proper tests are also highly welcome.

Contribution
We appreciate any contribution, from fixing a grammar mistake in a comment to implementing complex algorithms. Please read this section if you are contributing your work.

Your contribution will be tested by our automated testing on Travis CI to save time and mental energy. After you have submitted your pull request, you should see the Travis tests start to run at the bottom of your submission page. If those tests fail, then click on the details button try to read through the Travis output to understand the failure. If you do not understand, please leave a comment on your submission page and a community member will try to help.

Please help us keep our issue list small by adding fixes: #{$ISSUE_NO} to the commit message of pull requests that resolve open issues. GitHub will use this tag to auto close the issue when the PR is merged.

What is an Algorithm?
An Algorithm is one or more functions (or classes) that:

take one or more inputs,
perform some internal calculations or data manipulations,
return one or more outputs,
have minimal side effects (Ex. print(), plot(), read(), write()).
Algorithms should be packaged in a way that would make it easy for readers to put them into larger programs.

Algorithms should:

have intuitive class and function names that make their purpose clear to readers
use Javascript naming conventions and intuitive variable names to ease comprehension
be flexible to take different input values
have Javascript type hints for their input parameters and return values
raise Javascript exceptions (ValueError, etc.) on erroneous input values
have docstrings with clear explanations and/or URLs to source materials
contain doctests that test both valid and erroneous input values
return all calculation results instead of printing or plotting them
Algorithms in this repo should not be how-to examples for existing Javascript packages. Instead, they should perform internal calculations or manipulations to convert input values into different output values. Those calculations or manipulations can use data types, classes, or functions of existing Javascript packages but each algorithm in this repo should add unique value.

If you used a Wikipedia article or some other source material to create your algorithm, please add the URL in a docstring or comment to help your reader.

Most importantly,

Be consistent in the use of these guidelines when submitting.
Join Gitter now!
Happy coding!
Writer @rasheedahmad1, Feb 2022.
