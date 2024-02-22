import { Message } from "./message.interface";

export interface Book extends Message {
  uid?: number;
	title: string;
	author: string;
	editorial: string;
	category: string;
	year: number;
	read: boolean;
}

export interface BookItem extends Message {
	book: Book;
}

export interface BookList extends Message {
	books: Book[];
}