import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigeEditComponent } from './knjige-edit.component';

describe('KnjigeEditComponent', () => {
  let component: KnjigeEditComponent;
  let fixture: ComponentFixture<KnjigeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
