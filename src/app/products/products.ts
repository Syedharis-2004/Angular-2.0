import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  tickerText = "From Idea to MVP in 8 Weeks • Build Smarter. Launch Faster. • AI-Accelerated Product Development •";
  // We repeat it 3 times to ensure there's always content visible during the CSS loop
  tickerItems = [this.tickerText, this.tickerText, this.tickerText];
}
