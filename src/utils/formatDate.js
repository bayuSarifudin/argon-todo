export const formatDateString = (inputDateString) => {
	// Convert string to Date object
	var inputDate = new Date(inputDateString)

	// Format date as desired
	var options = { day: 'numeric', month: 'short', year: 'numeric' }
	var formattedDate = inputDate.toLocaleDateString('en-GB', options)

	// Return the formatted date
	return formattedDate
}
