# Contacts database API documentation

## Introduction

The Contacts database provides an easy way to integrate the data with any external system. The API follows REST semantics, uses JSON to encode objects and relies on standard HTTP codes, machine and human-readable errors to signal operation outcomes.

This documentation is generated automatically based on the tables and fields that are in your database. If you make changes to your database, for example by adding or modifying a column in a table, then you need to refresh this page to see the changes. It's also possible that you have to update your API implementation accordingly.

The ID of this database is: `211395`
JavaScript example API client: `axios`
Python example API client: `requests`

## Authentication

Baserow uses a simple token-based authentication. You need to generate at least one database token in your **settings** to use the endpoints described below. It is possible to give create, read, update and delete permissions up until table level per token. All the endpoints described below, apart from the one to list tables, HTTP `Authorization` header `Token YOUR_DATABASE_TOKEN`. All requests must be authenticated and made over HTTPS.

### Request sample

```bash
curl \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io"
```

---

## Queries table

The ID of this table is `587918`.

### Fields

Each row in the Queries table contains the following fields.

| ID | Name | Type | Compatible Filters |
| --- | --- | --- | --- |
| `field_401936` | Full Name | `string` | `equal`, `not_equal`, `contains`, `not_contains`, `contains_word`, `doesnt_contain_word`, `length_is_lower_than`, `empty`, `not_empty` |
| `field_401937` | Additional Details | `string` | `equal`, `not_equal`, `contains`, `not_contains`, `length_is_lower_than`, `empty`, `not_empty` |
| `field_401938` | Your Project | `array` | `filename_contains`, `has_file_type`, `files_lower_than`, `empty`, `not_empty` |
| `field_401939` | Email | `string` | `equal`, `not_equal`, `contains`, `not_contains`, `contains_word`, `doesnt_contain_word`, `length_is_lower_than`, `empty`, `not_empty` |
| `field_401940` | Mobile No | `string` | `equal`, `not_equal`, `contains`, `not_contains`, `contains_word`, `doesnt_contain_word`, `length_is_lower_than`, `empty`, `not_empty` |
| `field_4019407` | Status | `integer` or `string` | `contains`, `contains_not`, `contains_word`, `doesnt_contain_word`, `single_select_equal`, `single_select_not_equal`, `empty`, `not_empty` <br><br> Options: <br> `3098778` - Submitted <br> `3098779` - Contacted <br> `3098780` - Completed |
| `field_4019448` | Requirement | `integer` or `string` | `contains`, `contains_not`, `contains_word`, `doesnt_contain_word`, `single_select_equal`, `single_select_not_equal`, `single_select_is_any_of`, `single_select_is_none_of`, `empty`, `not_empty` <br><br> Options: <br> `3098781` - Essay Writing <br> `3098782` - Research Paper Assistance <br> `3098783` - Dissertation or Thesis Support <br> `3098790` - Technical Assignments <br> `3098791` - Personal Statement Writing <br> `3098792` - Book Writing <br> `3098793` - Editing & Proofreading <br> `3098794` - Ghostwriting <br> `3098795` - Subject-Specific Tutoring <br> `3098796` - Exam Preparation <br> `3098797` - Academic Coaching <br> `3098798` - Other |

---

### List fields

<span style="background-color:#4CAF50; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">GET</span> `https://api.baserow.io/api/database/fields/table/{table_id}/`

To list all the fields of the Queries table a GET request has to be made to the Queries fields endpoint. It's only possible to list the fields if the database token has read, create or update permissions.

#### Request sample
```bash
curl \
  -X GET \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/fields/table/587918/"
```

#### Response sample
```json
[
  {
    "id": 401936,
    "table_id": 587918,
    "name": "Full Name",
    "order": 0,
    "type": "text",
    "primary": true,
    "read_only": false,
    "description": "A sample description"
  },
  {
    "id": 401937,
    "table_id": 587918,
    "name": "Additional Details",
    "order": 1,
    "type": "long_text",
    "primary": false,
    "read_only": false,
    "description": "Describe if you have any additional special notes to communicate in prior"
  },
  {
    "id": 401938,
    "table_id": 587918,
    "name": "Your Project",
    "order": 2,
    "type": "file",
    "primary": false,
    "read_only": false,
    "description": "Attach your Project/Assignment related files"
  }
]
```

