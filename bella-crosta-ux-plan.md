# Bella Crosta UX Plan

## 1. Full Sitemap

### Customer Website
- Home
- Menu
- Product Details
- Cart
- Checkout / WhatsApp Order Confirmation
- Order Tracking
- Pickup Reservation
- Offers
- Gallery
- About / Our Story
- Contact

### Admin Portal
- Admin Dashboard
- Orders Management
- Menu Management
- Offers Management
- Reservations Management
- Inventory Management
- Customers Management
- Reviews Management
- Reports and Analytics
- Branch and Opening Hours Settings
- Delivery Zones Settings
- WhatsApp Orders and Inquiries

## 2. Main User Journeys

### Fast WhatsApp Order
1. User lands on Home.
2. User sees open/closed status.
3. User taps View Menu.
4. User filters or searches products.
5. User taps Add or Quick View.
6. User customizes size, crust, toppings, quantity, and notes.
7. User reviews cart.
8. User chooses delivery or pickup.
9. User confirms checkout.
10. Site generates a formatted WhatsApp message and redirects to WhatsApp.

### Direct Product Order
1. User opens a product from featured pizzas or menu.
2. User reviews ingredients, allergens, prep time, and price.
3. User selects options.
4. User taps Order Directly on WhatsApp.
5. WhatsApp opens with one-item order details.

### Pickup Reservation
1. User taps Reserve Pickup.
2. User selects an available date and time slot.
3. User enters name, phone, and notes.
4. Site validates closed days and unavailable slots.
5. User confirms via WhatsApp.

### Location Visit
1. User opens Contact or footer location.
2. User checks opening hours and status.
3. User taps Get Directions.
4. Google Maps opens with the restaurant address.

### Admin Order Handling
1. Admin opens dashboard.
2. Admin reviews live order queue.
3. Admin opens order details drawer.
4. Admin updates status from New to Accepted to Preparing to In the Oven to Ready.
5. Admin contacts customer via WhatsApp if needed.
6. Admin completes or cancels with a reason.

## 3. Page-by-Page UX Structure

### Home
- Header with navigation, WhatsApp action, and mobile menu.
- Opening status block: Open now / Closed now and next opening time.
- Primary actions: View Menu, Order on WhatsApp, Reserve Pickup.
- Featured pizzas with direct add or quick view.
- Best sellers.
- Current offers.
- Short brand story.
- Reviews preview.
- Location and contact block.
- Footer with hours, social links, and phone.

### Menu
- Category tabs: Signature Pizzas, Classics, Specials, Offers, Drinks, Desserts.
- Search input.
- Filters: Popular, Best Seller, New, Vegetarian, Spicy, Price Range.
- Product cards with image, name, short description, price, Add, Quick View.
- Desktop sticky cart summary.
- Mobile floating cart button.
- Empty, loading, and error states.

### Product Details
- Product image.
- Name, description, ingredients, allergens, price.
- Size selector: Small, Medium, Large.
- Crust selector: Classic, Neapolitan, Thin and Crispy.
- Extra toppings: Extra Cheese, Mushrooms, Olives, Beef Bacon, Burrata.
- Quantity selector.
- Special notes.
- Estimated preparation time.
- Add to Cart.
- Order Directly on WhatsApp.
- Validation for required selectors.

### Cart
- Selected items list.
- Edit item, remove item, quantity controls.
- Per-item notes.
- General order note.
- Delivery or pickup option.
- Coupon field.
- Subtotal, estimated prep time, and total.
- Continue to Checkout.
- Empty cart state with Back to Menu.

### Checkout / WhatsApp Confirmation
- Customer name.
- Phone number.
- Delivery or pickup selection.
- Address field for delivery.
- Pickup time field for pickup.
- Order notes.
- Payment placeholder: Cash on Delivery or Pay at Pickup.
- Confirm Order.
- Generated WhatsApp message preview.
- Redirect to WhatsApp.
- Return confirmation screen.

### Order Tracking
- Order number field.
- Estimated time.
- Current status.
- Timeline: Received, Accepted, Preparing, In the Oven, Ready / Out for Delivery, Delivered / Picked Up.
- Contact restaurant button.
- Map/location placeholder for delivery.
- Fallback if tracking is unavailable.

