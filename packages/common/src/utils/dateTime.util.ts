
/**
 * Compare two dates and get the differences.
 * if date1 is bigger then date 2 it returns a positive value.
 * @param date1 first date to compare
 * @param date2 seconds date to compare
 * @returns {number} Time difference in milliseconds
 */
export const differenceInMS = ( date1: Date, date2: Date ): number =>
  Math.abs( date1.getTime() - date2.getTime() );
