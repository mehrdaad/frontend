// @flow
export const signInGate: ABTest = {
    id: 'SignInGateLatens',
    start: '2020-04-03',
    expiry: '2020-05-01',
    author: 'Mahesh Makani',
    description:
        'Test adding a sign in component on the 2nd pageview of simple article templates vs 3rd pageview, with higher priority over banners and epic, and a much larget audience size. This test does not display a gate, and only used for tracking users who meet our displayer criteria.',
    audience: 0.1,
    audienceOffset: 0.9,
    successMeasure: 'Users sign in or create a Guardian account',
    audienceCriteria:
        'The contributions epic is not shown, The consent banner is not shown, The contributions banner is not shown, Should only appear on simple article template, Should not show if they are already signed in, Users will not need to go through the marketing consents as part of signup flow',
    dataLinkNames: 'SignInGateLatens',
    idealOutcome: '60% of users sign in, and dismiss rate is below 40%',
    showForSensitive: false,
    canRun: () => true,
    variants: [
        // {
        //     id: 'example',
        //     test: (): void => {},
        // },
        {
            id: 'control',
            test: (): void => {},
        },
        {
            id: 'variant',
            test: (): void => {},
        },
    ],
};