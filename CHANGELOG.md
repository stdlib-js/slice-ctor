# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-01-29)

<section class="commits">

### Commits

<details>

-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`7473eb8`](https://github.com/stdlib-js/stdlib/commit/7473eb81a500041583a7157132a936f0bfdcdca3) - **docs:** revert moving horizontal rule _(by Athan Reines)_
-   [`b71eac5`](https://github.com/stdlib-js/stdlib/commit/b71eac567db873f9b01edb66b01de3ed2f458f7f) - **docs:** move horizontal rules _(by Athan Reines)_
-   [`f6eb46d`](https://github.com/stdlib-js/stdlib/commit/f6eb46da95475ef3430f71490e62e54278eefe22) - **docs:** fix method name _(by Athan Reines)_
-   [`d1ea078`](https://github.com/stdlib-js/stdlib/commit/d1ea078e4075bd1c77fb27f7977b17a436fe940c) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`b496b72`](https://github.com/stdlib-js/stdlib/commit/b496b72595355b5a794c940bd7f81ea5223b91bd) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`cab141b`](https://github.com/stdlib-js/stdlib/commit/cab141b17faa237fc68e484979cf1752400e3bf4) - **docs:** update links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`a2ba8cb`](https://github.com/stdlib-js/stdlib/commit/a2ba8cb436dacd253ea0e8eef0aeaf0f5e249ccc) - refactor to support eliding arguments
-   [`02c09a3`](https://github.com/stdlib-js/stdlib/commit/02c09a39dabf165338f8589d96dd5466ab188a67) - add `slice/ctor`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`1a9294b`](https://github.com/stdlib-js/stdlib/commit/1a9294bc0046896bb76fed5d3fdf3bb7aa086fee) - prevent index increments to zero
-   [`671cb3d`](https://github.com/stdlib-js/stdlib/commit/671cb3d00fe6cd5bb13a432ddd0165916b48bde6) - ensure default values are `null` when provided `undefined`

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`a2ba8cb`](https://github.com/stdlib-js/stdlib/commit/a2ba8cb436dacd253ea0e8eef0aeaf0f5e249ccc): support argument omission

    -   Existing code should continue to work as is; however, error handling
        has changed. One can now create a slice without providing arguments.
        To adopt the new syntax, one no longer has to explicitly provide
        `null` for \"empty\" slice parameters.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`aa6865c`](https://github.com/stdlib-js/stdlib/commit/aa6865c96695041da1c6160b7590e791503a2f27) - **docs:** fix return values _(by Athan Reines)_
-   [`1a9294b`](https://github.com/stdlib-js/stdlib/commit/1a9294bc0046896bb76fed5d3fdf3bb7aa086fee) - **fix:** prevent index increments to zero _(by Athan Reines)_
-   [`9da72fd`](https://github.com/stdlib-js/stdlib/commit/9da72fddb4544114c770f73cbab76e8fe7778edf) - **test:** add property test _(by Athan Reines)_
-   [`482990c`](https://github.com/stdlib-js/stdlib/commit/482990cbadc5068c6bfeb2db0e17b92e643ea0d2) - **docs:** update copy _(by Athan Reines)_
-   [`d627bb1`](https://github.com/stdlib-js/stdlib/commit/d627bb1eb1a75e344575ca45b6d91c8683430add) - **docs:** fix heading _(by Athan Reines)_
-   [`cf13ba9`](https://github.com/stdlib-js/stdlib/commit/cf13ba94ec1c740004349ae64056983b7ae8638e) - **docs:** fix parameter types and fix class name _(by Athan Reines)_
-   [`74d7015`](https://github.com/stdlib-js/stdlib/commit/74d7015dcf40f256bb5a1bb33fa73ee9d5309789) - **docs:** fix syntax errors in examples _(by Athan Reines)_
-   [`4a6d756`](https://github.com/stdlib-js/stdlib/commit/4a6d756b2b85884a110e8aff512cd336c7fc4ee4) - **style:** disable lint rules _(by Athan Reines)_
-   [`671cb3d`](https://github.com/stdlib-js/stdlib/commit/671cb3d00fe6cd5bb13a432ddd0165916b48bde6) - **fix:** ensure default values are `null` when provided `undefined` _(by Athan Reines)_
-   [`a2ba8cb`](https://github.com/stdlib-js/stdlib/commit/a2ba8cb436dacd253ea0e8eef0aeaf0f5e249ccc) - **feat:** refactor to support eliding arguments _(by Athan Reines)_
-   [`1f41686`](https://github.com/stdlib-js/stdlib/commit/1f416861ba3a556882755641fb7acd15eb9cdf50) - **docs:** fix copyright year _(by Athan Reines)_
-   [`02c09a3`](https://github.com/stdlib-js/stdlib/commit/02c09a39dabf165338f8589d96dd5466ab188a67) - **feat:** add `slice/ctor` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

