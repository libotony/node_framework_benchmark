# node_framework_benchmark
node webserver framework benchmark

## prerequirements
  wrk is needed to run the test;
### OSX
  `brew install wrk`

## how to
  `make all`:will install dependencies and test

  `make test`:only test


## result
  The test is runned on my MacBook Pro(Early 2015),the hardware are as fellows:
  + 2.7 GHz Intel Core i5
  + 8 GB 1867 MHz DDR3

```
  benchmark express

  Requests/sec: 5515.91

  benchmark koa1

  Requests/sec: 2443.41

  benchmark koa2

  Requests/sec: 2733.19
```
