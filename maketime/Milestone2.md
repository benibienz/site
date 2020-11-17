# Milestone 2

Note: some terminology has changed between mockup and static app. Namely:

- Calendar -> Schedule
- (hours) Budget -> Target (hours)

## Representation of state

There are two main components in this app: the Activity List and the Schedule. These components have their own local states but some state must be shared between them.

### Shared State

- Array of activity objects with the following data:
  - Name
  - Target hours
  - Hours scheduled

This array can be used to generate table rows (Activity List) and calendar events (Schedule). The Total and Remaining hours and the Scheduled hours column can also be directly caclulated from this array.

### Activity List

- Target hours field text for each activity
- "Add new activity" dialog field text

### Schedule

- `react-big-calendar` may have internal state to handle events and drag-n-drop functionality

### Material UI components

- TextFields and Buttons have local states such as 'focused' and 'selected' for accessiblity
