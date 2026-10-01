import type { ThreeElement } from "@react-three/fiber";
import type { MeshLineGeometry, MeshLineMaterial } from "meshline";

// Extend ThreeElements interface to include meshline components so they are recognized in JSX
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}
