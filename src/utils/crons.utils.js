import { scheduleJob } from "node-schedule";
import { DateTime } from "luxon";
import { BlacklistToken } from "../../DB/models/index.js";
export const cronJobForRemovingEpiredTokens = () => {
  // Runs at 2:00 AM every 2 days starting from a specific date => "0 2 */2 * *"
  // Runs every 5 seconds => "*/5 * * * * *"

  /**
   * @comment - store the timing expression into env because it's a configurable value
   * also you can add a switch value like ON or OFF for this cron job
   * instead of gracefulShutdown function
   */
   scheduleJob("*/5 * * * * *", async () => {

    // new code 
    if(process.env.REMOVE_EXPIRED_SWITCH == 'ON'){
      const nowInSeconds = DateTime.now().toSeconds();
      const result = await BlacklistToken.deleteMany({
        expiresAt: { $lte: nowInSeconds },
      });
      console.log(`Removed ${result.deletedCount} expired tokens and current time in seconds ${nowInSeconds}`)
    }
  });
};
