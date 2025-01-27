import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/bankcards", () => {
    return HttpResponse.json([
      { type: "bank-draft", title: "Bank Draft", position: 0 },
      { type: "bill-of-lading", title: "Bill of Lading", position: 1 },
      { type: "invoice", title: "Invoice", position: 2 },
      { type: "bank-draft", title: "Bank Draft 2", position: 3 },
      { type: "bill-of-lading", title: "Bill of Lading 2", position: 4 },
    ]);
  }),
];
