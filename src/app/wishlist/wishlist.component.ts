import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  constructor(private wishlistService: WishlistService,private title:Title) { this.title.setTitle('Wishlist - showtime');  }

  wishlist: any[] = [];

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  addToWishlist(movie: any) {
    // Check if the movie already exists in the wishlist
    const existsInWishlist = this.wishlist.some(item => item.id === movie.id);

    if (!existsInWishlist) {
      this.wishlist.push(movie);
      this.wishlistService.setWishlist(this.wishlist); // Update the wishlist
    }
  }
  

  

}
