# Alpha Versioning



## Prolegomenon

There are only 3 types of civilizations:

```
+ those who reach their nearest star
+ those who reach their nearest galaxy
+ those who perish
```

There is a single process: the development.

If we ought to start the process then the first step is towards `Alpha Centauri`.



## Clearing

Development versioning raises the following issues:

```
A. What is the first version?
B. What is considered a version modification,
    and how to classify the magnitude of the modification?
C. What is the end version?
```



## Prior Art

The first two questions (`A` and `B`) seem to be answered well enough by [`semver`](https://github.com/semver/semver). That's why, in a strong sense, `alpha versioning` is a backwards-compatible in-syntax-only specialization of `semver`. The `semver` answers:

```
A. What is the first version? 0.0.0
B. What is considered a version modification? major.minor.patch
```

The third question, `C`, 'what is the end version', is never asked by `semver`.



## Alpha

Alpha Versioning can be short-named as `αver`. The `α` is a lowercase alpha, however, it can be easily be misread as an `o` giving `over`, which can conote that the development is over.



## Answers

A. What is the first version for an `αver` project?

`0.0.0-0`


B. What is considered a version modification in an `αver` project?

`αver` implies for the user to always use the last version, every version update is considered as breaking the public interface, it might not, but it should be considered. The difference between version `0.0.0-123` and `0.0.0-124` could be as big "as the difference between a dog and the Dog constellation".

The `alpha versioning` segments:

```
0.0.0-0
| | | |
| | | | - the developmenter digit, reserved for development update
| | |
| | | - the revisioner digit, reserved for yearly revision
| |
| | - the launcher digit, reserved for century launch
|
| - the ender digit, reserved for the last flip from 0 to 1, signifying the end of development
```

The development starts at `0.0.0-0`.

Every update will increase the developmenter digit by `1`. The first update is from `0.0.0-0` to `0.0.0-1`.

Once a year, or every few years, after a general revision, the revisioner digit is increased by `1`.

The package can be considered as launched in it's first century, but every other century or so, a relaunch may be required.


C. What is the end version of an `αver` project?

`1.0.0`

What `semver` considers as the first 'viable', 'public-acceptable' version, `αver` considers the final, last, ultimate version.



## Whys

Why keep the first `0` if it is there in order to feel as if it will never be reached? As a reminder that the development has not yet even started, that a project is always towards alpha.

Why should we ask 'what is the end version'? All things must come to an end: a life, the universe, the development.

Why to think in centuries and millenia? See [prolegomenon](#prolegomenon), those distances require much more than millenia. Also, to think of a project in terms of days and weeks is to not have reflected enough on the development process: we have not started developing yet.
