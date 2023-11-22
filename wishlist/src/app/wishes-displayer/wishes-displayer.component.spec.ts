import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishesDisplayerComponent } from './wishes-displayer.component';

describe('WishesDisplayerComponent', () => {
  let component: WishesDisplayerComponent;
  let fixture: ComponentFixture<WishesDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishesDisplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishesDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
