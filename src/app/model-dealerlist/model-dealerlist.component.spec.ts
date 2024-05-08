import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDealerlistComponent } from './model-dealerlist.component';

describe('ModelDealerlistComponent', () => {
  let component: ModelDealerlistComponent;
  let fixture: ComponentFixture<ModelDealerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDealerlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelDealerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
