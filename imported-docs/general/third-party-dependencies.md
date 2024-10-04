# Third Party Dependencies

> This page was last reviewed on September 19th, 2024. It needs to be reviewed again on June 19th, 2025.

Third party dependencies can be introduced via:

* using a dependency management tool (for example, [Composer for PHP](https://getcomposer.org/), [NPM for JavaScript](https://www.npmjs.com/) and [Poetry for Python](https://python-poetry.org/))
* copying the code from a library/package
* forked repositories or internal repositories for third party libraries/packages

It is common to use third-party libraries/packages, however, choosing the right library/package can be a difficult task. To help, we have established guidelines for choosing a package.

## Guidelines for choosing a third party package

When selecting a package that has not been previously used in a Gemeente Amsterdam project, we ask the following questions:

* Documentation
  * Is there documentation?
  * Are there tutorials or guides?
  * How steep is the learning curve?
* Licensing considerations
  * Does the license fit with your project's requirements?
  * Are there any usage restrictions?
    * *Generally packages with MIT, Apache 2.0, BSD and EUPL are safe to use for commercial purpose. If you choose a package with a license that is not one of those, please read the license carefully. [This page](https://choosealicense.com/licenses/) is helpful in providing a simple overview.*
* Performance
  * Does it have an acceptable bundle size?
    * This is more relevant for frontend projects.
  * Does it integrate well with other libraries?
* Security
  * Does the package have any open security vulnerabilities?
  * How quickly are security issues patched?
* Stability
  * How old is the project?
  * Is there a roadmap?
* Support
  * Who is maintaining it?
    * A single person / An open-source community / An organisation
  * Is the project sponsored?
  * Is it actively maintained?
    * How many open and closed issues are there in the last several months?
  * How many downloads are there per month/year?
    * [npm trends](https://npmtrends.com/) provides useful metrics for NPM package download numbers and similar packages.
    * [Packagist](https://packagist.org/) provides useful metrics for PHP package download numbers
    * [PePy](https://www.pepy.tech/) provides useful metrics for Python package download numbers

If the answer to the majority of these questions is negative then the third party code should not be used. If you have mixed answers to these questions and are unsure, post a question in your relevant gilde channel to discuss and hear other possible solutions.
