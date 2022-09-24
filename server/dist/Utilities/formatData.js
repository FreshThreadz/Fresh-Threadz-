"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styles = void 0;
function Styles(skus, photos) {
    let bucket = {};
    photos.forEach((photo) => {
        if (bucket[photo.style_id]) {
            bucket[photo.style_id]["photos"].push({
                thumbnail_url: photo.thumbnail_url,
                url: photo.url,
            });
        }
        else {
            bucket[photo.style_id] = {
                "style_id": photo.style_id,
                "name": photo.name,
                "original_price": photo.original_price,
                "sale_price": photo.sale_price,
                "default?": photo.default_style,
                "photos": [{
                        thumbnail_url: photo.thumbnail_url,
                        url: photo.url,
                    }],
                "skus": {}
            };
        }
    });
    skus.length === 0 ?
        Object.keys(bucket).forEach(style_id => {
            bucket[style_id]["skus"] = {
                ["null"]: {
                    "quantity": null,
                    "size": null,
                }
            };
        })
        : skus.forEach((sku) => {
            if (bucket[sku.style_id]["skus"]) {
                bucket[sku.style_id]["skus"][sku.sku_id] = {
                    "quantity": sku.quantity,
                    "size": sku.size,
                };
            }
            else {
                bucket[sku.style_id]["skus"] = {
                    [sku.sku_id]: {
                        "quantity": sku.quantity,
                        "size": sku.size,
                    }
                };
            }
        });
    return Object.values(bucket);
}
exports.Styles = Styles;
