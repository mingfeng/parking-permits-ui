// eslint-disable-next-line import/no-namespace
import * as geojson from 'geojson';

export type AnyObject = Record<string, unknown>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyNonNullishValue = {};
export type AnyValue = AnyNonNullishValue | undefined | null;
export type AnyFunction = (props?: unknown) => unknown;

export type Point = [number, number];

export interface Region extends geojson.Feature<geojson.MultiPolygon> {
  id: string;
}
