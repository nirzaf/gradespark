# Contacts database API documentation | Baserow

[Source](https://baserow.io/api-docs/database/211395 "Permalink to Contacts database API documentation | Baserow")

##  Queries table 

 The ID of this table is: `507918`

###  Fields 

 Each row in the Queries table contains the following fields. 

ID Name Type  Compatible filters  field\_4019396 Full Name `string` `equal``not_equal``contains``contains_not``contains_word``doesnt_contain_word``length_is_lower_than``empty``not_empty` 

Accepts single line text.

field\_4019397 Additional Details `string` `equal``not_equal``contains``contains_not``contains_word``doesnt_contain_word``length_is_lower_than``empty``not_empty` 

Accepts multi line text. If the rich text formatting is enabled, you can use markdown to format the text.

field\_4019398 Your Project `array` `filename_contains``has_file_type``files_lower_than``empty``not_empty` 

Accepts an array of objects containing at least the name of the user file. Alternatively, you can provide a comma-separated list of file names or an array of file names. You can use the "File uploads" endpoints to upload the file. The response of those calls can be provided directly as object here. The endpoints can be found in the left sidebar.

field\_4019399 Email `string` `equal``not_equal``contains``contains_not``contains_word``doesnt_contain_word``length_is_lower_than``empty``not_empty` 

Accepts a string that must be an email address.

field\_4019400 Mobile No `string` `equal``not_equal``contains``contains_not``contains_word``doesnt_contain_word``length_is_lower_than``empty``not_empty` 

Accepts single line text.

field\_4019407 Status `integer or string` `contains``contains_not``contains_word``doesnt_contain_word``single_select_equal``single_select_not_equal``single_select_is_any_of``single_select_is_none_of``empty``not_empty` 

 Accepts an integer or a text value representing the chosen select option id or option value. A null value means none is selected. In case of a text value, the first matching option is selected. 

3098775

Submitted

3098776

Contacted

3098777

InProgress

3098778

Completed

field\_4019448 Requirement `integer or string` `contains``contains_not``contains_word``doesnt_contain_word``single_select_equal``single_select_not_equal``single_select_is_any_of``single_select_is_none_of``empty``not_empty` 

 Accepts an integer or a text value representing the chosen select option id or option value. A null value means none is selected. In case of a text value, the first matching option is selected. 

3098787

Essay Writing

3098788

Research Paper Assistance

3098789

Dissertation or Thesis Support

3098790

Technical Assignments

3098791

Personal Statement Writing

3098792

Book Writing

3098793

Editing & Proofreading

3098794

Ghostwriting

3098795

Subject-Specific Tutoring

3098796

Exam Preparation

3098797

Academic Coaching

3098798

Other

###  List fields 

To list fields of the Queries table a `GET` request has to be made to the Queries fields endpoint. It's only possible to list the fields if the database token has read, create or update permissions.

####  Result field properties 

* id 

  `integer` 

  Field primary key. Can be used to generate the database column name by adding `field_` prefix.
* name 

  `string` 

   Field name.
* table\_id 

  `integer` 

   Related table id.
* order 

  `integer` 

   Field order in table. 0 for the first field.
* primary 

  `boolean` 

  Indicates if the field is a primary field. If `true` the field cannot be deleted and the value should represent the whole row.
* type 

  `string` 

   Type defined for this field.
* read\_only 

  `boolean` 

   Indicates whether the field is a read only field. If true, it's not possible to update the cell value.
* description 

  `string` 

   Field description

 Some extra properties are not described here because they are type specific. 

[Copy]() 

 GET 

 https://api.baserow.io/api/database/fields/table/507918/ 

 Request sample 

[Copy]() 

[cURL]() 

    curl \
    -X GET \
    -H "Authorization: Token YOUR_DATABASE_TOKEN" \
    "https://api.baserow.io/api/database/fields/table/507918/"

 Response sample 

[Copy]() 

    [
        {
            "id": 4019396,
            "table_id": 507918,
            "name": "Full Name",
            "order": 0,
            "type": "text",
            "primary": true,
            "read_only": false,
            "description": "A sample description"
        },
        {
            "id": 4019397,
            "table_id": 507918,
            "name": "Additional Details",
            "order": 1,
            "type": "long_text",
            "primary": false,
            "read_only": false,
            "description": "Describe if you have any additional special notes to communicate in prior"
        },
        {
            "id": 4019398,
            "table_id": 507918,
            "name": "Your Project",
            "order": 2,
            "type": "file",
            "primary": false,
            "read_only": false,
            "description": "Attach your Project/Assignment related files"
        }
    ]

###  List rows 

To list rows in the *Queries* table a `GET` request has to be made to the *Queries* endpoint. The response is paginated and by default the first page is returned. The correct page can be fetched by providing the `page` and `size` query parameters.

####  Query parameters 

* page 

   optional 

  `integer` 

   Default: 1 

   Defines which page of rows should be returned.
* size 

   optional 

  `integer` 

   Default: 100 

   Defines how many rows should be returned per page.
* user\_field\_names 

   optional 

  `any` 

  When the `user_field_names` GET parameter is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty string, the field names returned by this endpoint will be the actual names of the fields.

  If the `user_field_names` GET parameter is not provided, or if it does not match any of the above values, then all returned field names will be `field_` followed by the id of the field. For example `field_1` refers to the field with an id of `1`.

  Additionally when `user_field_names` is set then the behaviour of the other GET parameters `order_by`, `include` and `exclude` changes. They instead expect comma separated lists of the actual field names instead.
* search 

   optional 

  `string` 

   Default: '' 

   If provided only rows with data that matches the search query are going to be returned.
* order\_by 

   optional 

  `string` 

   Default: 'id' 

  Optionally the rows can be ordered by fields separated by comma. By default or if prepended with a '+' a field is ordered in ascending (A-Z) order, but by prepending the field with a '-' it can be ordered descending (Z-A).

#### With `user_field_names`:

  `order_by` should be a comma separated list of the field names to order by. For example if you provide the following GET parameter `order_by=My Field,-My Field 2` the rows will ordered by the field called `My Field` in ascending order. If some fields have the same value, that subset will be ordered by the field called `My Field 2` in descending order.

  Ensure fields with names starting with a `+` or `-` are explicitly prepended with another `+` or `-`. E.g `+-Name`.

  The name of fields containing commas must be surrounded by quotes: `"Name ,"`. If the field names contain quotes, then they must be escaped using the `\` character. Eg: `Name \"`.

#### Without `user_field_names`:

  `order_by` should be a comma separated list of `field_` followed by the id of the field to order by. For example if you provide the following GET parameter `order_by=field_1,-field_2` the rows will ordered by `field_1` in ascending order. If some fields have the same value, that subset will be ordered by `field_2` in descending order.
* filters 

   optional 

  `JSON` 

  Rows can optionally be filtered using the same view filters that are available for the views. This parameter accepts a JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied.

#### With `user_field_names`:

  An example of a valid filter tree is the following: `{"filter_type": "AND", "filters": [{"field": "Name", "type": "equal", "value": "test"}]}`.

#### Without `user_field_names`:

  For example, if you optionally provide the following GET parameter: `{"filter_type": "AND", "filters": [{"field": 1, "type": "equal", "value": "test"}]}`

  Please note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the filter\_type parameter.
* filter\_\_{field}\_\_{filter} 

   optional 

  `string` 

  Rows can optionally be filtered using the same view filters that are available for the views. Multiple filters may be applied if they follow the same format. The `field` and `filter` variables indicate how and where to apply the filter, respectively.

#### With `user_field_names`:

  For example, if you optionally provide the following GET parameter: `filter__Name__equal=test`, only rows where the value of `Name` equals 'test' will be returned. This method is backwards compatible and will check against `field_id` if it fails on the name.

#### Without `user_field_names`:

  For example, if you optionally provide the following GET parameter: `filter__field_1__equal=test`, only rows where the value of `field_1` equals 'test' will be returned.

  Please note that if the filters parameter is provided, this parameter will be ignored.

 [A list of all filters can be found here.]()
* filter\_type 

   optional 

  `string` 

   Default: 'AND' 

  * `AND`: Indicates that the rows must match all the provided filters.
  * `OR`: Indicates that the rows only have to match one of the filters.

  This works only if two or more filters are provided.
* include 

   optional 

  `string` 

  All the fields are included in the response by default. You can select a subset of fields to include by providing the include query parameter.

#### With `user_field_names`:

  `include` should be a comma separated list of field names to be included in results. For example if you provide the following GET param: `include=My Field,-My Field 2` then only those fields will be included (unless they are explicitly excluded).

  The name of fields containing commas must be surrounded by quotes: `"Name ,"`. If the field names contain quotes, then they must be escaped using the `\` character. Eg: `Name \"`.

#### Without `user_field_names`:

  `include` should be a comma separated list of `field_` followed by the id of the field to include in the results. For example: If you provide the following GET parameter `include=field_1,field_2` then the fields with id `1` and id `2` then only those fields will be included (unless they are explicitly excluded).
* exclude 

   optional 

  `string` 

  All the fields are included in the response by default. You can select a subset of fields to exclude by providing the exclude query parameter.

#### With `user_field_names`:

  `exclude` should be a comma separated list of field names to be excluded from the results. For example if you provide the following GET param: `exclude=My Field,-My Field 2` then those fields will be excluded.

  The name of fields containing commas must be surrounded by quotes: `"Name ,"`. If the field names contain quotes, then they must be escaped using the `\` character. Eg: `Name \"`.

#### Without `user_field_names`:

  `exclude` should be a comma separated list of `field_` followed by the id of the field to exclude from the results. For example: If you provide the following GET parameter `exclude=field_1,field_2` then the fields with id `1` and id `2` will be excluded.
* view\_id 

   optional 

  `integer` 

  By default non of the filters and sorts outside of the ones defined in the query parameters are applied. You can add the filters and sorts of a view by providing its `id` in the `view_id` GET parameter. For example if you provide the following GET parameter `view_id=1` then the filters and sorts defined in the view with id `1` will be applied. You can find the `view_id` in the context menu of any given view. It is the number in brackets behind the view name.

#### With `filter__{field}__{filter}`

  Both the filter provided in the query parameter and the filters defined in the view will be applied.

#### With `order_by`

  If `order_by` is provided then the sort defined in the view will be ignored.
* {link\_row\_field}\_\_join 

   optional 

  `string` 

  Makes it possible to request a lookup of field values from a target table through existing link row fields. The parameter name has to be the name of an existing link row field, followed by \_\_join. The value should be a list of field names for which we want to lookup additional values. You can provide one or multiple target fields. It is not possible to lookup a value of a link row field in the target table.

#### With `user_field_names`:

  `join` should be a comma separated list of field names to be included in results. For example: If you provide the following GET parameter `LinkRowField__join=MyField,MyField2` then the values of `MyField` and `My Field2` in the table linked by `LinkRowField` will be included in the response .

#### Without `user_field_names`:

  `join` should be a comma separated list of `field_` followed by the id of the field to include in the results. For example: If you provide the following GET parameter `field_1__join=field_2,field_3` then the values of `field_2` and `field_3` in the table linked by `field_1` will be included in the response.

[Copy]() 

 GET 

 https://api.baserow.io/api/database/rows/table/507918/?user\_field\_names=true 

 Request sample 

[Copy]() 

[cURL]() 

    curl \
    -X GET \
    -H "Authorization: Token YOUR_DATABASE_TOKEN" \
    "https://api.baserow.io/api/database/rows/table/507918/?user_field_names=true"

 Response sample 

[Copy]() 

 field\_4019396 

 field\_4019397 

 field\_4019398 

 field\_4019399 

 field\_4019400 

 field\_4019407 

 field\_4019448 

    {
        "count": 1024,
        "next": "https://api.baserow.io/api/database/rows/table/507918/?page=2",
        "previous": null,
        "results": [
            {
                "id": 0,
                "order": "1.00000000000000000000",
                "Full Name": "string",
                "Additional Details": "string",
                "Your Project": [
                    {
                        "url": "https://files.baserow.io/user_files/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "thumbnails": {
                            "tiny": {
                                "url": "https://files.baserow.io/media/thumbnails/tiny/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                                "width": 21,
                                "height": 21
                            },
                            "small": {
                                "url": "https://files.baserow.io/media/thumbnails/small/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                                "width": 48,
                                "height": 48
                            }
                        },
                        "name": "VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "size": 229940,
                        "mime_type": "image/png",
                        "is_image": true,
                        "image_width": 1280,
                        "image_height": 585,
                        "uploaded_at": "2020-11-17T12:16:10.035234+00:00"
                    }
                ],
                "Email": "example@baserow.io",
                "Mobile No": "string",
                "Status": {
                    "id": 1,
                    "value": "Option",
                    "color": "light-blue"
                },
                "Requirement": {
                    "id": 1,
                    "value": "Option",
                    "color": "light-blue"
                }
            }
        ]
    }

