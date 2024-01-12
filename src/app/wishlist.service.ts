import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class WishlistService {

  wishlist: any[] = [];

  constructor() { }

  addToWishlist(movie: any): void {
    const existsInWishlist = this.wishlist.some(item => item.id === movie.id);

    if (!existsInWishlist) {
      this.wishlist.push(movie);
    }
  }

  isInWishlist(movie: any): boolean {
    return this.wishlist.some(item => item.id === movie.id); 
  }

  getWishlist() {
    return this.wishlist;
  }

  setWishlist(wishlist: any[]): void {
    this.wishlist = wishlist;
  }

}
