import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateItemForm from "./components/CreateItemForm";
import Table from "./components/Table";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Scale & Grow Realty</h1>
        <main>
          <Table />
          <CreateItemForm />
        </main>
      </QueryClientProvider>
    </>
  );
}

export default App;
