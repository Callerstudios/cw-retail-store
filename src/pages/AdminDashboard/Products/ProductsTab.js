import React from "react";
import "./ProductsTab.css";
import { ReactComponent as ExportIcon } from "../../../images/icons/export.svg";
import { ReactComponent as AddIcon } from "../../../images/icons/add.svg";
import { ReactComponent as SearchIcon } from "../../../images/icons/search.svg";
import { ReactComponent as MoreVertIcon } from "../../../images/icons/more-vert.svg";
import StatusIcon from "../../../components/StatusIcon";

function ProductsTab() {
  const productsData = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "3",
      price: "₦170,000",
      status: "Active",
      quantityColor: "#E74C3C",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "12",
      price: "₦170,000",
      status: "Active",
      quantityColor: "#27AE60",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "1",
      price: "₦170,000",
      status: "Active",
      quantityColor: "#E74C3C",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "5",
      price: "₦170,000",
      status: "Inactive",
      quantityColor: "#E74C3C",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "12",
      price: "₦170,000",
      status: "Active",
      quantityColor: "#E74C3C",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "12",
      price: "₦170,000",
      status: "Active",
      quantityColor: "#27AE60",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "12",
      price: "₦170,000",
      status: "Inactive",
      quantityColor: "#27AE60",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "12",
      price: "₦170,000",
      status: "Inactive",
      quantityColor: "#27AE60",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "12",
      price: "₦170,000",
      status: "Active",
      quantityColor: "#27AE60",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cc11/add3/e0a7ca157ab6be61ce00ac8f5f99e755?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXe2wk9GawF72FQhneV~q8SKm4Z1PkqLjivDHn~gtbXTi7aMXTnwUKAa~eJ8rVI7ctu79kGhfaJIQVzcASeBAE7i0xpxbwgaNAOqtAqcQPhjfFswy1yEjGxDRcNRTrTNTMpZq8JObjeNWPLMnZqi29QHYpgxi5WLhscsyOkzYCJNHUJgx0eMKH8pHJ6LfY9J1IJtkJbxMKWxFFtbmBe9IFnUejHeSWfRiP0zw0UP2vvGSjhFTL6ISiac9LPNnCsM2XdaV-oWVzu-AF3zc7FBt7dS6-BqvN5iS2latNczCwHDlICcerFfQOee~Wt0B0GHb7YDhjNFuPHXnAsUg1h8aA__",
      name: "iPhone 16 pro max",
      sku: "#2462",
      category: "Mobile Phone",
      quantity: "12",
      price: "₦170,000",
      status: "Active",
      quantityColor: "#27AE60",
    },
  ];
  return (
    <div className="products-tab">
      <div className="header">
        <p>Orders</p>
        <div className="header-right">
          <span className="export">
            <ExportIcon />
            <p>Export</p>
          </span>
          <span className="add-product">
            <AddIcon />
            <p>Add Product</p>
          </span>
        </div>
      </div>
      <div className="filter">
        <div className="filter-form">
          <select>
            <option value={1}>Category</option>
          </select>
          <select>
            <option value={1}>Quantity</option>
          </select>
          <select>
            <option value={1}>Status</option>
          </select>
        </div>
        <div className="search">
          <label htmlFor="search">
            <SearchIcon />
          </label>
          <input id="search" placeholder="Search..." />
        </div>
      </div>
      <div className="table">
        <div className="row head">
          <span className="name">Name</span>
          <span>SKU</span>
          <span>Category</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Status</span>
          <span></span>
        </div>
        {productsData.map((data) => (
          <div className="row">
            <span className="name">
              <img src={data.image} alt="" />
              <p>{data.name}</p>
            </span>
            <span>{data.sku}</span>
            <span>{data.category}</span>
            <span>
              <span className="quantity" style={{ color: data.quantityColor }}>
                {data.quantity}
              </span>
            </span>
            <span>{data.price}</span>
            <span>
              <StatusIcon title={data.status} />
            </span>
            <span>
              <MoreVertIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsTab;
