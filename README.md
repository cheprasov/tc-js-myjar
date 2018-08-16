# MYJAR

## About me
Alexander Cheprasov
- email: acheprasov84@gmail.com
- phone: +44 7490 216907
- linkedin: https://uk.linkedin.com/in/alexandercheprasov/
- CV: https://cv.cheprasov.com/
- London, UK

## About the test

### Tech stack

- NodeJS v10.6.0

### Documentation API

#### TODO
* It is very important to write tests. I left the solution without tests, because it is a test challenge about code and structure. In real life, a task without tests is not completed task.
* I use a stub storage for tokens, and I have not written a functional about checking IP and prevent a brute force for tokens.
* Add Cache for API request, tokens and Wiplala service.
* Replace `console.log` by Logger. 

#### Eslint

`npm run lint`

#### Authorization

Use `token` header for each API request for authorization.

Example:
```
    token:  superSecret123
```

#### Criteria 1. Puppify a dog

**URL**: `http://localhost:30000/api/v1/dogs/puppify` 

**POST**: 
```
token:	superSecret123
Content-Type:	application/json

{"name":"doddy", "breed":"tax", "kind":"dog", "lat":0.77, "lon":11}

```

**Response**:
```
{
    "kind": "puppy",
    "lat": 0.77,
    "lon": 11,
    "breed": "tax",
    "name": "puppy doddy"
}
```

#### Criteria 2. Unpuppify a dog

**URL**: `http://localhost:30000/api/v1/dogs/unpuppify` 

**POST**: 
```
token:	superSecret123
Content-Type:	application/json

{"name":"puppy doddy", "breed":"tax", "kind":"puppy", "lat":0.77, "lon":11}

```

**Response**:
```
{
    "kind": "dog",
    "lat": 0.77,
    "lon": 11,
    "breed": "tax",
    "name": "doddy"
}
```

#### Criteria 3. Check of danger peaks

**URL**: `http://localhost:30000/api/v1/dogs/peaks` 

**POST**: 
```
token:	superSecret123
Content-Type:	application/json

{"puppies": [
    {
        "name": "Pumpkin",
        "visits": ["13:20-14:00", "15:10-16:00"]
    },
    {
        "name": "Nut",
        "visits": ["10:00-13:00", "14:00-16:00"]
    },
    {
        "name": "Nut",
        "visits": ["10:00-13:30", "14:00-16:00"]
    }
 ]}
```

**Response**:
```
{
    "result": "danger!",
    "dangerPeriods":[
    "15:10-16:00"
    ],
    "peakVisitors": 3
}
```
