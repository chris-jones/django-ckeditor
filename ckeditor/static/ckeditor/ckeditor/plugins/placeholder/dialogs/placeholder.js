﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("placeholder", function(a) {
    var b = a.lang.placeholder,
        a = a.lang.common.generalTab;

    var entities = {'<': '&lt;', '>': '&gt;'};
    var reverse_entities = {'&lt;':'<', '&gt;':'>'};

    return {
        title: b.title,
        minWidth: 300,
        minHeight: 80,
        contents: [{
            id: "info",
            label: a,
            title: a,
            elements: [{
                id: "name",
                type: "text",
                style: "width: 100%;",
                label: b.name,
                "default": "",
                required: !0,
                validate: CKEDITOR.dialog.validate.regex(/^[^\[\]]+$/, b.invalidName),
                setup: function(a) {
                    this.setValue(a.data.name.replace(
                        /&(l|g)t;/g, function (s) {
                            return reverse_entities[s];
                        }
                    ))
                },
                commit: function(a) {
                    a.setData("name", this.getValue().replace(
                        /[<>]/g, function (s) {
                            return entities[s];
                        }
                    ) )
                }
            }]
        }]
    }
});