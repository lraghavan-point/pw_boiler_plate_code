# Playwright Test Automation Bare-bones

This is a bare-bones boilerplate project set up for playwright to help the interviewee get up and running on the exercise.

The scope of test may not be limited to the workflow as mentioned. The interviewee may add additional test case outside of workflow as needed as well. Environment configuration and test cases organization should be considered as well.

# System under test: Know before you go (KBYG)
The system under test is [https://partner-qa.point.dev/](https://partner-qa.point.dev/)
# The general workflow is listed as following:
- User can login to the page with email and execute following tasks:
- sign out with link on page
- input address and check how much equity is there for a Point investment, and what the max offer might be
- For property with result and is eligible:
- System should display maximum offer
- User may further refine inputs such as home value, lien amount and credit score
- Once pre-approved, user may view pricing and etimate cost
- Additional UI control is available for user to adjust the details of contract; Or user may proceed to continue with appliccation or book an appointment with an account manager.

# How to install and run test
- Clone repo from github: https://github.com/lraghavan-point/point_cypress_interview_boilerplate
- Install yarn: https://classic.yarnpkg.com/en/docs/install
- Run test with yarn (execute "yarn test" from CLI of choice)

# Address for test:
- 678 San Miguel Avenue, Santa Clara, CA
- 979 Henderson Ave, Sunnyvale, CA 94086
- 505 Cypress Point Dr, Mountain View, CA 94043
- 778 Coleman Ave, Menlo Park, CA 94025

# General goals / information for both manual & automated test
- Documented test case(s) will be used for programming session with engineers
- KBYG (Know before You Go) workflow has 3-5 pages and last page contains more functionality
- Can consolidate test cases

Breadth vs depth of test coverage but feel free to mention any scenarios that highlights your approach or interesting test cases
Consider automation while describing test cases
