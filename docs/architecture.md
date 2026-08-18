# Portfolio architecture

The portfolio uses a client-side React application with a route layer, presentational components, styles, and static assets. The design favors simple composition over unnecessary service layers.

## Design choices

The route layer keeps page responsibilities explicit. Components remain responsible for individual visual sections, while shared styles provide consistency across the application. Build validation runs through the repository workflow to catch linting or bundling regressions before deployment.
