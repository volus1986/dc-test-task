export default function parseDateTimeString(dateTimeString: string) {
    const dateString = dateTimeString.split(' ')[0];
    const [year, month, day] = dateString.split('-');
    const monthName = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ][+month];
    return {
        year,
        monthNumber: month,
        monthName,
        day,
    };
}
