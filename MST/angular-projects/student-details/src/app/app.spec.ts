import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render no records', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No Records');
  });

  it('should mark failed student and lock mark count after adding', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.ngOnInit();
    app.rollNo = "2"
    app.name = "John"
    app.student_data.markArr = [80,20,90]
    app.AddStudent()

    app.student_data.markCount = 5
    app.setTotalmarks()

    expect(app.student_data.students.length).toBe(1);
    expect(app.isFailed(app.student_data.students[0])).toBe(true);
    expect(app.student_data.markCount).toBe(3);
  });
});
