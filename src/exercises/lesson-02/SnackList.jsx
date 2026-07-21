function SnackList() {
  const myFavorites = [
    { name: 'Chocolate Flan cake', rank: 5 },
    { name: 'Chesters Puffcorn', rank: 4 },
    { name: 'Honey Butter Bread', rank: 3 },
    { name: 'Basque Cheescake', rank: 2 },
    { name: 'Van Leeuwen Ice cream', rank: 1 },
  ];
  const sortedFavs = myFavorites.toSorted((a, b) => a.rank - b.rank);
  console.log(sortedFavs);
  return (
    <ul>
      {sortedFavs.map((snack) => (
        <li key={snack.rank}>{snack.rank + '. ' + snack.name}</li>
      ))}
    </ul>
  );
}
export default SnackList;
