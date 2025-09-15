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

    convertToDate(date: Date | string): Date {
        return typeof date === 'string' ? new Date(date) : date;
    }
}

export default new DateTimeFormatter
