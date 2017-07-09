import { Ng4PgMaterialPage } from './app.po';

describe('ng4-pg-material App', () => {
  let page: Ng4PgMaterialPage;

  beforeEach(() => {
    page = new Ng4PgMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
