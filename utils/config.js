import {
  Upload,
  Download,
  Palette,
  Layers,
  RotateCcw,
  ArrowLeft,
  Plus,
  Save,
  Grid,
  Image as ImageIcon,
  Trash2,
  Edit3,
  CheckCircle,
  X,
  Tag,
  FileText,
  Camera,
  Move,
  Square,
  Circle,
  Triangle,
  Star,
  Hexagon,
  Zap,
} from "lucide-react";

export const mockProducts = [
  { 
    id: 1, 
    name: 'Geometric Ankara', 
    designer: 'Ngozi Designs', 
    price: 45, 
    image: 'https://images.unsplash.com/photo-1660845683010-63e7422420b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhJTIwZmFicmljfGVufDB8fDB8fHww', 
    category: 'Premium Ankara',
    description: 'Vibrant geometric pattern with traditional African motifs',
    otherImages: [
      'https://images.unsplash.com/photo-1660845683010-63e7422420b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhJTIwZmFicmljfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1701964621005-57f14066187e?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1672422787284-a5d61c915066?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8'
    ]
  },
  { 
    id: 2, 
    name: 'African Sunset', 
    designer: 'Kente Masters', 
    price: 38, 
    image: 
      'https://images.unsplash.com/photo-1702631779276-338ee5aed73a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8', 
    category: 'Classic Kente',
    description: 'Warm sunset colors with intricate woven patterns',
    otherImages: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1672422787284-a5d61c915066?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8', 
      'https://images.unsplash.com/photo-1701964621005-57f14066187e?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: 3, 
    name: 'Tribal Harmony', 
    designer: 'Adinkra Arts', 
    price: 42, 
    image: 'https://images.unsplash.com/photo-1701964621005-57f14066187e?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Modern Ankara',
    description: 'Contemporary tribal patterns with symbolic meanings',
    otherImages: [
     'https://images.unsplash.com/photo-1660845683010-63e7422420b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhJTIwZmFicmljfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1701964621005-57f14066187e?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1672422787284-a5d61c915066?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8'
    ]
  },
  { 
    id: 4, 
    name: 'Golden Adire', 
    designer: 'Yoruba Textiles', 
    price: 55, 
    image: 'https://images.unsplash.com/photo-1672422787284-a5d61c915066?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8', 
    category: 'Luxury Adire',
    description: 'Hand-dyed indigo with golden accents, traditional Yoruba technique',
    otherImages: [
     'https://images.unsplash.com/photo-1660845683010-63e7422420b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhJTIwZmFicmljfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1701964621005-57f14066187e?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1672422787284-a5d61c915066?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8'
    ]
  }
];



export const mockPatterns = [
  { id: 1, name: 'Geometric Waves', preview: 'linear-gradient(45deg, #ff6b35, #f7931e)' },
  { id: 2, name: 'Tribal Circles', preview: 'radial-gradient(circle, #8b4513, #daa520)' },
  { id: 3, name: 'Floral Burst', preview: 'linear-gradient(135deg, #ff1493, #ffd700)' },
  { id: 4, name: 'Abstract Lines', preview: 'linear-gradient(90deg, #4b0082, #ff69b4)' },
];













export const toolbarButtons = [
  {
    value: "select",
    label: "Select tool",
    icon: "/assets/select.svg",
    isdropdown: false,
  },
  {
    value: "pan",
    label: "Pan tool",
    icon: "/assets/hand.svg",
    isdropdown: false,
  },
  {
    value: "elements",
    label: "Elements tool",
    icon: "/assets/elements.svg",
    isdropdown: true,
  },
  {
    value: "text",
    label: "Text tool",
    icon: "/assets/text.svg",
    isdropdown: false,
  },
  {
    value: "delete",
    label: "Delete",
    icon: "/assets/delete.svg",
    isdropdown: false,
  },
  {
    value: "reset",
    label: "Reset",
    icon: "/assets/reset.svg",
    isdropdown: false,
  },
  // {
  //   value: "comments",
  //   label: "Comments tool",
  //   icon: "/assets/comments.svg",
  //   isdropdown: false,
  // },
];

export const elements = [
  {
    icon: "/assets/rectangle.svg",
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: "/assets/circle.svg",
    name: "Circle",
    value: "circle",
  },
  {
    icon: "/assets/triangle.svg",
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: "/assets/line.svg",
    name: "Line",
    value: "line",
  },
  {
    icon: "/assets/image.svg",
    name: "Image",
    value: "image",
  },
  {
    icon: "/assets/freeform.svg",
    name: "Free Drawing",
    value: "freeform",
  },
];

export const modes = {
  freeform: "freeform",
  rectangle: "rectangle",
  triangle: "triangle",
  circle: "circle",
  line: "line",
  reset: "reset",
  delete: "delete",
  text: "text",
  image: "image",
  select: "select",
  pan: "pan",
  comments: "comments",
};

