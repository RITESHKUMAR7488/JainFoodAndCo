'use client';
import { CategoryPage } from '../../../views/CategoryPage';
export function CategoryClient({ category }) {
 return <CategoryPage key={category} categoryId={category}/>;
}