---

### List rows

<span style="background-color:#4CAF50; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">GET</span> `https://api.baserow.io/api/database/rows/table/{table_id}/`

To list all rows in the Queries table a `GET` request has to be made to the Queries endpoint. The response is paginated and by default the first page of 100 rows is returned. Which page can be fetched by providing the `page` and `size` query parameters.

#### Query parameters
*   `user_field_names` (optional): If the `user_field_names` GET parameter is provided, all field-related GET parameters must be provided with the name of the field. All field-related POST, PATCH bodies must be an object with the names of the fields as keys.

#### Request sample
```bash
curl \
  -X GET \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/rows/table/587918/?user_field_names=true"
```

#### Response sample
```json
{
  "count": 1024,
  "next": "https://api.baserow.io/api/database/rows/table/587918/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "order": "1.00000000000000000000",
      "Full Name": "string",
      "Additional Details": "string",
      "Your Project": [],
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
```

---

### Get row

<span style="background-color:#4CAF50; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">GET</span> `https://api.baserow.io/api/database/rows/table/{table_id}/{row_id}/`

Fetches a single Queries row.

#### Path parameters
*   `row_id` (integer): The unique identifier of the row that is requested.

#### Query parameters
*   `user_field_names` (optional): If provided, field-related query parameters must be provided with the field name.

#### Request sample
```bash
curl \
  -X GET \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/rows/table/587918/1/?user_field_names=true"
```

#### Response sample
```json
{
  "id": 1,
  "order": "1.00000000000000000000",
  "Full Name": "string",
  "Additional Details": "string",
  "Your Project": [
    {
      "url": "https://files.baserow.io/user_files/...",
      "thumbnails": {
        "tiny": { "url": "...", "width": 21, "height": 21 },
        "small": { "url": "...", "width": 48, "height": 48 }
      },
      "name": "...",
      "size": 22949,
      "mime_type": "image/png",
      "is_image": true,
      "image_width": 1280,
      "image_height": 582,
      "uploaded_at": "2020-11-17T12:16:18.835234+00:00"
    }
  ],
  "Email": "example@baserow.io",
  "Mobile No": "string",
  "Status": { "id": 1, "value": "Option", "color": "light-blue" },
  "Requirement": { "id": 1, "value": "Option", "color": "light-blue" }
}
```

---

### Create row

<span style="background-color:#337ab7; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">POST</span> `https://api.baserow.io/api/database/rows/table/{table_id}/`

#### Request sample
```bash
curl \
  -X POST \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "Full Name": "string",
    "Additional Details": "string",
    "Your Project": [
      {
        "name": "..."
      }
    ],
    "Email": "example@baserow.io",
    "Mobile No": "string",
    "Status": 1,
    "Requirement": 1
  }' \
  "https://api.baserow.io/api/database/rows/table/587918/?user_field_names=true"
```

#### Response sample
```json
{
  "id": 1,
  "order": "1.00000000000000000000",
  "Full Name": "string",
  "Additional Details": "string",
  "Your Project": [],
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
```

---

### Update row

<span style="background-color:#f0ad4e; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">PATCH</span> `https://api.baserow.io/api/database/rows/table/{table_id}/{row_id}/`

Updates an existing Queries row.

#### Path parameters
*   `row_id` (integer): The unique identifier of the row that needs to be updated.

#### Request sample
```bash
curl \
  -X PATCH \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "Full Name": "string",
    "Additional Details": "string",
    "Your Project": [
      {
        "name": "..."
      }
    ],
    "Email": "example@baserow.io",
    "Mobile No": "string",
    "Requirement": 1
  }' \
  "https://api.baserow.io/api/database/rows/table/587918/1/?user_field_names=true"
```

