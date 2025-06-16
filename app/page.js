"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Upload,
  Download,
  Palette,
  Layers,
  RotateCcw,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
// import { fabric } from "fabric";
// import {  Rect } from "fabric";
import { mockPatterns, mockProducts } from "@/utils/config";
// import Home from "./App";
// import dynamic from "next/dynamic";
// import AppCreative from "./creative/page";

import { useRouter } from "next/navigation";

// import CustomizePage from "./(DashboardLayout)/dashboard/customize/page";

// const AppHome = dynamic(() => import("./App"), { ssr: false });

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customDesign, setCustomDesign] = useState(null);
  const canvasRef = useRef(null);
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const [selectedSize, setSelectedSize] = useState("yard");
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();

  // Fabric size details with dimensions
  const sizeDetails = {
    yard: {
      name: "Yard",
      dimensions: { in: "36 × 45 in", cm: "91.4 × 114.3 cm" },
      zoom: 1,
      description: "Standard fabric yard perfect for dresses and outfits",
    },
    meter: {
      name: "Meter",
      dimensions: { in: "39.4 × 45 in", cm: "100 × 114.3 cm" },
      zoom: 0.9,
      description: "Metric measurement ideal for precise tailoring",
    },
    fatQuarter: {
      name: "Fat Quarter",
      dimensions: { in: "18 × 22 in", cm: "45.7 × 55.9 cm" },
      zoom: 1.2,
      description: "Quarter yard cut wider, great for accessories",
    },
    swatch: {
      name: "Swatch",
      dimensions: { in: "6 × 6 in", cm: "15.2 × 15.2 cm" },
      zoom: 1.8,
      description: "Small sample to check colors and patterns",
    },
  };

  // Initialize Fabric.js canvas for design customization
  // useEffect(() => {
  //   const initCanvas = async () => {
  //     const fabric = (await import('fabric')).fabric;
  //     const canvas = new fabric.Canvas(canvasRef.current, {
  //       width: 400,
  //       height: 500,
  //       backgroundColor: '#ffffff'
  //     });
  //     setFabricCanvas(canvas);
  //   };

  //   if (canvasRef.current && !fabricCanvas) {
  //     initCanvas();
  //   }
  // }, []);

  //   useEffect(() => {
  //     if (canvasRef.current) {
  //       // const initCanvas = () => {
  //       const canvas = new Canvas(canvasRef.current, {
  //         width: 400,
  //         height: 600,
  //       });

  //       console.log("Canvas initialized", canvas);

  //       canvas.backgroundColor = "#ffffff";
  //       canvas.renderAll();
  //       setFabricCanvas(canvas);
  //       // };

  //       console.log("checking canvas:", canvas);

  //       // initCanvas();
  //     }

  //     // Cleanup function to dispose of the canvas when component unmounts
  //     // return () => {
  //     //     fabricCanvas.dispose();
  //     //     // setFabricCanvas(null);
  //     // };
  //   }, [canvasRef, fabricCanvas]);

  //   console.log("Canvas initialized", fabricCanvas);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, id: Date.now() }]);
  };

  const viewProductDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage("productDetails");
  };

  //   const startCustomization = (product) => {
  //     setSelectedProduct(product);
  //     setCurrentPage("customize");
  //   };

  //   const addPattern = (pattern) => {
  //     if (fabricCanvas) {
  //       const patternRect = new Rect({
  //         left: 100,
  //         top: 100,
  //         width: 100,
  //         height: 100,
  //         fill: pattern.preview,
  //         stroke: "#333",
  //         strokeWidth: 1,
  //       });
  //       fabricCanvas.add(patternRect);
  //     }
  //   };

  //   const saveCustomDesign = () => {
  //     if (fabricCanvas) {
  //       const designData = fabricCanvas.toJSON();
  //       setCustomDesign(designData);
  //       alert("Design saved! Ready for production.");
  //     }
  //   };

  // Landing Page Component

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400">
      {/* Navigation */}
      <nav className="bg-black/90  backdrop-blur-md  fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-yellow-400">AnkaraHub</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-yellow-400 transition">
                Shop
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition">
                Design
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition">
                About
              </a>
            </div>
            <button
              onClick={() => setCurrentPage("auth")}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold pt-[100px] text-white mb-6 drop-shadow-lg">
            Design Your Dream <span className="text-yellow-300">Ankara</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create custom African attire with our 3D design studio. From traditional
            patterns to modern styles - bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setCurrentPage("auth")}
              className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition transform hover:scale-105"
            >
              Start Designing
            </button>
            <button
              onClick={() => setCurrentPage("auth")}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition"
            >
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-white/10 backdrop-blur-md py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Design Studio</h3>
              <p>
                Drag & drop patterns, colors, and elements to create unique designs
              </p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3D Preview</h3>
              <p>See your design on realistic 3D garment models before ordering</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bulk Production</h3>
              <p>
                Your designs printed in bulk and sold to wider African fashion market
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Auth Page Component
  const AuthPage = () => (
    <div className="min-h-screen px-[30px] bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome to AnkaraHub
        </h2>
        <div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(true);
              setCurrentPage("dashboard");
            }}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Sign In
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {"Don't have an account? "}
            <span className="text-orange-500 cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-orange-500">AnkaraHub</div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <User className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back!</h1>
          <p className="text-gray-600">
            Discover beautiful Ankara designs or create your own
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div
            onClick={() => {
              router.push("/creative");
            }}
            className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-8 text-white cursor-pointer hover:scale-105 transition transform"
          >
            <Palette className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Create Custom Design</h3>
            <p>Use our 3D design studio to create unique Ankara patterns</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-8 text-white cursor-pointer hover:scale-105 transition transform">
            <ShoppingCart className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Browse Collection</h3>
            <p>Shop from our curated collection of premium Ankara designs</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Fabrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">by {product.designer}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-orange-500">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => viewProductDetails(product)}
                      className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Product Details Page Component
  const ProductDetailsPage = () => {
    const [currentImage, setCurrentImage] = useState(selectedProduct.image);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
      // Update zoom level when size changes
      setZoomLevel(sizeDetails[selectedSize].zoom);
    }, [selectedSize]);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <button
                onClick={() => setCurrentPage("dashboard")}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Marketplace
              </button>
              <div className="text-2xl font-bold text-orange-500">
                Product Details
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-600" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </div>
                <User className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </nav>

        {/* Product Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              </div>

              {/* Thumbnail Slider */}
              <div className="flex space-x-2 overflow-x-auto py-2">
                {[selectedProduct.image, ...selectedProduct.otherImages].map(
                  (img, idx) => (
                    <div
                      key={idx}
                      className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                        currentImage === img
                          ? "border-orange-500"
                          : "border-transparent"
                      }`}
                      onClick={() => setCurrentImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedProduct.name}
              </h1>
              <p className="text-gray-600 mb-4">
                Designed by{" "}
                <span className="font-semibold">{selectedProduct.designer}</span>
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                <p className="text-gray-800">{selectedProduct.description}</p>
              </div>

              {/* Size Selection Tabs */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Fabric Size</h3>
                <div className="flex border-b border-gray-200">
                  {Object.keys(sizeDetails).map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                        selectedSize === size
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {sizeDetails[size].name}
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>{sizeDetails[selectedSize].description}</p>
                  <p className="mt-1">
                    Dimensions: {sizeDetails[selectedSize].dimensions.in} (
                    {sizeDetails[selectedSize].dimensions.cm})
                  </p>
                </div>
              </div>

              {/* Price and Add to Cart */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    ${selectedProduct.price}
                  </span>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                    >
                      -
                    </button>
                    <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToCart({
                      ...selectedProduct,
                      size: selectedSize,
                      quantity,
                      dimensions: sizeDetails[selectedSize].dimensions,
                    });
                    setCurrentPage("dashboard");
                  }}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage />;
      case "auth":
        return <AuthPage />;
      case "dashboard":
        return <Dashboard />;
      case "customize":
        // router.push("/creative");
        // return (
        //   <AppCreative />
        //   //   <CustomizePage
        //   //     canvasRef={canvasRef}
        //   //     fabricCanvas={fabricCanvas}
        //   //     addPattern={addPattern}
        //   //     saveCustomDesign={saveCustomDesign}
        //   //     selectedSize={selectedSize}
        //   //     setSelectedSize={setSelectedSize}
        //   //     sizeDetails={sizeDetails}
        //   //     selectedProduct={selectedProduct}
        //   //     setSelectedProduct={setSelectedProduct}
        //   //     setCurrentPage={setCurrentPage}
        //   //     customDesign={customDesign}
        //   //     setCustomDesign={setCustomDesign}
        //   //     cartItems={cartItems}
        //   //     setCartItems={setCartItems}
        //   //   />
        // );
        return null;
      case "productDetails":
        return <ProductDetailsPage />;
      default:
        return <LandingPage />;
    }
  };

  return <div className="font-sans">{renderPage()}</div>;
};

export default App;
