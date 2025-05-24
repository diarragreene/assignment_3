import previous_assignment from "./assignment-2";

export type BookID = string;

export interface Book {
  id?: BookID;
  name: string;
  author: string;
  description: string;
  price: number;
  image: string;
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
  const allBooks = await previous_assignment.listBooks();

  if (!filters || filters.length === 0) {
    return allBooks;
  }

  const filteredBooks = new Set<Book>();

  for (const filter of filters) {
    for (const book of allBooks) {
      let matches = true;

      if (filter.from !== undefined && book.price < filter.from) {
        matches = false;
      }

      if (filter.to !== undefined && book.price > filter.to) {
        matches = false;
      }

      if (
        filter.name !== undefined &&
        !book.name.toLowerCase().includes(filter.name.toLowerCase())
      ) {
        matches = false;
      }

      if (
        filter.author !== undefined &&
        !book.author.toLowerCase().includes(filter.author.toLowerCase())
      ) {
        matches = false;
      }

      if (matches) {
        filteredBooks.add(book);
      }
    }
  }

  return Array.from(filteredBooks);
}

async function createOrUpdateBook(book: Book): Promise<BookID> {
  return await previous_assignment.createOrUpdateBook(book);
}

async function removeBook(book: BookID): Promise<void> {
  await previous_assignment.removeBook(book);
}

const assignment = "assignment-3";

export default {
  assignment,
  createOrUpdateBook,
  removeBook,
  listBooks,
};
