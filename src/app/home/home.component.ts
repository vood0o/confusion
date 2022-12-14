import { Component } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dish: Dish | undefined;
  promotion: Promotion | undefined;
  leader: Leader | undefined;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService) {

  }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe((dish) => this.dish = dish);
    this.promotionService.getFeaturedPromotion()
      .subscribe((promotion) => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .subscribe((leader) => this.leader = leader);
  }

}
