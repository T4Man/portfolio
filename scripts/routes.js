page('/projects',
  mainsController.index,
  contentView.initMainPage);

page('/',
  aboutController.index,
  contentView.initMainPage);

page('/gitRepos',
  repoView.index);

page();
