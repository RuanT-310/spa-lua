import fs from 'fs'
import chalk from 'chalk'

export function readFile(path) {
    fs.readFile(path, 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      const regex = /\[(.+?)\]\((.+?)\)/g;
      //console.log(data.split("\n").map(link => link.match(regex)[0]))
      data.match(regex).forEach(link => console.log(chalk.red(link)))
    })
}
