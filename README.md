# Ph_Grapher - A Photographer services portfolio

## Live Website https://ph-grapher.web.app//
## Server or API Link https://ph-grapher-backend.vercel.app/

Ph_Grapher is a photographer services portfolio website, user can book schedule the photographer on give review on photographer services

### Few thing about our site
- A user friendly user interface.
- A Nice Header Banner
- Organized Services on service section.
- User Profile system for update there name and photo.
- Shortcut login with Google login system.
- Blog section for share new thing.
- Have a nice footer section for navigate user where they want to go.
- Services details page
- User make services or review on our site
- User can delete or update their review
- User can see other review on service details section, but can't update or delete
- Newsletter Section 


### Technology used in this project
- HTML
- Tailwind
- DaisyUI
- HyperUI
- Javascript
- React
- Firebase
- react-router-dom
- swiperjs
- react-hot-toast
- fontawesome
- react-hook-form
- react-photo-view
- sweetAlert2

#

### API Data used in this site
# Ph_Grapher Server OR API

### Get All Services Data with this api link - GET
- https://ph-grapher-backend.vercel.app/services?limit={}

### Get Only a user create services list - GET
- https://ph-grapher-backend.vercel.app/my-service?uid={uid}

### Get a single service by id - GET
- https://ph-grapher-backend.vercel.app/service/:id

### Get all reviews by service id - GET
- https://ph-grapher-backend.vercel.app/reviews?service_id={service_id}

### Get all reviews created by currentUser by uid - GET
- https://ph-grapher-backend.vercel.app/my-review?uid={uid}

### Get all blogs post - GET 
- https://ph-grapher-backend.vercel.app/blogs

### Get all testimonials - GET
- https://ph-grapher-backend.vercel.app/testimonials

### Create A Service Data - POST
- https://ph-grapher-backend.vercel.app/services?uid={uid}

### Post A Review - POST
- https://ph-grapher-backend.vercel.app/review?uid={uid}

### Delete a single review created by currentUser by uid and review id - DELETE
- https://ph-grapher-backend.vercel.app/my-review-delete?uid={uid}&id={id}

### Update a single review created by currentUser by uid and review id - PATCH
- https://ph-grapher-backend.vercel.app/my-review-update?uid={uid}&id={id}

### Get JWT TOKEN for user authorization - POST
- https://ph-grapher-backend.vercel.app/jwt