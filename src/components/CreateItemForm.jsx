import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createProduct, editProduct } from "../../services/apiProducts";

function CreateItemForm({ productToEdit = {} }) {
  const { id: editId, ...editValues } = productToEdit;
  const isEditSession = Boolean(editId);

  // query client instance.
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: !isEditSession ? createProduct : editProduct,
    onSuccess: () => {
      !isEditSession
        ? alert("New Product Created!")
        : alert("Product Updated!");
      queryClient.invalidateQueries({
        qieryKey: ["prods"],
      });
    },
    onError: (err) => alert(err.message),
  });

  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  function onSubmit(data) {
    console.log(data);
    const productDetails = { editId, data };
    mutate(productDetails);

    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <label htmlFor="name">Product name</label>
        <input type="text" id="name" {...register("name")} />
      </div>

      <div className="form-row">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" {...register("amount")} />
      </div>

      <div className="form-row form-row-buttons">
        <button type="submit" className="button primary">
          {isEditSession ? "Edit Product" : "Create Product"}
        </button>
      </div>
    </form>
  );
}

export default CreateItemForm;
