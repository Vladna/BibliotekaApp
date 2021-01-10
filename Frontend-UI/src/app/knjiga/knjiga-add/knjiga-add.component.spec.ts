import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaAddComponent } from './knjiga-add.component';

describe('KnjigaAddComponent', () => {
  let component: KnjigaAddComponent;
  let fixture: ComponentFixture<KnjigaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
