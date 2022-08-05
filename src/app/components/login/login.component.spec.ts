import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/modules/movie/services/login.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/modules/movie/models/user';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
// class MockLoginService extends LoginService {
//   override generateToken(user: User): Observable<string> {
//     return of('asdf');
//   }
//   override loginUser(token: string): boolean {
//     return true;
//   }
// }

const MockLoginService = {
  generateToken: () => of('abc'),
  loginUser: () => true,
};
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatSnackBarModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [{ provide: LoginService, useValue: MockLoginService }],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('testing variable value', () => {
    var val = 10;
    expect(val).toBe(10);
  });

  it('testing h2 tag content', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector('.some').textContent).toBe('LOGIN');
  });

  it('Should minimum one login button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length >= 1).toBeTruthy();
  });

  it('testing login button text', () => {
    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    const nativeButton: HTMLButtonElement = button.nativeElement;
    expect(nativeButton.textContent?.trim()).toBe('Login');
  });

  it('testing api call', () => {});
});
