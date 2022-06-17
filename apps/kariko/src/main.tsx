import React, { StrictMode } from "react";
import { render } from "react-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Routes } from "generouted";

export const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <Routes />
  </QueryClientProvider>,
  document.getElementById("root"),
);

// render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <Routes />
//       </BrowserRouter>
//     </QueryClientProvider>
//   </StrictMode>,
//   document.getElementById("root"),
// );
