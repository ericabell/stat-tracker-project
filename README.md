# Activity Tracking API

Endpoints
1. GET	/activities	Show a list of all activities I am tracking, and links to their individual pages

Response Example:
```{
    "status": "success",
    "data": [
        {
            "name": "walking",
            "url": "http://localhost:3000/activities/walking"
        },
        {
            "name": "running",
            "url": "http://localhost:3000/activities/running"
        },
        {
            "name": "biking",
            "url": "http://localhost:3000/activities/biking"
        }
    ]
}```

2. POST	/activities	Create a new activity for me to track.

Request Body:
```{"activity":"biking", "statisticName": "distance", "statisticValue": 8}

Response Example:
{
    "status": "success",
    "data": {
        "__v": 0,
        "activityName": "biking",
        "date_time": "2017-09-06T16:58:07.849Z",
        "statisticName": "distance",
        "statisticValue": 8,
        "_id": "59b0291f1f20c09a4daf97fc"
    }
}```

3. GET	/activities/{name}	Show information about one activity I am tracking, and give me the data I have recorded for that activity.

Response Example:
```{
    "status": "success",
    "data": [
        {
            "_id": "59b024498f16fa96e673a57b",
            "activityName": "walking",
            "date_time": "2017-09-06T16:37:29.131Z",
            "statisticName": "distance",
            "statisticValue": 8,
            "__v": 0
        },
        {
            "_id": "59b0244a8f16fa96e673a57c",
            "activityName": "walking",
            "date_time": "2017-09-06T16:37:30.620Z",
            "statisticName": "distance",
            "statisticValue": 8,
            "__v": 0
        },
        ...
    ]
}```

4. PUT	/activities/{name}	Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.

Request Body:
```{"activityName": "walking", "statisticName": "steps"}```

Response Example:
```{
    "status": "success",
    "data": {
        "n": 3,
        "nModified": 3,
        "ok": 1
    }
}```

5. DELETE	/activities/{name}	Delete one activity I am tracking. This should remove tracked data for that activity as well.

Response Example:
```{
    "status": "success",
    "data": {
        "n": 3,
        "ok": 1
    }
}```

6. POST	/activities/{name}/stats	Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.

Request Body:
```{"activity":"biking", "statisticName": "distance", "statisticValue": 8}, "date_time": "2017-9-2"}```

Response Example:
```{
    "status": "success",
    "data": {
        "__v": 0,
        "activityName": "biking",
        "date_time": "2017-09-06T16:58:07.849Z",
        "statisticName": "distance",
        "statisticValue": 8,
        "_id": "59b0291f1f20c09a4daf97fc"
    }
}```

7. DELETE	/stats/{name}	Remove tracked data for a day.

Request Body:
```{"day": "2017-9-6"}```

Response Example:
```{
    "status": "success",
    "data": {
        "n": 5,
        "ok": 1
    }
}```
