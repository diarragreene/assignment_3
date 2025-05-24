import previous_assignment from "./assignment-3";

export type BookID = string;

export interface Book {
  id?: BookID;
  name: string;
  author: string;
  description: string;
  price: number;
  image: string;
  stock?: number;
}

export interface Filter {
  from?: number;
  to?: number;
  name?: string;
  author?: string;
}

// If multiple filters are provided, any book that matches at least one of them should be returned
// Within a single filter, a book would need to match all the given conditions
async function listBooks(filters?: Filter[]): Promise<Book[]> {
  // TODO: Implement filtering logic using the 'filters' parameter
  console.log(filters); // Temporary usage to avoid the unused parameter warning
  throw new Error("Todo");
}

async function createOrUpdateBook(book: Book): Promise<BookID> {
  return await previous_assignment.createOrUpdateBook(book);
}

async function removeBook(book: BookID): Promise<void> {
  await previous_assignment.removeBook(book);
}

async function lookupBookById(book: BookID): Promise<Book> {
  // TODO: Implement logic to look up a book by its ID
  console.log(`Looking up book with ID: ${book}`);
  throw new Error("Todo");
}

export type ShelfId = string;
export type OrderId = string;

async function placeBooksOnShelf(
  bookId: BookID,
  numberOfBooks: number,
  shelf: ShelfId,
): Promise<void> {
  // TODO: Implement logic to place books on the specified shelf
  console.log(`Placing ${numberOfBooks} of book ${bookId} on shelf ${shelf}`);
  throw new Error("Todo");
}
async function orderBooks(order: BookID[]): Promise<{ orderId: OrderId }> {
  // TODO: Implement logic to create an order for the given books
  console.log(`Creating an order for books: ${order}`);
  throw new Error("Todo");
}

async function findBookOnShelf(
  book: BookID,
): Promise<Array<{ shelf: ShelfId; count: number }>> {
  // TODO: Implement logic to find a book on the shelf
  console.log(`Finding book with ID: ${book} on shelves`);
  throw new Error("Todo");
}

async function fulfilOrder(
  order: OrderId,
  booksFulfilled: Array<{
    book: BookID;
    shelf: ShelfId;
    numberOfBooks: number;
  }>,
): Promise<void> {
  // TODO: Implement logic to fulfil an order
  console.log(`Fulfilling order ${order} with books:`, booksFulfilled);
  throw new Error("Todo");
}

async function listOrders(): Promise<
  Array<{ orderId: OrderId; books: Record<BookID, number> }>
> {
  throw new Error("Todo");
}

const assignment = "assignment-4";

export default {
  assignment,
  createOrUpdateBook,
  removeBook,
  listBooks,
  placeBooksOnShelf,
  orderBooks,
  findBookOnShelf,
  fulfilOrder,
  listOrders,
  lookupBookById,
};
