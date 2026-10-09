export const routeFor = (view, category) => {
  if (view === 'home') return '/';
  if (view === 'category') return `/shop/${category || 'attas'}`;
  if (view === 'process') return '/#process';
  if (view === 'farmers') return '/#mission';
  if (view === 'certifications') return '/purity';
  if (view === 'shop') return '/shop';
  if (view === 'contact') return '/contact';
  if (view === 'originals') return '/shop/originals';
  return '/';
};
