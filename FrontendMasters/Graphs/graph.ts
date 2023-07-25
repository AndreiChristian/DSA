export declare type WeightedAdjacencyMatrix = number[][];
export declare type AdjacencyMatrix = number[][];
export declare type AdjacencyList = number[][];

export declare type GraphEdge = { to: number; weight: number };
export declare type CompleteGraphEdge = {
  from: number;
  to: number;
  weight: number;
};
export declare type WeightedAdjacencyList = GraphEdge[][];
