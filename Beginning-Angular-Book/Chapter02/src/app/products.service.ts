import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts() {
    return [
    { 
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 4,
        numOfReviews: 2
    },
    { 
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 2,
        numOfReviews: 12          
    },
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    },
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=4",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    }
    ,
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=5",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    }
    ,
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=6",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    }
    ,
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=7",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    }
    ,
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=8",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    }
    ,
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=9",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    }
    ,
    {                 
        imageUrl: "http://loremflickr.com/150/150?random=10",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
        rating: 5,
        numOfReviews: 2
    }
  
  ];
}    
}
