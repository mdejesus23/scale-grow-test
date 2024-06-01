import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getProducts, deleteProduct } from "../../services/apiProducts";
import { useState } from "react";
import CreateItemForm from "./CreateItemForm";

function Table() {
  const [showForm, setShowForm] = useState(false);

  const { data: products } = useQuery({
    queryKey: ["prods"],
    queryFn: getProducts,
  });

  // query client instance.
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    // refetching the data through this function.
    onSuccess: () => {
      queryClient.invalidateQueries({
        qieryKey: ["prods"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Amount</th>
          <th></th>
        </tr>
        {products &&
          products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>
                <button onClick={() => setShowForm((show) => !show)}>
                  Edit
                </button>
                <button onClick={() => mutate(item.id)}>Delete</button>
              </td>

              {showForm && (
                <tr key={item.id}>
                  <td>
                    <CreateItemForm />
                  </td>
                </tr>
              )}
            </tr>
          ))}
      </table>
    </>
  );
}

export default Table;
