export type CellType = "GPRS" | "EDGE" | "WCDMA" | "UMTS" | "HSPA" | "LTE";

export interface Cell {
    id: number;
    name: CellType;
}