import { isNullOrUndefined } from "@/Helpers/IsNullOrUndefined";

class DateTimeFormatter {
    forDisplay(date: Date | string | null | undefined): string | null {
        if (isNullOrUndefined(date)) return null;

        return this.convertToDate(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }

    convertSecondsToHours(seconds: number | null | undefined): number | null {
        if (isNullOrUndefined(seconds)) return null;

        return Math.ceil(seconds / (60 * 60));
    }

    convertToDate(date: Date | string): Date {
        return typeof date === 'string' ? new Date(date) : date;
    }
}

export default new DateTimeFormatter