### Pickup Reservation
- Date selector.
- Time slot selector.
- Guest count if dine-in is supported.
- Customer name and phone.
- Notes.
- Closed-day handling.
- Unavailable slot state.
- Confirm via WhatsApp.

### Offers
- Offer cards.
- Combo meals, family deals, limited-time offers.
- Add offer to cart.
- Offer conditions.
- Expired offer state.

### Gallery
- Instagram/TikTok-style media grid.
- Categories: Food, Oven, Behind the Scenes, Customers.
- Image/video preview.
- Social follow CTA.

### About / Our Story
- Brand tagline.
- Short story.
- Craft and crust explanation.
- Local identity.
- Link to menu and WhatsApp.

### Contact
- Click-to-call.
- Click-to-WhatsApp.
- Social links.
- Address.
- Opening hours and open/closed state.
- Map.
- Get Directions.
- Inquiry form.

## 4. Components List

- Header navigation.
- Mobile bottom navigation.
- Opening status badge.
- Primary action button.
- WhatsApp button.
- Product card.
- Quick view modal or bottom sheet.
- Product option selector.
- Quantity stepper.
- Toppings checklist.
- Cart drawer.
- Sticky cart summary.
- Floating mobile cart button.
- Checkout form.
- WhatsApp message preview.
- Order status timeline.
- Reservation calendar.
- Time slot picker.
- Offer card.
- Gallery media tile.
- Review card.
- Map block.
- Admin sidebar.
- Admin KPI card.
- Orders table.
- Order details drawer.
- Status dropdown.
- Inventory alert.
- Chart block.
- Toast notification.
- Loading skeleton.
- Empty state.
- Error state.

## 5. Major Component States

### Product Card
- Default.
- Hover/focus.
- Loading skeleton.
- Unavailable.
- Added to cart.
- Offer applied.
- Error adding item.

### Cart
- Empty.
- Has items.
- Item editing.
- Coupon valid.
- Coupon invalid.
- Checkout blocked by missing info.

### Checkout Form
- Empty.
- Partially completed.
- Validation errors.
- Delivery selected.
- Pickup selected.
- Generating WhatsApp message.
- Redirected to WhatsApp.

### Opening Status
- Open now.
- Closing soon.
- Closed now.
- Opens today.
- Opens next Thursday.
- Holiday/manual closure.

### Reservation Slot
- Available.
- Selected.
- Unavailable.
- Closed day.
- Already reserved.

### Admin Order
- New.
- Accepted.
- Preparing.
- In the oven.
- Ready.
- Out for delivery.
- Completed.
- Cancelled.

## 6. Customer Order Flow

1. Browse menu.
2. Search/filter if needed.
3. Open product details or quick view.
4. Select size, crust, extras, quantity.
5. Add item to cart.
6. Review cart and totals.
7. Choose delivery or pickup.
8. Enter customer details.
9. Confirm order.
10. Generate WhatsApp message:
   - Customer name.
   - Phone.
   - Order items.
   - Sizes.
   - Crusts.
   - Extra toppings.
   - Notes.
   - Delivery or pickup option.
   - Address or pickup time.
   - Total price.
11. Redirect to WhatsApp.
12. Show return confirmation when user comes back.

## 7. Admin Management Flow

1. Admin logs in.
2. Dashboard shows live queue and daily performance.
3. New WhatsApp or site orders appear in Orders Management.
4. Admin confirms or cancels.
5. Kitchen status updates through each stage.
6. Customer can be contacted from the order drawer.
7. Completed orders update analytics.
8. Low inventory alerts appear if ingredients are depleted.
9. Admin updates menu availability and offers when needed.

## 8. Mobile UX Flow

- Sticky bottom navigation: Home, Menu, Cart, WhatsApp.
- Product details can open as a bottom sheet.
- Floating cart button shows item count.
- Checkout is split into short sections.
- Large tap targets for Add, Quantity, WhatsApp, and Call.
- Open/closed state must be visible before ordering.
- Cart summary should not hide product actions.
- WhatsApp action remains available from every page.

