import { sayHello } from "../src/say-hello";
describe('sayHello', () => {
    it('Should return hello juki', function () {
        expect(sayHello('juki')).toBe('Hello juki');
    });
});