###  Get row 

 Fetch a single Queries row. 

####  Path parameters 

* row\_id 

  `integer` 

   The unique identifier of the row that is requested.

####  Query parameters 

* user\_field\_names 

   optional 

  `any` 

  When the `user_field_names` GET parameter is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty string, the field names returned by this endpoint will be the actual names of the fields.

  If the `user_field_names` GET parameter is not provided, or if it does not match any of the above values, then all returned field names will be `field_` followed by the id of the field. For example `field_1` refers to the field with an id of `1`.

[Copy]() 

 GET 

 https://api.baserow.io/api/database/rows/table/507918/{row\_id}/?user\_field\_names=true 

 Request sample 

[Copy]() 

[cURL]() 

    curl \
    -X GET \
    -H "Authorization: Token YOUR_DATABASE_TOKEN" \
    "https://api.baserow.io/api/database/rows/table/507918/{row_id}/?user_field_names=true"

 Response sample 

[Copy]() 

 field\_4019396 

 field\_4019397 

 field\_4019398 

 field\_4019399 

 field\_4019400 

 field\_4019407 

 field\_4019448 

    {
        "id": 0,
        "order": "1.00000000000000000000",
        "Full Name": "string",
        "Additional Details": "string",
        "Your Project": [
            {
                "url": "https://files.baserow.io/user_files/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "thumbnails": {
                    "tiny": {
                        "url": "https://files.baserow.io/media/thumbnails/tiny/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 21,
                        "height": 21
                    },
                    "small": {
                        "url": "https://files.baserow.io/media/thumbnails/small/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 48,
                        "height": 48
                    }
                },
                "name": "VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "size": 229940,
                "mime_type": "image/png",
                "is_image": true,
                "image_width": 1280,
                "image_height": 585,
                "uploaded_at": "2020-11-17T12:16:10.035234+00:00"
            }
        ],
        "Email": "example@baserow.io",
        "Mobile No": "string",
        "Status": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        },
        "Requirement": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        }
    }

