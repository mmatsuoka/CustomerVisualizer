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
    
    /**
     * The view model for the main content view template
     */
    function SimpleListContentViewModel() {
        
        items = ["Alpha", "Beta", "Gamma"];
        
        this.items = ko.observableArray(items);
        this.itemToAdd = ko.observable("");
        this.addItem = function () {
            if (this.itemToAdd() != "") {
                // アイテムを追加します。
                // 追加先の items は observableArray なので、対応する UI が更新されます。
                this.items.push(this.itemToAdd());
                // itemToAdd は Observable であり、テキストボックスにバインドされているため、
                // 次のようにすることでテキストボックスをクリアできます。
                this.itemToAdd("");
            }
        }.bind(this);  // this が常にこの ViewModel を指すようにします
    }

    return SimpleListContentViewModel;
});


