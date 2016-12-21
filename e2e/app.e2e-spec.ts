import { MyTelsaPage } from './app.po';

describe('my-telsa App', function() {
  let page: MyTelsaPage;

  beforeEach(() => {
    page = new MyTelsaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
