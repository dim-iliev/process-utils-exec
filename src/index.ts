import cp from "child_process"

/**
 * Execute command and return a promise with the response
 * @param {string} cmd - command to execute
 * @param {Object?} options - Execute command options
 * @param {boolean} options.stats - log the command and show total duration
 * @return {Promise} - Returns stdout or stderr as a promise
 */
export function exec(
  cmd: string,
  options?: { stats: boolean }
): Promise<string> {
  if (options?.stats) {
    console.time(cmd)
  }

  return new Promise((res, rej) => {
    cp.exec(cmd, (err, stdout, stderr) => {
      if (!err) {
        res(stdout)
      } else {
        rej(stderr)
      }
      if (options?.stats) {
        console.timeEnd(cmd)
      }
    })
  })
}
