# Model Management System

The model management system allows dynamic loading and configuration of machine learning models for traffic classification.

## Overview

The system provides:

- JSON-based model configuration
- Dynamic model loading/unloading
- Automatic category management
- Model validation and health checks
- API endpoints for management

## Configuration File

Models are defined in `classifier/models_config.json`:

```json
{
  "models": {
    "complex_cnn_16_04_2025": {
      "name": "Complex CNN (16-04-2025)",
      "model_path": "classifier/ml_models/complex_cnn_16-04-2025.h5",
      "model_type": "keras_h5",
      "num_categories": 22,
      "description": "Complex CNN model trained on 22 categories",
      "version": "16-04-2025",
      "confidence_threshold": 0.7,
      "is_active": true,
      "categories": [
        "ADS_Analytic_Track",
        "AmazonAWS",
        "BitTorrent",
        "Facebook",
        "GMail",
        "Google",
        "HTTP",
        "NetFlix",
        "TikTok",
        "YouTube"
      ]
    }
  }
}
```

## Model Configuration Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Human-readable model name |
| `model_path` | string | Path to model file |
| `model_type` | string | Model type (keras_h5) |
| `num_categories` | integer | Number of classification categories |
| `description` | string | Model description |
| `version` | string | Model version |
| `confidence_threshold` | float | Minimum confidence for classification |
| `is_active` | boolean | Whether model is currently active |
| `categories` | array | List of category names |

## API Endpoints

### List Models

```http
GET /api/v1/classifier/models/
```

### Get Model Details

```http
GET /api/v1/classifier/models/{id}/
```

### Activate Model

```http
POST /api/v1/classifier/models/{id}/activate/
```

### Deactivate Model

```http
POST /api/v1/classifier/models/{id}/deactivate/
```

## Model Loading

Models are loaded dynamically when activated:

1. System reads configuration
2. Validates model file exists
3. Loads TensorFlow/Keras model
4. Verifies category count matches
5. Sets as active model

## Category Management

Categories are automatically managed:

- Generated from model configuration
- Stored in database
- Used for classification results
- Displayed in UI

## Performance Considerations

- Models are loaded into memory
- Only one active model at a time
- Model switching requires reload
- Consider memory usage for large models

## Next Steps

- [Advanced Configuration](./advanced-configuration.md) - System configuration

