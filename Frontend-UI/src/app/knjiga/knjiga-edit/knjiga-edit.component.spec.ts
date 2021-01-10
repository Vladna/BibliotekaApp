import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaEditComponent } from './knjiga-edit.component';

describe('KnjigaEditComponent', () => {
  let component: KnjigaEditComponent;
  let fixture: ComponentFixture<KnjigaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
