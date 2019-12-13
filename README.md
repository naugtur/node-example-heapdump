# Heap Snapshot exercise

## Prepare

Before you try the exercises, please run 
```
npm install
```

*Note, some of the dependencies there are pinned to old versions so that they produce the memory leak you are here to find.*

## Getting a heap snapshot

- Run `npm start`
- Open [http://localhost:8080](http://localhost:8080)
- Now try implementing getting a heap snapshot through a http request and prove a leak exists.
  - Can be done without the `heapdump` package, with this: https://nodejs.org/dist/latest-v12.x/docs/api/v8.html#v8_v8_writeheapsnapshot_filename

## Finding a real issue

Now let's look at a real case of a memory leak. Still a pretty naive one, but one that at least looks realistically.

- Run `npm run real`
- Open [http://localhost:8080](http://localhost:8080)
- Get two heap snapshots
- Find the leak, trace it to a properly named object that you can find, locate the code responsible for leaking (or at least the file).


## Spoilers

If you're ready to give up, try again and then look at spoilers.txt