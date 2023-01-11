# process-utils-exec

A tiny utility function that executes a shell command and returns a promise with the output - `stdout` or `stderr`

## Install

```bash
# with yarn
yarn add @dim.iliev/process-utils-exec

# with npm

npm install @dim.iliev/process-utils-exec -S
```

## How to use

Simply import the `exec` function and run as promise

```ts
import { exec } from "@dim.iliev/process-utils-exec"

const output = await exec('echo "Hello World"')

console.log(output)
```

## Notes

The command does not trim the output, you need to do it yourself.

```ts
console.log(output.trim())
```
