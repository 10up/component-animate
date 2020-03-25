import puppeteer from 'puppeteer';
import assert from 'assert';

const APP = 'https://10up.github.io/component-animate/demo/';
const width = 1440;
const height = 860;

let page;
let browser;

const animations = [
	'fade-in',
	'fade-out',
	'rotate-90',
	'rotate-180',
	'rotate-270',
	'rotate-360',
	'scale-down-large',
	'scale-down-small',
	'scale-down',
	'scale-up-large',
	'scale-up-small',
	'scale-up',
	'shake-horizontal-large',
	'shake-horizontal-small',
	'shake-horizontal',
	'shake-vertical-large',
	'shake-vertical-small',
	'shake-vertical',
	'slide-in-down',
	'slide-in-left',
	'slide-in-right',
	'slide-in-up',
	'slide-out-down',
	'slide-out-left',
	'slide-out-right',
	'slide-out-up'
];

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: true,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

beforeEach( async () => {

	// Emulate reduced motion
	await page.emulateMediaFeatures( [
		{
			name: 'prefers-reduced-motion',
			value: 'reduce'
		}
	] );

	// Visit the page in headless Chrome
	await page.goto( APP );

} );

describe( 'Accessibility Tests', () => {

	for (const animation of animations) {

		test( 'Test Reduced Motion for: ' + animation , async () => {
			await page.evaluate( ( animation ) => {

				document.querySelector( '#js-control' ).value = animation;
				document.querySelector( '#js-animation-form [type="submit"]' ).click();

			}, animation );

			const animationDuration = await page.evaluate((animation) => {

				const demoBlock = document.getElementById( 'js-demo-block' );
				const demoBlockStyles = window.getComputedStyle( demoBlock );
				const animationDemoBlockDuration = demoBlockStyles.getPropertyValue( 'animation-duration' );

				return animationDemoBlockDuration;

			});

			assert.equal( animationDuration, '0.001s' );

		} );

	} // for()

} );

afterAll( () => {
	browser.close();
} );
