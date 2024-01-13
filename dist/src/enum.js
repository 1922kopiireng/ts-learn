export var CustomerType;
(function (CustomerType) {
    // kalau di ts enum bisa jadi number atau string
    CustomerType[CustomerType["PLATIUM"] = 2] = "PLATIUM";
    CustomerType[CustomerType["REGULER"] = 0] = "REGULER";
    CustomerType[CustomerType["GOLD"] = 1] = "GOLD";
})(CustomerType || (CustomerType = {}));
