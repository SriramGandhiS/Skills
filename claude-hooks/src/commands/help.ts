import {Args, Command} from '@oclif/core'
import chalk from 'chalk'

export default class Help extends Command {
  static description = 'Display help for claude-hooks'

  static args = {
    command: Args.string({
      description: 'Command to show help for',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const {args} = await this.parse(Help)

    if (args.command) {
      // Show help for specific command
      const cmd = this.config.findCommand(args.command)
      if (!cmd) {
        console.error(`Command ${args.command} not found`)
        return
      }
      await this.config.runCommand('help', [args.command])
      return
    }

    // Show root help with our custom formatting
    console.log(chalk.blue.bold('\n claude-hooks'))
    console.log(
      chalk.gray(
        '\nTypeScript-powered hook system for Claude Code - write hooks with full type safety and auto-completion',
      ),
    )

    console.log(chalk.yellow('\n Overview:'))
    console.log("  claude-hooks gives you a powerful, TypeScript-based way to customize Claude Code's behavior.")
    console.log('  Write hooks with full type safety, auto-completion, and access to strongly-typed payloads.')

    console.log(chalk.yellow('\n Quick Start:'))
    console.log(chalk.cyan('  npx claude-hooks'))
    console.log(chalk.gray('  # This will create the following structure:'))

    console.log(chalk.yellow('\n Generated Structure:'))
    console.log('  .claude/')
    console.log(`  ├── settings.json         ${chalk.gray('# Hook configuration')}`)
    console.log('  └── hooks/')
    console.log(`      ├── index.ts          ${chalk.gray('# Your hook handlers (edit this!)')}`)
    console.log(`      ├── lib.ts            ${chalk.gray('# Type definitions and utilities')}`)
    console.log(`      └── session.ts        ${chalk.gray('# Session tracking utilities')}`)

    console.log(chalk.yellow('\n  Requirements:'))
    console.log('  • Node.js >= 18.0.0')
    console.log('  • Bun runtime (required for running hooks)')
    console.log(chalk.gray('    Install: curl -fsSL https://bun.sh/install | bash'))

    console.log(chalk.yellow('\n Available Hook Types:'))
    console.log('  • PreToolUse    - Intercept tool usage before execution')
    console.log('  • PostToolUse   - React to tool execution results')
    console.log('  • Notification  - Handle Claude notifications')
    console.log('  • Stop          - Handle session stop events')
    console.log('  • SubagentStop  - Handle subagent stop events')

    console.log(chalk.yellow('\n Commands:'))
    console.log(chalk.cyan(`  ${this.config.bin} init`) + chalk.gray('      # Initialize Claude hooks in your project'))
    console.log(chalk.cyan(`  ${this.config.bin} logs`) + chalk.gray('      # Display paths to Claude session logs'))
    console.log(chalk.cyan(`  ${this.config.bin} help`) + chalk.gray('      # Show this help message'))

    console.log(chalk.yellow('\n Examples:'))
    console.log(chalk.gray('  Initialize hooks:'))
    console.log(`    ${this.config.bin} init`)
    console.log('')
    console.log(chalk.gray('  Force overwrite existing hooks:'))
    console.log(`    ${this.config.bin} init --force`)
    console.log('')
    console.log(chalk.gray('  Create local settings file:'))
    console.log(`    ${this.config.bin} init --local`)
    console.log('')
    console.log(chalk.gray('  Show path to latest session log:'))
    console.log(`    ${this.config.bin} logs`)
    console.log('')
    console.log(chalk.gray('  List all session logs:'))
    console.log(`    ${this.config.bin} logs --list`)

    console.log(chalk.yellow('\n More Information:'))
    console.log('  GitHub: https://github.com/johnlindquist/claude-hooks')
    console.log('  Issues: https://github.com/johnlindquist/claude-hooks/issues')
    console.log('')
  }
}
