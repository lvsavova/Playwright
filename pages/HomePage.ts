import {Page} from "@playwright/test";

export class HomePage {
    private page: Page;
    public static URL = "http://training.skillo-bg.com:4200/posts/all";

    private allPosts = "app-all-posts";

    constructor(page: Page) {
        this.page = page;
    }

    public async open() {
        await this.page.goto(HomePage.URL);
        await this.page.waitForSelector(this.allPosts);
    }
}
