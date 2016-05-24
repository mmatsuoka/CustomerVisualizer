/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * SimpleList module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    var BetterListModel = function () {
        this.itemToAdd = ko.observable("");
        this.allItems = ko.observableArray(["リコッタチーズ", "エシャロット", "ロマネスコ", "オリーブオイル", "イタリアンパセリ", "パルミジャーノチーズ", ""]);
        this.selectedItems = ko.observableArray(["オリーブオイル"]);

        this.addItem = function () {
            if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
                this.allItems.push(this.itemToAdd());
            this.itemToAdd("");
        };

        this.removeSelected = function () {
            this.allItems.removeAll(this.selectedItems());
            this.selectedItems([]); // 選択状態をクリア
        };

        this.sortItems = function () {
            this.allItems.sort();
        };
    };

    return BetterListModel;
});

