import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];
    public backgroung: boolean=false;

    addQuotesToFavorite(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }
    removeQuotesFromFavorite(quote: Quote) {
        const pos = this.favoriteQuotes.findIndex((qe: Quote) => {
            return qe.id === quote.id;
        });
        this.favoriteQuotes.splice(pos, 1);
    }
    getFavoriteQuote() {
        return this.favoriteQuotes.slice();
    }
    isFav(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id === quote.id;
        });
    }
    alterBackgroung(flag: boolean) {
        this.backgroung = flag;
    }
    checkBgStatus() {
        return this.backgroung;
    }
}