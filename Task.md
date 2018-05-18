
# MYJAR Engineering Test Task

In this folder, you'll find an incomplete NodeJS project (```puppify-api```). As a software engineer candidate, your task is to ensure the project fulfils the original acceptance criteria (AC) as described below. The current situation as it was left by a former  developer when he got promoted away into management.

Please return to MYJAR a working, professional quality codebase. Add documentation and comments on your work process, things that should be improved in the future, observed problems, etc.

*Note:* As we are always improving this test task, all feedback is welcome. Please also keep track of the time it took, we're aiming not to request more than 2 hours of input. **Thanks && good luck!** MYJAR.


## Task description, as received from Product Owner

Puppify, the flagship product of HOT-DOG INC., is a public REST API which reduces full-grown dogs back to cute puppies, taking advantage of real-life AWS Wiplala service.

* **Criteria 1.** Provide an API to puppify a dog [_80% implemented_] - START HERE!
* **Criteria 2.** Provide an API to revert a previously puppified dog [_not implemented_]
* **Criteria 3.** Stretch target:

As everyone knows, it is dangerous for more than 2 puppified puppies gather at a playground at the same time, as the quantum biorythms of puppification can cause a turbulent reaction due to triangular proximity.

Provide an API, given a number of puppy's plans for playground visits, returns the period of danger.

Sample input:
```
{"puppies": [
	{
		"name": "Pumpkin",
		"visits": ["13:20-14:00", "15:10-16:00"]
	},
	{
		"name": "Nut",
		"visits": ["10:00-13:30", "14:00-15:00"]
	},
	{
		"name": "Loofah",
		"visits": ["11:00-14:00"]
	}
]};
```

Sample output:
```
{
	"result": "danger!",
	"dangerPeriods: ["13:20-13:30"], // All ranges when three puppies are visiting the playground
	"peakVisitors" 3 // Maximum number of puppies visiting at once
}
```
