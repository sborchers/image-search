import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsModalComponent } from './search-details-modal.component';

describe('SearchDetailsModalComponent', () => {
  let component: SearchDetailsModalComponent;
  let fixture: ComponentFixture<SearchDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
