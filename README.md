# Alpha Versioning


Development versioning raises the following issues:

```
+ what is the first version?
+ what consists in a version modification,
    and how to classify the magnitude of the modification?
+ what is the end version?
```

The first two questions seem to be answered well enough by [`semver`](https://github.com/semver/semver), that's why, in some strong sense, `alpha versioning` is a backwards-compatible in syntax only specialization of `semver`. The `semver` answers:

+ what is the first version? `0.0.0`
+ what consists in a version modification? `major.minor.patch`

To the third question, 'what is the end version' (never asked by `semver`), `αver` answers: `1.0.0`. What `semver` considers as the first 'viable', 'public-acceptable' version, `αver` considers the final, last, ultimate version.


About `αver`: the `α` is a lowercase alpha, however, it can be easily be misread as an `o` giving `over`, which implies that the development is over.


Why should we ask 'what is the end version'? All things must come to an end: life, the universe, the development.


What is the first version for `αver`? `0.0.0-0`

What consists in a version modification?

`αver` implies for the user to always use the last version, every version update is considered as breaking the public interface, it might not, but it should be considered. The difference between version `0.0.0-123` and `0.0.0-124` could be as big as the difference between a dog and the Dog constellation.

The segments

```
 0.0.0-0
 | | | |
 | | | | - reserved for development update
 | | |
 | | | - reserved for minor update
 | |
 | | - reserved for major update
 |
 | - reserved for the last flip from 0 to 1, signifying the end of development
```


Why keep the first `0` if it is there in order to never be reached? As a reminder that the development has not yet even started, that a project is always towards alpha.
