import Utils from '../../utils';

export const getColorByRating = (rating: number) => {
	let color;
	switch (true) {
		case rating > 8:
			color = Utils.COLORS.rating_highest;
			break;
		case rating > 6:
			color = Utils.COLORS.rating_high;
			break;
		case rating > 4:
			color = Utils.COLORS.rating_medium;
			break;
		case rating > 2:
			color = Utils.COLORS.rating_low;
			break;
		default:
			color = Utils.COLORS.rating_lowest;
			break;
	}

	return color;
};

export const getDate = (date: Date): string => {
	const day = checkDateNumber(date.getDate());
	const month = checkDateNumber(date.getMonth() + 1);
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
};

const checkDateNumber = (dateNumber: number): string => {
	return dateNumber < 10 ? `0${dateNumber}` : `${dateNumber}`;
};