###  Create row 

 Create a new Queries row. 

####  Query parameters 

* user\_field\_names 

   optional 

  `any` 

  When the `user_field_names` GET parameter is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty string, the field names returned by this endpoint will be the actual names of the fields.

  If the `user_field_names` GET parameter is not provided, or if it does not match any of the above values, then all returned field names will be `field_` followed by the id of the field. For example `field_1` refers to the field with an id of `1`.
* before 

   optional 

  `integer` 

   If provided then the newly created row will be positioned before the row with the provided id.
* send\_webhook\_events 

   optional 

  `any` 

  A flag query parameter that triggers webhooks after the operation, if set to `y`, `yes`, `true`, `t`, `on`, `1`, or left empty. Defaults to `true`

####  Request body schema 

* Full Name field\_4019396

   optional 

  `string` 

  Accepts single line text.
* Additional Details field\_4019397

   optional 

  `string` 

  Accepts multi line text. If the rich text formatting is enabled, you can use markdown to format the text.
* Your Project field\_4019398

   optional 

  `array` 

  Accepts an array of objects containing at least the name of the user file. Alternatively, you can provide a comma-separated list of file names or an array of file names. You can use the "File uploads" endpoints to upload the file. The response of those calls can be provided directly as object here. The endpoints can be found in the left sidebar.
