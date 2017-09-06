# Activity Tracking API

Endpoints
1. GET	/activities	Show a list of all activities I am tracking, and links to their individual pages
2. POST	/activities	Create a new activity for me to track.
3. GET	/activities/{name}	Show information about one activity I am tracking, and give me the data I have recorded for that activity.
4. PUT	/activities/{name}	Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
5. DELETE	/activities/{name}	Delete one activity I am tracking. This should remove tracked data for that activity as well.
6. POST	/activities/{name}/stats	Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.
7. DELETE	/stats/{name}	Remove tracked data for a day.