#### Response sample
```json
{
  "id": 1,
  "order": "1.00000000000000000000",
  "Full Name": "string",
  "Additional Details": "string",
  "Your Project": [],
  "Email": "example@baserow.io",
  "Mobile No": "string",
  "Status": null,
  "Requirement": {
    "id": 1,
    "value": "Option",
    "color": "light-blue"
  }
}
```

---

### Move row

<span style="background-color:#f0ad4e; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">PATCH</span> `https://api.baserow.io/api/database/rows/table/{table_id}/{row_id}/move/`

Moves an existing Queries row before another row. If no `before_id` is provided, then the row will be moved to the end of the table.

#### Path parameters
*   `row_id` (integer): Moves the row related to the value.

#### Query parameters
*   `before_id` (integer, optional): The row will be moved to the row related to the provided value. If not provided, then the row will be moved to the end.

#### Request sample
```bash
curl \
  -X PATCH \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/rows/table/587918/1/move/"
```

#### Response sample
```json
{
  "id": 1,
  "order": "1.00000000000000000000",
  "Full Name": "string",
  "Additional Details": "string",
  "Your Project": [],
  "Email": "example@baserow.io",
  "Mobile No": "string",
  "Status": null,
  "Requirement": null
}
```

---

### Delete row

<span style="background-color:#d9534f; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">DELETE</span> `https://api.baserow.io/api/database/rows/table/{table_id}/{row_id}/`

Deletes an existing Queries row.

#### Path parameters
*   `row_id` (integer): The unique identifier of the row that needs to be deleted.

#### Request sample
```bash
curl \
  -X DELETE \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/rows/table/587918/1/"
```

#### Response sample
An empty JSON object `{}` is returned upon successful deletion.

---

## File uploads

### Upload file

<span style="background-color:#337ab7; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">POST</span> `https://api.baserow.io/api/user-files/upload-file/`

Uploads a file to Baserow by uploading the file contents directly. A `file` multipart is expected containing the file contents.

#### Request sample
```bash
curl \
  -X POST \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  -F file=@some-file.png \
  "https://api.baserow.io/api/user-files/upload-file/"
```

#### Response sample
```json
{
  "url": "https://files.baserow.io/user_files/...",
  "thumbnails": {
    "tiny": { "url": "...", "width": 21, "height": 21 },
    "small": { "url": "...", "width": 48, "height": 48 }
  },
  "name": "...",
  "size": 22949,
  "mime_type": "image/png",
  "is_image": true,
  "image_width": 1280,
  "image_height": 582,
  "uploaded_at": "2020-11-17T12:16:18.835234+00:00"
}
```

### Upload file via URL

<span style="background-color:#337ab7; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">POST</span> `https://api.baserow.io/api/user-files/upload-via-url/`

Uploads a file to Baserow by downloading it from the provided URL. The response can then be used to upload a file to a row.

#### Request sample
```bash
curl \
  -X POST \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "url": "https://baserow.io/assets/photo.png"
  }' \
  "https://api.baserow.io/api/user-files/upload-via-url/"
```

#### Response sample
```json
{
  "url": "https://files.baserow.io/user_files/...",
  "thumbnails": {
    "tiny": { "url": "...", "width": 21, "height": 21 },
    "small": { "url": "...", "width": 48, "height": 48 }
  },
  "name": "...",
  "size": 22949,
  "mime_type": "image/png",
  "is_image": true,
  "image_width": 1280,
  "image_height": 582,
  "uploaded_at": "2020-11-17T12:16:18.835234+00:00"
}
```

---

## List all tables

<span style="background-color:#4CAF50; color:white; padding: 2px 8px; border-radius: 4px; font-weight:bold;">GET</span> `https://api.baserow.io/api/database/tables/`

Lists all the tables that the token has access to in combination with the token authentication. It lists all the tables that the token has either create, read, update or delete access to.

#### Request sample
```bash
curl \
  -X GET \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/tables/"
```

#### Response sample
```json
[
  {
    "id": 8,
    "name": "Customers",
    "order": 0,
    "database_id": 8
  }
]
```

---