* Email field\_4019399

   optional 

  `string` 

  Accepts a string that must be an email address.
* Mobile No field\_4019400

   optional 

  `string` 

  Accepts single line text.
* Status field\_4019407

   optional 

  `integer or string` 

   Accepts an integer or a text value representing the chosen select option id or option value. A null value means none is selected. In case of a text value, the first matching option is selected. 

  3098775

  Submitted

  3098776

  Contacted

  3098777

  InProgress

  3098778

  Completed
* Requirement field\_4019448

   optional 

  `integer or string` 

   Accepts an integer or a text value representing the chosen select option id or option value. A null value means none is selected. In case of a text value, the first matching option is selected. 

  3098787

  Essay Writing

  3098788

  Research Paper Assistance

  3098789

  Dissertation or Thesis Support

  3098790

  Technical Assignments

  3098791

  Personal Statement Writing

  3098792

  Book Writing

  3098793

  Editing & Proofreading

  3098794

  Ghostwriting

  3098795

  Subject-Specific Tutoring

  3098796

  Exam Preparation

  3098797

  Academic Coaching

  3098798

  Other

[Copy]() 

 POST 

 https://api.baserow.io/api/database/rows/table/507918/?user\_field\_names=true 

 Request sample 

[Copy]() 

[cURL]() 

 field\_4019396 

 field\_4019397 

 field\_4019398 

 field\_4019399 

 field\_4019400 

 field\_4019407 

 field\_4019448 

    curl \
    -X POST \
    -H "Authorization: Token YOUR_DATABASE_TOKEN" \
    -H "Content-Type: application/json" \
    "https://api.baserow.io/api/database/rows/table/507918/?user_field_names=true" \
    --data '{
        "Full Name": "string",
        "Additional Details": "string",
        "Your Project": [
            {
                "name": "VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png"
            }
        ],
        "Email": "example@baserow.io",
        "Mobile No": "string",
        "Status": 1,
        "Requirement": 1
    }'

 Response sample 

