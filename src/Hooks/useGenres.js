const useGenres = (selectedGenre) => {

    if(selectedGenre.length < 1 ) return ""

    const GenreIds = selectedGenre.map((g) => g.id);

    return GenreIds.reduce((acc,curr) => acc + "," + curr);

}

export default useGenres