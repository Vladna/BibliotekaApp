import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigeShowComponent } from './knjige-show.component';

describe('KnjigeShowComponent', () => {
  let component: KnjigeShowComponent;
  let fixture: ComponentFixture<KnjigeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