[Copy]() 

 field\_4019396 

 field\_4019397 

 field\_4019398 

 field\_4019399 

 field\_4019400 

 field\_4019407 

 field\_4019448 

    {
        "id": 0,
        "order": "1.00000000000000000000",
        "Full Name": "string",
        "Additional Details": "string",
        "Your Project": [
            {
                "url": "https://files.baserow.io/user_files/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "thumbnails": {
                    "tiny": {
                        "url": "https://files.baserow.io/media/thumbnails/tiny/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 21,
                        "height": 21
                    },
                    "small": {
                        "url": "https://files.baserow.io/media/thumbnails/small/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 48,
                        "height": 48
                    }
                },
                "name": "VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "size": 229940,
                "mime_type": "image/png",
                "is_image": true,
                "image_width": 1280,
                "image_height": 585,
                "uploaded_at": "2020-11-17T12:16:10.035234+00:00"
            }
        ],
        "Email": "example@baserow.io",
        "Mobile No": "string",
        "Status": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        },
        "Requirement": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        }
    }

###  Update row 

 Updates an existing Queries row. 

#### Path parameters

* row\_id 

  `integer` 

   The unique identifier of the row that needs to be updated.

#### Query parameters

* user\_field\_names 

   optional 

  `any` 

  When the `user_field_names` GET parameter is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty string, the field names returned by this endpoint will be the actual names of the fields.

  If the `user_field_names` GET parameter is not provided, or if it does not match any of the above values, then all returned field names will be `field_` followed by the id of the field. For example `field_1` refers to the field with an id of `1`.
