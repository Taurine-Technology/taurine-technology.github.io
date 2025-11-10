# SDN Launch Control Documentation

This repository contains the documentation for [SDN Launch Control](https://github.com/Taurine-Technology/sdn-launch-control).

## View Documentation

Visit the live documentation at: https://taurine-technology.github.io/

## Development

### Local Development

```bash
npm install
npm start
```

### Build

```bash
npm run build
```

### Deploy

Documentation is automatically deployed to GitHub Pages when:

- Changes are pushed to `main` branch
- New tags are created (creates versioned documentation)

## Versioning

Documentation versions are automatically created from GitHub tags:

- Tag format: `v1.0.0`, `v1.1.0`, etc.
- Each tag creates a new documentation version
- Latest version is always from `main` branch

## Contributing

1. Make changes to documentation in `docs/` directory
2. Test locally: `npm start`
3. Commit and push to `main` branch
4. Documentation will be automatically deployed

## Structure

- `docs/getting-started/` - Installation and quick start guides
- `docs/examples/` - Step-by-step examples and tutorials
- `docs/guides/` - Detailed technical documentation
