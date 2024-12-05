/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Ajouter une règle pour les fichiers GLSL
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/, // Extensions à traiter
      loader: "raw-loader", // Vous pouvez aussi utiliser 'webpack-glsl-loader'
      exclude: /node_modules/, // Exclure les dépendances
    });

    return config; // Retourner la configuration Webpack modifiée
  },
};

export default nextConfig;
