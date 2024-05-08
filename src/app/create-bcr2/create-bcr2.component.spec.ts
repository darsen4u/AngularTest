import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBcr2Component } from './create-bcr2.component';

describe('CreateBcr2Component', () => {
  let component: CreateBcr2Component;
  let fixture: ComponentFixture<CreateBcr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBcr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBcr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