export const groupingOptions = [
  { value: "group", label: "Group", icon: "/assets/group.svg" },
  { value: "ungroup", label: "Ungroup", icon: "/assets/ungroup.svg" },
];

export const alignmentOptions = [
  { value: "left", label: "Align Left", icon: "/assets/align-left.svg" },
  {
    value: "horizontalCenter",
    label: "Align Horizontal Center",
    icon: "/assets/align-horizontal-center.svg",
  },
  { value: "right", label: "Align Right", icon: "/assets/align-right.svg" },
  { value: "top", label: "Align Top", icon: "/assets/align-top.svg" },
  {
    value: "verticalCenter",
    label: "Align Vertical Center",
    icon: "/assets/align-vertical-center.svg",
  },
  { value: "bottom", label: "Align Bottom", icon: "/assets/align-bottom.svg" },
];

export const fontFamilyOptions = [
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
];

export const fontSizeOptions = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "36",
    label: "36",
  },
];

export const fontWeightOptions = [
  {
    value: "normal",
    label: "Normal",
  },
  {
    value: "semibold",
    label: "Semibold",
  },
  {
    value: "bold",
    label: "Bold",
  },
];

export const layersData = [
  {
    icon: "/assets/rectangle.svg",
    text: "Group #1",
  },
  {
    icon: "/assets/rectangle.svg",
    text: "Group #2",
  },
  {
    icon: "/assets/rectangle.svg",
    text: "Group #3",
  },
  {
    icon: "/assets/rectangle.svg",
    text: "Group #4",
  },
];

export const CURSOR_COLORS = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
];

export const dropdownShapes = [
  "rectangle",
  "circle",
  "line",
  "triangle",
  "freeform",
];





export  const templates = [
    {
      id: "yard-2h",
      name: "1 Yard - Horizontal Split",
      description: "Up to 2 designs horizontally arranged",
      layout: "horizontal",
      designs: 2,
      dimensions: '36" × 45"',
      price: "$12.99",
      preview: "linear-gradient(to right, #ff6b35 50%, #f7931e 50%)",
    },
    {
      id: "yard-2v",
      name: "1 Yard - Vertical Split",
      description: "Up to 2 designs vertically arranged",
      layout: "vertical",
      designs: 2,
      dimensions: '36" × 45"',
      price: "$12.99",
      preview: "linear-gradient(to bottom, #ff6b35 50%, #f7931e 50%)",
    },
    {
      id: "yard-42",
      name: "1 Yard - Cheater Quilt",
      description: "Up to 42 small designs for quilting",
      layout: "grid",
      designs: 42,
      dimensions: '36" × 45"',
      price: "$15.99",
      preview:
        "repeating-conic-gradient(from 0deg, #ff6b35, #f7931e, #ffcd3c, #ff6b35)",
    },
  ];

  // Fabric types
  export const fabricTypes = [
    {
      id: "cotton",
      name: "Cotton Canvas",
      description: "Durable, perfect for bags and upholstery",
      price: 12.99,
      texture: "Cotton",
    },
    {
      id: "silk",
      name: "Silk Charmeuse",
      description: "Luxurious and smooth, ideal for scarves",
      price: 24.99,
      texture: "Silk",
    },
    {
      id: "linen",
      name: "Pure Linen",
      description: "Natural and breathable, great for clothing",
      price: 18.99,
      texture: "Linen",
    },
  ];

  // Design elements
  export const designElements = {
    colors: [
      "#FF6B35",
      "#F7931E",
      "#FFCD3C",
      "#35A7FF",
      "#8B5CF6",
      "#10B981",
      "#EF4444",
      "#F59E0B",
      "#6366F1",
      "#EC4899",
      "#000000",
      "#FFFFFF",
      "#64748B",
      "#F1F5F9",
      "#7C3AED",
    ],
    gradients: [
      { name: "Sunset", value: "linear-gradient(45deg, #FF6B35, #F7931E)" },
      { name: "Ocean", value: "linear-gradient(135deg, #667eea, #764ba2)" },
      { name: "Pink", value: "linear-gradient(45deg, #f093fb, #f5576c)" },
    ],
    shapes: [
      { id: "circle", name: "Circle", icon: Circle },
      { id: "square", name: "Square", icon: Square },
      { id: "triangle", name: "Triangle", icon: Triangle },
      { id: "star", name: "Star", icon: Star },
      { id: "hexagon", name: "Hexagon", icon: Hexagon },
    ],
    patterns: [
      {
        id: "circles",
        name: "Circles",
        preview:
          "radial-gradient(circle at 25% 25%, #FF6B35 20%, transparent 20%)",
      },
      {
        id: "stripes",
        name: "Stripes",
        preview:
          "repeating-linear-gradient(45deg, #FF6B35, #FF6B35 10px, #F7931E 10px, #F7931E 20px)",
      },
      {
        id: "dots",
        name: "Polka Dots",
        preview: "radial-gradient(circle, #FF6B35 2px, transparent 2px)",
      },
    ],
  };