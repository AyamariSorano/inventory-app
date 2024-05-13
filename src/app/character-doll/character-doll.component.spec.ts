import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDollComponent } from './character-doll.component';

describe('CharacterDollComponent', () => {
  let component: CharacterDollComponent;
  let fixture: ComponentFixture<CharacterDollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterDollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
