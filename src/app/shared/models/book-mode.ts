export interface Book{
    author: string;
    title: string;
    details: BookDetails;
    addresses: string[];
}

export interface BookDetails{
    pages: number;
    price: number;
}