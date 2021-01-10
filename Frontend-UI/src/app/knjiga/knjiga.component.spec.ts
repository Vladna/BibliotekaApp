import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaComponent } from './knjiga.component';

describe('KnjigaComponent', () => {
  let component: KnjigaComponent;
  let fixture: ComponentFixture<KnjigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