## 9. Edge Cases

- Restaurant is closed when user tries to order.
- User selects pickup on a closed day.
- Product is unavailable after being added to cart.
- User leaves checkout and returns later.
- WhatsApp does not open.
- Empty menu response.
- Failed image loading.
- Coupon expired.
- Invalid phone number.
- Missing delivery address.
- Missing pickup time.
- Admin cancels an order after it was accepted.
- Inventory is too low for a selected item.
- Tracking number not found.
- Multiple orders from same phone.

## 10. Suggested Frontend Data Structure

```js
const restaurant = {
  name: "Bella Crosta",
  tagline: "French Passion. Egyptian Heart. Italian Crust.",
  phone: "+20 10 31252519",
  whatsapp: "201031252519",
  instagram: "bella.crosta.pizza",
  tiktok: "themigofit",
  address: "18 Doctor Anwar Al Mofty Street, Obour, Qalyubia, Egypt",
  hours: [
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: null, close: null },
    { day: "Wednesday", open: null, close: null },
    { day: "Thursday", open: "16:00", close: "23:00" },
    { day: "Friday", open: "16:00", close: "23:00" },
    { day: "Saturday", open: "16:00", close: "23:00" },
    { day: "Sunday", open: "16:00", close: "23:00" },
  ],
};

const menuItem = {
  id: "pepperoni",
  name: "Pepperoni",
  category: "Classics",
  description: "Tomato sauce, mozzarella, basil, and pepperoni.",
  price: 330,
  image: "/assets/bella-crosta/pizza_pepperoni_transparent.png",
  tags: ["popular"],
  available: true,
  prepMinutes: 20,
  sizes: [
    { id: "small", name: "Small", priceDelta: -60 },
    { id: "medium", name: "Medium", priceDelta: 0 },
    { id: "large", name: "Large", priceDelta: 80 },
  ],
  crusts: ["Classic", "Neapolitan", "Thin and Crispy"],
  extras: [
    { id: "extra-cheese", name: "Extra Cheese", price: 45 },
    { id: "mushrooms", name: "Mushrooms", price: 35 },
    { id: "olives", name: "Olives", price: 25 },
    { id: "beef-bacon", name: "Beef Bacon", price: 60 },
    { id: "burrata", name: "Burrata", price: 90 },
  ],
};

const cartItem = {
  itemId: "pepperoni",
  size: "medium",
  crust: "Neapolitan",
  extras: ["extra-cheese"],
  quantity: 1,
  notes: "",
};

const order = {
  id: "BC-1001",
  customer: { name: "", phone: "" },
  fulfillment: { type: "pickup", address: "", pickupTime: "" },
  items: [],
  notes: "",
  coupon: "",
  subtotal: 0,
  total: 0,
  status: "received",
  createdAt: "",
};
```

## 11. Implementation Tasks

### Phase 1 - Customer MVP
- Build data-driven menu from a single menu array.
- Add open/closed status calculation.
- Add product quick view.
- Add cart state with localStorage.
- Add checkout form.
- Generate full WhatsApp order messages.
- Add Google Maps directions button.
- Add mobile bottom navigation.
- Add loading, empty, and error states.

### Phase 2 - Conversion Features
- Add search and filters.
- Add offers page and offer-to-cart logic.
- Add pickup reservation flow.
- Add order tracking placeholder.
- Add reviews section.
- Add gallery preview and social CTA.

### Phase 3 - Admin MVP
- Add admin route and dashboard layout.
- Add orders list and status updates.
- Add menu management CRUD.
- Add offer management.
- Add reservation management.
- Add inventory list with low-stock alerts.

### Phase 4 - Operations and Analytics
- Add reports dashboard.
- Add customer records.
- Add reviews management.
- Add opening hours settings.
- Add delivery zones settings.
- Add WhatsApp inquiries management.

## Current Menu Prices

- Marinara - 260 EGP
- Beef Bacon - 390 EGP
- Pastrami - 450 EGP
- Margherita - 290 EGP
- Smoked Turkey with Creamy Sauce - 330 EGP
- Pepperoni - 330 EGP