* send\_webhook\_events 

   optional 

  `any` 

  A flag query parameter that triggers webhooks after the operation, if set to `y`, `yes`, `true`, `t`, `on`, `1`, or left empty. Defaults to `true`

####  Request body schema 

* Full Name field\_4019396

   optional 

  `string` 

  Accepts single line text.
* Additional Details field\_4019397

   optional 

  `string` 

  Accepts multi line text. If the rich text formatting is enabled, you can use markdown to format the text.
* Your Project field\_4019398

   optional 

  `array` 

  Accepts an array of objects containing at least the name of the user file. Alternatively, you can provide a comma-separated list of file names or an array of file names. You can use the "File uploads" endpoints to upload the file. The response of those calls can be provided directly as object here. The endpoints can be found in the left sidebar.
* Email field\_4019399

   optional 

  `string` 

  Accepts a string that must be an email address.
* Mobile No field\_4019400

   optional 

  `string` 

  Accepts single line text.
* Status field\_4019407

   optional 

  `integer or string` 

   Accepts an integer or a text value representing the chosen select option id or option value. A null value means none is selected. In case of a text value, the first matching option is selected. 

  3098775

  Submitted

  3098776

  Contacted

  3098777

  InProgress

  3098778

  Completed
* Requirement field\_4019448

   optional 

  `integer or string` 

   Accepts an integer or a text value representing the chosen select option id or option value. A null value means none is selected. In case of a text value, the first matching option is selected. 

  3098787

  Essay Writing

  3098788

  Research Paper Assistance

  3098789

  Dissertation or Thesis Support

  3098790

  Technical Assignments

  3098791

  Personal Statement Writing

  3098792

  Book Writing

  3098793

  Editing & Proofreading

  3098794

  Ghostwriting

  3098795

  Subject-Specific Tutoring

  3098796

  Exam Preparation

  3098797

  Academic Coaching

  3098798

  Other

[Copy]() 

 PATCH 

 https://api.baserow.io/api/database/rows/table/507918/{row\_id}/?user\_field\_names=true 

 Request sample 

[Copy]() 

[cURL]() 

 field\_4019396 

 field\_4019397 

 field\_4019398 

 field\_4019399 

 field\_4019400 

 field\_4019407 

 field\_4019448 

    curl \
    -X PATCH \
    -H "Authorization: Token YOUR_DATABASE_TOKEN" \
    -H "Content-Type: application/json" \
    "https://api.baserow.io/api/database/rows/table/507918/{row_id}/?user_field_names=true" \
    --data '{
        "Full Name": "string",
        "Additional Details": "string",
        "Your Project": [
            {
                "name": "VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png"
            }
        ],
        "Email": "example@baserow.io",
        "Mobile No": "string",
        "Status": 1,
        "Requirement": 1
    }'

 Response sample 

[Copy]() 

 field\_4019396 

 field\_4019397 

 field\_4019398 

 field\_4019399 

 field\_4019400 

 field\_4019407 

 field\_4019448 

    {
        "id": 0,
        "order": "1.00000000000000000000",
        "Full Name": "string",
        "Additional Details": "string",
        "Your Project": [
            {
                "url": "https://files.baserow.io/user_files/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "thumbnails": {
                    "tiny": {
                        "url": "https://files.baserow.io/media/thumbnails/tiny/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 21,
                        "height": 21
                    },
                    "small": {
                        "url": "https://files.baserow.io/media/thumbnails/small/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 48,
                        "height": 48
                    }
                },
                "name": "VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "size": 229940,
                "mime_type": "image/png",
                "is_image": true,
                "image_width": 1280,
                "image_height": 585,
                "uploaded_at": "2020-11-17T12:16:10.035234+00:00"
            }
        ],
        "Email": "example@baserow.io",
        "Mobile No": "string",
        "Status": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        },
        "Requirement": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        }
    }

