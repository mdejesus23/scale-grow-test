import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getProducts, deleteProduct } from "../../services/apiProducts";
import { useState } from "react";
import CreateItemForm from "./CreateItemForm";

function Table() {
  const [showFormId, setShowFormId] = useState(null);

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
        queryKey: ["prods"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button
                      onClick={() =>
                        setShowFormId((prevId) =>
                          prevId === item.id ? null : item.id
                        )
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => mutate(item.id)}>Delete</button>
                  </td>
                </tr>
                {showFormId === item.id && (
                  <tr>
                    <td colSpan="3">
                      <CreateItemForm productToEdit={item} />
                    </td>
                  </tr>
                )}
              </>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
