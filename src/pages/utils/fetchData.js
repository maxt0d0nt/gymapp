export const exercisesOptions = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '45a9a9ce2emsh17b2b56cb52b29cp10ccbejsn8852e2ecd84f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}