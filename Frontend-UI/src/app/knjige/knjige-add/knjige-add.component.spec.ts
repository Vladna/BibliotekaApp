import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigeAddComponent } from './knjige-add.component';

describe('KnjigeAddComponent', () => {
  let component: KnjigeAddComponent;
  let fixture: ComponentFixture<KnjigeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