## Filters

| Filter | Example value | Full example |
| :--- | :--- | :--- |
| equal | `string` | `field` is `string` |
| not_equal | `string` | `field` is not `string` |
| date_is | `UTC?Today` | `field` is on or before `UTC?Today` |
| date_is_not | `UTC?Today` | `field` is not on `UTC?Today` |
| date_is_before | `UTC?Today` | `field` is before `UTC?Today` |
| date_is_on_or_before | `UTC?Today` | `field` is on or before `UTC?Today` |
| date_is_after | `UTC?Today` | `field` is after `UTC?Today` |
| date_is_on_or_after | `UTC?Today` | `field` is on or after `UTC?Today` |
| date_is_within | `UTC?Today` | `field` is within `UTC?Today` |
| date_equal `(deprecated)` | `2020-01-01` | `field` is date `2020-01-01` |
| date_not_equal `(deprecated)` | `2020-01-01` | `field` is not date `2020-01-01` |
| date_equals_today `(deprecated)` | `UTC` | `field` is today `UTC` |
| ... and many more ... |
| has_value_lower_than | `string` | `field` has value lower than `string` |
| has_value_equal | `string` | `field` has value equal `string` |
| has_any_select_option_equal | `string` | `field` has any select option equal `string` |
| has_none_select_option_equal | `string` | `field` doesn't have select option equal `string` |
| contains | `string` | `field` contains `string` |
| contains_not | `string` | `field` doesn't contain `string` |
| contains_word | `string` | `field` contains word `string` |
| doesnt_contain_word | `string` | `field` doesn't contain word `string` |
| filename_contains | `string` | `field` filename contains `string` |
| has_file_type | `image | document` | `field` has file type `image | document` |
| files_lower_than | `2` | `field` files lower than `2` |
| length_is_lower_than | `5` | `field` length is lower than `5` |
| higher_than | `100` | `field` higher than `100` |
| higher_than_or_equal | `100` | `field` higher than or equal `100` |
| lower_than | `100` | `field` lower than `100` |
| lower_than_or_equal | `100` | `field` lower than or equal `100` |
| is_even_and_whole | `true` | `field` is even and whole `True` |
| single_select_equal | `1` | `field` is `1` |
| single_select_not_equal | `1` | `field` is not `1` |
| single_select_is_any_of | `1,2` | `field` is any of `1,2` |
| single_select_is_none_of | `1,2` | `field` is none of `1,2` |
| boolean | `true` | `field` is `True` |
| link_row_has | `1` | `field` has `1` |
| link_row_has_not | `1` | `field` doesn't have `1` |
| link_row_contains | `string` | `field` contains `string` |
| link_row_not_contains | `string` | `field` doesn't contain `string` |
| multiple_select_has | `1` | `field` has any of `1` |
| multiple_select_has_not | `1` | `field` doesn't have any of `1` |
| multiple_collaborators_has | `1` | `field` has any of `1` |
| multiple_collaborators_has_not | `1` | `field` doesn't have any of `1` |
| empty | `true` | `field` is empty |
| not_empty | `true` | `field` is not empty |
| user_is | `1` | `field` is `1` |
| user_is_not | `1` | `field` is not `1` |

---

## HTTP Errors

| Error Code | Name | Description |
| :--- | :--- | :--- |
| `200` | Ok | Request completed successfully. |
| `400` | Bad request | The request contains invalid values or the JSON could not be parsed. |
| `401` | Unauthorized | When you try to access an endpoint without a valid database token. |
| `404` | Not found | Row or table is not found. |
| `413` | Request Entity Too Large | The request exceeds the maximum allowed payload size. |
| `500` | Internal Server Error | The server encountered an unexpected condition. |
| `502` | Bad gateway | Baserow is restarting or an unexpected outage is in progress. |
| `503` | Service unavailable | The server could not process your request in time. |

### Sample Error Response (401 Unauthorized)
```json
{
  "error": "ERROR_NO_PERMISSION_TO_TABLE",
  "detail": "The token does not have permissions to the table."
}
```