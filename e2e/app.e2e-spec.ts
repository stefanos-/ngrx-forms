import { NgrxFormsPrototypePage } from './app.po';

describe('ngrx-forms-prototype App', () => {
  let page: NgrxFormsPrototypePage;

  beforeEach(() => {
    page = new NgrxFormsPrototypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
