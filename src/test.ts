import test from "ava"
import { exec } from "."

test("calling valid commands resolves a promise", async (t) => {
  const callPromise = exec('echo "hello world"')
  t.is(await callPromise, "hello world\n")
})

test("calling invalid commands rejects a promise", async (t) => {
  const cmd = "asdasdasd"
  try {
    await exec(cmd)
    t.fail("expect exec to throw an exception")
  } catch (e: any) {
    t.regex(e.toString(), new RegExp(`${cmd}: not found`))
  }
})
