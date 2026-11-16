const loaders = {
  // Add local photos per offer slug, e.g. 'four-bars': () => import('../assets/halawa-spread-four.webp'),
};

const cache = new Map();

export function loadOfferImage(offerId) {
  const load = loaders[offerId];
  if (!load) return Promise.resolve(null);
  if (!cache.has(offerId)) {
    cache.set(offerId, load().then((m) => m.default));
  }
  return cache.get(offerId);
}
