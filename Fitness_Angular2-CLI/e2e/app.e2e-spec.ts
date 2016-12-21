import { FitnessAngular2CLIPage } from './app.po';

describe('fitness-angular2-cli App', function() {
  let page: FitnessAngular2CLIPage;

  beforeEach(() => {
    page = new FitnessAngular2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