###  Move row 

Moves an existing Queries row before another row. If no `before_id` is provided, then the row will be moved to the end of the table.

#### Path parameters

* row\_id 

  `integer` 

   Moves the row related to the value.

#### Query parameters

* user\_field\_names 

   optional 

  `any` 

  When the `user_field_names` GET parameter is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty string, the field names returned by this endpoint will be the actual names of the fields.

  If the `user_field_names` GET parameter is not provided, or if it does not match any of the above values, then all returned field names will be `field_` followed by the id of the field. For example `field_1` refers to the field with an id of `1`.
* before\_id 

   optional 

  `integer` 

   Moves the row related to the given `row\_id` before the row related to the provided value. If not provided, then the row will be moved to the end.
* send\_webhook\_events 

   optional 

  `any` 

  A flag query parameter that triggers webhooks after the operation, if set to `y`, `yes`, `true`, `t`, `on`, `1`, or left empty. Defaults to `true`

[Copy]() 

 PATCH 

 https://api.baserow.io/api/database/rows/table/507918/{row\_id}/move/ 

 Request sample 

[Copy]() 

[cURL]() 

    curl \
    -X PATCH \
    -H "Authorization: Token YOUR_DATABASE_TOKEN" \
    "https://api.baserow.io/api/database/rows/table/507918/{row_id}/move/"

 Response sample 

[Copy]() 

 field\_4019396 

 field\_4019397 

 field\_4019398 

 field\_4019399 

 field\_4019400 

 field\_4019407 

 field\_4019448 

    {
        "id": 0,
        "order": "1.00000000000000000000",
        "Full Name": "string",
        "Additional Details": "string",
        "Your Project": [
            {
                "url": "https://files.baserow.io/user_files/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "thumbnails": {
                    "tiny": {
                        "url": "https://files.baserow.io/media/thumbnails/tiny/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 21,
                        "height": 21
                    },
                    "small": {
                        "url": "https://files.baserow.io/media/thumbnails/small/VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                        "width": 48,
                        "height": 48
                    }
                },
                "name": "VXotniBOVm8tbstZkKsMKbj2Qg7KmPvn_39d354a76abe56baaf569ad87d0333f58ee4bf3eed368e3b9dc736fd18b09dfd.png",
                "size": 229940,
                "mime_type": "image/png",
                "is_image": true,
                "image_width": 1280,
                "image_height": 585,
                "uploaded_at": "2020-11-17T12:16:10.035234+00:00"
            }
        ],
        "Email": "example@baserow.io",
        "Mobile No": "string",
        "Status": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        },
        "Requirement": {
            "id": 1,
            "value": "Option",
            "color": "light-blue"
        }
    }

###  Delete row 

 Deletes an existing Queries row. 

#### Path parameters

* row\_id 

  `integer` 

   The unique identifier of the row that needs to be deleted.

#### Query parameters

* send\_webhook\_events 

   optional 

  `any` 

  A flag query parameter that triggers webhooks after the operation, if set to `y`, `yes`, `true`, `t`, `on`, `1`, or left empty. Defaults to `true`

[Copy]() 

 DELETE 

 https://api.baserow.io/api/database/rows/table/507918/{row\_id}/ 

 Request sample 

[Copy]() 

[cURL]() 

    curl \
    -X DELETE \
    -H "Authorization: Token YOUR_DATABASE_TOKEN" \
    "https://api.baserow.io/api/database/rows/table/507918/{row_id}/"
