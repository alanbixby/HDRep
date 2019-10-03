## HD Marketplace Reputation Bot
| NOTE: This repo is still in development, and a majority of this README is for personal use as a processing document. |
| --- |

The purpose of this project is to act as a prototype visualization of a reputation bot to be implemented into the [Hidden Developers Discord marketplace](https://www.discord.gg/HD). 

Some functions may be abstracted as they will be implemented to the existing bot within the marketplace.

A tracker for transactions between users has been widely adopted on other communities such as [/r/hardwareswap](https://www.reddit.com/r/hardwareswap/comments/dboz37/october_confirmed_trade_thread/); a two-party confirmation system is used to keep track of a user's history of transactions and to help gauge their reputability. From this information, a user can feel more comfortable going first in a transaction with an individual of 200 trades, versus a new seller with no reputation.

Optimally this system should be automated with checks in place to prevent abuse.

Restrictions:
- Both users must be role `Silver I` or greater.
- Users can only confirm up to `4` transactions per day.
- Users may only confirm up to `3` transactions with the same user in a `7 Day` period before needing `Scam Investigator` approval.

Method A: <-- [INTENDED METHOD]
1. `Party A` uses the command `!confirm [@user] [description]` in a dedicated channel, `#confirm-transaction`.
2. `@HiddenBot` deletes the command input and creates a ticket embed with reaction control.
3. `@HiddenBot` listens for reaction event by mentioned `Party B` or `Scam Investigator` and increments `Party A` and `Party B`'s confirmed transaction count.

- Potential Issue: This will double ping `Party B`; once by `Party A`, a second time by `@HiddenBot`- this will be deemed an acceptable issue as responding to the request will benefit `Party B`.

Method B:
1. `Party A` uses the command `!confirm` in `#cmds` or when DMing `@HiddenBot`.
2. `@HiddenBot` creates a prompt in DMs with `Party A` to create a confirmation ticket.
3. After ticket is made, `@HiddenBot` messages `Party B` to confirm ticket.

    - Potential Issue: Most users won't have Developer Mode enabled, or be savvy enough to provide UserIDs; going based on username will cause issues with nicknames, etc.


Additional Tasks:
- Moderators have the ability to `Confirmation Mute` individuals, blocking their ability to use the command.
- `!confirm` command should be aliased to `!transaction`, `!confirmTrade`
- `!rep [@user]`; a command that states a user's reputation count in a RichEmbed message; defaults no argument to message author.
- `!repHistory [@user]`; a command that states a detailed history of a user's transaction history; includes other timestamps, other party involved, and the description of the transaction.

    - Potential Issue: May become arduous to display as a Discord message with large transaction counts- either rely on descending order pages, and/or truncate to `40 Transactions`.
