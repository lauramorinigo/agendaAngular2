import { DemocraciaredPage } from './app.po';

describe('democraciared App', () => {
  let page: DemocraciaredPage;

  beforeEach(() => {
    page = new DemocraciaredPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
