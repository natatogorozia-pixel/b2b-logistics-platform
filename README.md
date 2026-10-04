Markdown
# 🚚 B2B Logistics Platform

**B2B / B2C ლოგისტიკური და ტრანსპორტირების პლატფორმა**  
პროექტი შექმნილია ტვირთის გამგზავნებსა (ფიზიკური და იურიდიული პირები) და გადამზიდავებს (მძღოლები) შორის პროცესების გაციფრულებისა და ოპტიმიზაციისთვის.

---

## 🛠 ტექნოლოგიური სტეკი

* **Frontend:** React 18 (TypeScript), Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router v6
* **Icons:** Lucide-React Icons
* **Form & Validation:** React Hook Form, Zod
* **Version Control:** Git, GitHub, GitHub Desktop

---

## 📁 პროექტის სტრუქტურა (`src/`)

```text
src/
├── assets/             # იმიჯები და გლობალური მედია ფაილები
├── components/         # გლობალური UI და საერთო კომპონენტები
│   ├── ui/             # Button, Input, Modal, Badge, Card
│   └── common/         # Navbar, Footer, Sidebar, ProtectedRoute
├── layouts/            # MainLayout, DashboardLayout
├── pages/              # Home, Login, Register, Shipments, Dashboard
├── services/           # API მოთხოვნები და ბაზასთან მუშაობა
├── types/              # TypeScript ინტერფეისები (user.ts, shipment.ts)
├── hooks/              # Custom React Hooks (useAuth, useShipments)
└── utils/              # დამხმარე ფუნქციები და Zod სქემები
🎨 UX & Interaction Design Document
1. მომხმარებლის გზა (User Flow - Cargo Booking)
ავტორიზაცია: მძღოლი შედის სისტემაში (/login) ან გადადის /shipments გვერდზე.

ძებნა & ფილტრაცია: ირჩევს ქალაქს/ტვირთის ტიპს (ავტომატური განახლება).

დეტალების ნახვა: აჭერს ShipmentCard-ს და ეცნობა დეტალებს.

დაჯავშნა: აჭერს "Book Shipment" -> დასტური.

გადამისამართება: ავტომატური გადასვლა აქტიურ შეკვეთებში (/driver/jobs).

2. დაბალი სიზუსტის ვაიერფრეიმები (Low-Fi Wireframes)
ტვირთების სიის გვერდი (/shipments)
Plaintext
+-----------------------------------------------------------------------+
|  LOGISTICS LOGO     [Shipments]  [My Jobs]              (User Avatar) |
+-----------------------------------------------------------------------+
|  [ SEARCH & FILTER BAR ]                                              |
|  [From: City v] [To: City v] [Vehicle Type v] [ Date ]  [Search Q]    |
+-----------------------------------------------------------------------+
|  Available Shipments (12)                                             |
|                                                                       |
|  +-----------------------------------------------------------------+  |
|  | [Badge: Standard]  Tbilisi -> Batumi              [ 1,200 GEL ] |  |
|  | Weight: 2,500 kg | Date: Oct 5, 2026                            |  |
|  | Required: Van/Truck                                             |  |
|  |                                                [ View & Book ]  |  |
|  +-----------------------------------------------------------------+  |
+-----------------------------------------------------------------------+
3. ინტერაქციული მდგომარეობები (States & Feedback)
Loading State: ჩატვირთვისას გამოიყენება Skeleton Loaders და Buttons-ზე Spinner ინდიკატორები.

Empty State: ძებნის ცარიელი შედეგისას გამოჩნდება ილუსტრაცია ტექსტით "ტვირთი არ მოიძებნა" და ღილაკი "ფილტრების გასუფთავება".

Validation Feedback: React Hook Form + Zod-ით უზრუნველყოფილია Real-time inline შეცდომები (წითელი ჩარჩოები და ტექსტი) და Toast შეტყობინებები.

4. Mobile-First & Responsiveness
Navbar: დესკტოპზე ჰორიზონტალური, მობილურზე — Hamburger drawer.

Filters: მობილურზე გარდაიქმნება Filter Modal/Drawer-ად.

Cards Grid: 3-სვეტიანი ბადე მობილურზე ხდება 1-სვეტიანი ვერტიკალური სია.

🔗 მნიშვნელოვანი ბმულები
GitHub Repository: https://github.com/natatogorozia-pixel/b2b-logistics-platform

Kanban Project Board: https://github.com/users/natatogorozia-pixel/projects/6