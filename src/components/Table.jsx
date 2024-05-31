const data = [
  {
    id: "item-1",
    name: "item1",
    amount: 900,
    desc: "test item1",
  },
  {
    id: "item-2",
    name: "item2",
    amount: 700,
    desc: "test item 2",
  },
];

function table() {
  return (
    <table>
      <tr>
        <th>Product Name</th>
        <th>Amount</th>
        <th></th>
      </tr>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.amount}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default table;
