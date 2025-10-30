import { useState } from "react";
import {
  Search,
  Filter,
  Package,
  Edit,
  Trash2,
  AlertTriangle,
  TrendingUp,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Progress } from "../ui/progress";
import { toast } from "sonner";

// ✅ Products data (no types in JSX)
const initialProducts = [
  {
    id: "1",
    name: "Full Cream Milk 1L",
    category: "Milk",
    provider: "Amit Patel Dairy",
    price: 50,
    stock: 450,
    sales: 3450,
    status: "active",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Toned Milk 500ml",
    category: "Milk",
    provider: "Amit Patel Dairy",
    price: 40,
    stock: 320,
    sales: 2890,
    status: "active",
    rating: 4.6,
  },
  {
    id: "3",
    name: "Fresh Curd 500g",
    category: "Curd",
    provider: "Sneha Reddy Dairy",
    price: 40,
    stock: 180,
    sales: 2340,
    status: "active",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Pure Ghee 500ml",
    category: "Ghee",
    provider: "Amit Patel Dairy",
    price: 100,
    stock: 0,
    sales: 1890,
    status: "outOfStock",
    rating: 4.9,
  },
  {
    id: "5",
    name: "Paneer 250g",
    category: "Paneer",
    provider: "Sneha Reddy Dairy",
    price: 60,
    stock: 25,
    sales: 1560,
    status: "lowStock",
    rating: 4.5,
  },
  {
    id: "6",
    name: "Skimmed Milk 1L",
    category: "Milk",
    provider: "Amit Patel Dairy",
    price: 45,
    stock: 380,
    sales: 1230,
    status: "active",
    rating: 4.4,
  },
  {
    id: "7",
    name: "Buttermilk 500ml",
    category: "Curd",
    provider: "Sneha Reddy Dairy",
    price: 30,
    stock: 15,
    sales: 980,
    status: "lowStock",
    rating: 4.3,
  },
  {
    id: "8",
    name: "Cheese Slices 200g",
    category: "Paneer",
    provider: "Amit Patel Dairy",
    price: 80,
    stock: 120,
    sales: 850,
    status: "active",
    rating: 4.6,
  },
];

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category === filterCategory;
    const matchesStatus =
      filterStatus === "all" || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
    toast.success("Product deleted successfully");
  };

  const getStatusBadge = (status) => {
    const colors = {
      active: "bg-emerald-100 text-emerald-700",
      outOfStock: "bg-red-100 text-red-700",
      lowStock: "bg-amber-100 text-amber-700",
    };
    const labels = {
      active: "Active",
      outOfStock: "Out of Stock",
      lowStock: "Low Stock",
    };
    return { color: colors[status], label: labels[status] };
  };

  const productStats = {
    total: products.length,
    active: products.filter((p) => p.status === "active").length,
    lowStock: products.filter((p) => p.status === "lowStock").length,
    outOfStock: products.filter((p) => p.status === "outOfStock").length,
    totalSales: products.reduce((sum, p) => sum + p.sales, 0),
  };

  const categories = ["Milk", "Curd", "Ghee", "Paneer"];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1
          className="text-foreground mb-2"
          style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}
        >
          Product Management
        </h1>
        <p className="text-muted-foreground">
          Oversee all products across providers
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Total Products */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Package className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground mb-1 text-xs">
                Total Products
              </p>
              <p className="text-foreground text-lg font-medium">
                {productStats.total}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Active */}
        <Card className="bg-emerald-50">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
            <p className="text-muted-foreground mb-1 text-xs">Active</p>
            <p className="text-emerald-700 text-lg font-medium">
              {productStats.active}
            </p>
          </CardContent>
        </Card>

        {/* Low Stock */}
        <Card className="bg-amber-50">
          <CardContent className="pt-6 text-center">
            <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-amber-600" />
            <p className="text-muted-foreground mb-1 text-xs">Low Stock</p>
            <p className="text-amber-700 text-lg font-medium">
              {productStats.lowStock}
            </p>
          </CardContent>
        </Card>

        {/* Out of Stock */}
        <Card className="bg-red-50">
          <CardContent className="pt-6 text-center">
            <Package className="w-6 h-6 mx-auto mb-2 text-red-600" />
            <p className="text-muted-foreground mb-1 text-xs">Out of Stock</p>
            <p className="text-red-700 text-lg font-medium">
              {productStats.outOfStock}
            </p>
          </CardContent>
        </Card>

        {/* Total Sales */}
        <Card className="bg-purple-50 col-span-2 sm:col-span-1">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-muted-foreground mb-1 text-xs">Total Sales</p>
            <p className="text-purple-700 text-lg font-medium">
              {productStats.totalSales.toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Product Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Products</CardTitle>
          <CardDescription>
            View and manage products from all providers
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="lowStock">Low Stock</SelectItem>
                <SelectItem value="outOfStock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto -mx-6 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Provider
                    </TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="hidden sm:table-cell">Stock</TableHead>
                    <TableHead className="hidden lg:table-cell">Sales</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredProducts.map((product) => {
                    const statusBadge = getStatusBadge(product.status);
                    const stockPercentage = (product.stock / 500) * 100;
                    return (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center">
                              <Package className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">
                                {product.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {product.category}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product.provider}
                        </TableCell>
                        <TableCell>₹{product.price}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <div className="space-y-1 min-w-[120px]">
                            <p>{product.stock} units</p>
                            <Progress value={stockPercentage} className="h-1.5" />
                          </div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-emerald-600" />
                            <p>{product.sales}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusBadge.color}>
                            {statusBadge.label}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                toast.info(`Viewing ${product.name}`)
                              }
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                toast.info(`Editing ${product.name}`)
                              }
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Low Stock Alert */}
      {productStats.lowStock > 0 && (
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <AlertTriangle className="w-5 h-5" />
              Low Stock Alert
            </CardTitle>
            <CardDescription className="text-amber-700">
              These products need restocking soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {products
                .filter((p) => p.status === "lowStock")
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                        <Package className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {product.provider}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-700 font-semibold text-sm">
                        {product.stock} units left
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Restock needed
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
