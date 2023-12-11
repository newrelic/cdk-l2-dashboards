# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DashboardManager <a name="DashboardManager" id="@newrelic/cdk-dashboards.DashboardManager"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardManager.Initializer"></a>

```typescript
import { DashboardManager } from '@newrelic/cdk-dashboards'

new DashboardManager(scope: Construct, id: string, config: IDashboardConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.Initializer.parameter.config">config</a></code> | <code><a href="#@newrelic/cdk-dashboards.IDashboardConfiguration">IDashboardConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@newrelic/cdk-dashboards.DashboardManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@newrelic/cdk-dashboards.DashboardManager.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@newrelic/cdk-dashboards.DashboardManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@newrelic/cdk-dashboards.IDashboardConfiguration">IDashboardConfiguration</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.create">create</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.delete">delete</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.list">list</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.read">read</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.update">update</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@newrelic/cdk-dashboards.DashboardManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `create` <a name="create" id="@newrelic/cdk-dashboards.DashboardManager.create"></a>

```typescript
public create(accountId: number, dashboard: DashboardInput): IDashboardCreateResult
```

###### `accountId`<sup>Required</sup> <a name="accountId" id="@newrelic/cdk-dashboards.DashboardManager.create.parameter.accountId"></a>

- *Type:* number

---

###### `dashboard`<sup>Required</sup> <a name="dashboard" id="@newrelic/cdk-dashboards.DashboardManager.create.parameter.dashboard"></a>

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardInput">DashboardInput</a>

---

##### `delete` <a name="delete" id="@newrelic/cdk-dashboards.DashboardManager.delete"></a>

```typescript
public delete(guid: string): IDashboardDeleteResult
```

###### `guid`<sup>Required</sup> <a name="guid" id="@newrelic/cdk-dashboards.DashboardManager.delete.parameter.guid"></a>

- *Type:* string

---

##### `list` <a name="list" id="@newrelic/cdk-dashboards.DashboardManager.list"></a>

```typescript
public list(query?: string, cursor?: string, options?: IQueryOptions): IDashboardListResult
```

###### `query`<sup>Optional</sup> <a name="query" id="@newrelic/cdk-dashboards.DashboardManager.list.parameter.query"></a>

- *Type:* string

---

###### `cursor`<sup>Optional</sup> <a name="cursor" id="@newrelic/cdk-dashboards.DashboardManager.list.parameter.cursor"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@newrelic/cdk-dashboards.DashboardManager.list.parameter.options"></a>

- *Type:* <a href="#@newrelic/cdk-dashboards.IQueryOptions">IQueryOptions</a>

---

##### `read` <a name="read" id="@newrelic/cdk-dashboards.DashboardManager.read"></a>

```typescript
public read(guid: string): IDashboardReadResult
```

###### `guid`<sup>Required</sup> <a name="guid" id="@newrelic/cdk-dashboards.DashboardManager.read.parameter.guid"></a>

- *Type:* string

---

##### `update` <a name="update" id="@newrelic/cdk-dashboards.DashboardManager.update"></a>

```typescript
public update(guid: string, dashboard: DashboardInput): IDashboardUpdateResult
```

###### `guid`<sup>Required</sup> <a name="guid" id="@newrelic/cdk-dashboards.DashboardManager.update.parameter.guid"></a>

- *Type:* string

---

###### `dashboard`<sup>Required</sup> <a name="dashboard" id="@newrelic/cdk-dashboards.DashboardManager.update.parameter.dashboard"></a>

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardInput">DashboardInput</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@newrelic/cdk-dashboards.DashboardManager.isConstruct"></a>

```typescript
import { DashboardManager } from '@newrelic/cdk-dashboards'

DashboardManager.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@newrelic/cdk-dashboards.DashboardManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@newrelic/cdk-dashboards.DashboardManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---



## Classes <a name="Classes" id="Classes"></a>

### DashboardAreaWidgetConfiguration <a name="DashboardAreaWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardAreaWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardAreaWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQuery[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]

---


### DashboardAreaWidgetConfigurationInput <a name="DashboardAreaWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardAreaWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardAreaWidgetConfigurationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQueryInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]

---


### DashboardBarWidgetConfiguration <a name="DashboardBarWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardBarWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardBarWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQuery[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]

---


### DashboardBarWidgetConfigurationInput <a name="DashboardBarWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardBarWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardBarWidgetConfigurationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQueryInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]

---


### DashboardBillboardWidgetConfiguration <a name="DashboardBillboardWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardBillboardWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardBillboardWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.property.thresholds">thresholds</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold">DashboardBillboardWidgetThreshold</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQuery[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]

---

##### `thresholds`<sup>Optional</sup> <a name="thresholds" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration.property.thresholds"></a>

```typescript
public readonly thresholds: DashboardBillboardWidgetThreshold[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold">DashboardBillboardWidgetThreshold</a>[]

---


### DashboardBillboardWidgetConfigurationInput <a name="DashboardBillboardWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardBillboardWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardBillboardWidgetConfigurationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.property.thresholds">thresholds</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput">DashboardBillboardWidgetThresholdInput</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQueryInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]

---

##### `thresholds`<sup>Optional</sup> <a name="thresholds" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput.property.thresholds"></a>

```typescript
public readonly thresholds: DashboardBillboardWidgetThresholdInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput">DashboardBillboardWidgetThresholdInput</a>[]

---


### DashboardBillboardWidgetThreshold <a name="DashboardBillboardWidgetThreshold" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold.Initializer"></a>

```typescript
import { DashboardBillboardWidgetThreshold } from '@newrelic/cdk-dashboards'

new DashboardBillboardWidgetThreshold(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold.property.alertSeverity">alertSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold.property.value">value</a></code> | <code>number</code> | *No description.* |

---

##### `alertSeverity`<sup>Optional</sup> <a name="alertSeverity" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold.property.alertSeverity"></a>

```typescript
public readonly alertSeverity: string;
```

- *Type:* string

---

##### `value`<sup>Optional</sup> <a name="value" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThreshold.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---


### DashboardBillboardWidgetThresholdInput <a name="DashboardBillboardWidgetThresholdInput" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput.Initializer"></a>

```typescript
import { DashboardBillboardWidgetThresholdInput } from '@newrelic/cdk-dashboards'

new DashboardBillboardWidgetThresholdInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput.property.alertSeverity">alertSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput.property.value">value</a></code> | <code>number</code> | *No description.* |

---

##### `alertSeverity`<sup>Optional</sup> <a name="alertSeverity" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput.property.alertSeverity"></a>

```typescript
public readonly alertSeverity: string;
```

- *Type:* string

---

##### `value`<sup>Optional</sup> <a name="value" id="@newrelic/cdk-dashboards.DashboardBillboardWidgetThresholdInput.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---


### DashboardCreateError <a name="DashboardCreateError" id="@newrelic/cdk-dashboards.DashboardCreateError"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardCreateError.Initializer"></a>

```typescript
import { DashboardCreateError } from '@newrelic/cdk-dashboards'

new DashboardCreateError(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardCreateError.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardCreateError.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardCreateError.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardCreateError.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/cdk-dashboards.DashboardCreateError.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@newrelic/cdk-dashboards.DashboardCreateError.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### DashboardCreateResult <a name="DashboardCreateResult" id="@newrelic/cdk-dashboards.DashboardCreateResult"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardCreateResult.Initializer"></a>

```typescript
import { DashboardCreateResult } from '@newrelic/cdk-dashboards'

new DashboardCreateResult(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardCreateResult.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardCreateResult.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardCreateResult.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardCreateResult.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardCreateResult.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardCreateResult.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardCreateResult.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardCreateResult.property.entityResult">entityResult</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult">DashboardEntityResult</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardCreateResult.property.errors">errors</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardCreateError">DashboardCreateError</a>[]</code> | *No description.* |

---

##### `entityResult`<sup>Optional</sup> <a name="entityResult" id="@newrelic/cdk-dashboards.DashboardCreateResult.property.entityResult"></a>

```typescript
public readonly entityResult: DashboardEntityResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardEntityResult">DashboardEntityResult</a>

---

##### `errors`<sup>Optional</sup> <a name="errors" id="@newrelic/cdk-dashboards.DashboardCreateResult.property.errors"></a>

```typescript
public readonly errors: DashboardCreateError[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardCreateError">DashboardCreateError</a>[]

---


### DashboardDeleteError <a name="DashboardDeleteError" id="@newrelic/cdk-dashboards.DashboardDeleteError"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardDeleteError.Initializer"></a>

```typescript
import { DashboardDeleteError } from '@newrelic/cdk-dashboards'

new DashboardDeleteError(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteError.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardDeleteError.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteError.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteError.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/cdk-dashboards.DashboardDeleteError.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@newrelic/cdk-dashboards.DashboardDeleteError.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### DashboardDeleteResult <a name="DashboardDeleteResult" id="@newrelic/cdk-dashboards.DashboardDeleteResult"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardDeleteResult.Initializer"></a>

```typescript
import { DashboardDeleteResult } from '@newrelic/cdk-dashboards'

new DashboardDeleteResult(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteResult.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardDeleteResult.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteResult.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardDeleteResult.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardDeleteResult.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardDeleteResult.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardDeleteResult.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteResult.property.errors">errors</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteError">DashboardDeleteError</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteResult.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `errors`<sup>Optional</sup> <a name="errors" id="@newrelic/cdk-dashboards.DashboardDeleteResult.property.errors"></a>

```typescript
public readonly errors: DashboardDeleteError[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardDeleteError">DashboardDeleteError</a>[]

---

##### `status`<sup>Optional</sup> <a name="status" id="@newrelic/cdk-dashboards.DashboardDeleteResult.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---


### DashboardEntityResult <a name="DashboardEntityResult" id="@newrelic/cdk-dashboards.DashboardEntityResult"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardEntityResult.Initializer"></a>

```typescript
import { DashboardEntityResult } from '@newrelic/cdk-dashboards'

new DashboardEntityResult(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardEntityResult.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardEntityResult.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardEntityResult.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardEntityResult.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardEntityResult.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.dashboardParentGuid">dashboardParentGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.indexedAt">indexedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.owner">owner</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardOwnerInfo">DashboardOwnerInfo</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.pages">pages</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardPage">DashboardPage</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.permalink">permalink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.tags">tags</a></code> | <code><a href="#@newrelic/cdk-dashboards.Tag">Tag</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.tagsWithMetadata">tagsWithMetadata</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult.property.variables">variables</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariable">DashboardVariable</a>[]</code> | *No description.* |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dashboardParentGuid`<sup>Optional</sup> <a name="dashboardParentGuid" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.dashboardParentGuid"></a>

```typescript
public readonly dashboardParentGuid: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `indexedAt`<sup>Optional</sup> <a name="indexedAt" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.indexedAt"></a>

```typescript
public readonly indexedAt: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.owner"></a>

```typescript
public readonly owner: DashboardOwnerInfo;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardOwnerInfo">DashboardOwnerInfo</a>

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.pages"></a>

```typescript
public readonly pages: DashboardPage[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardPage">DashboardPage</a>[]

---

##### `permalink`<sup>Optional</sup> <a name="permalink" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* string

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.Tag">Tag</a>[]

---

##### `tagsWithMetadata`<sup>Optional</sup> <a name="tagsWithMetadata" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.tagsWithMetadata"></a>

```typescript
public readonly tagsWithMetadata: any[];
```

- *Type:* any[]

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@newrelic/cdk-dashboards.DashboardEntityResult.property.variables"></a>

```typescript
public readonly variables: DashboardVariable[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariable">DashboardVariable</a>[]

---


### DashboardInput <a name="DashboardInput" id="@newrelic/cdk-dashboards.DashboardInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardInput.Initializer"></a>

```typescript
import { DashboardInput } from '@newrelic/cdk-dashboards'

new DashboardInput()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardInput.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardInput.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardInput.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardInput.property.pages">pages</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardPageInput">DashboardPageInput</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardInput.property.variables">variables</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput">DashboardVariableInput</a>[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@newrelic/cdk-dashboards.DashboardInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@newrelic/cdk-dashboards.DashboardInput.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@newrelic/cdk-dashboards.DashboardInput.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@newrelic/cdk-dashboards.DashboardInput.property.pages"></a>

```typescript
public readonly pages: DashboardPageInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardPageInput">DashboardPageInput</a>[]

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@newrelic/cdk-dashboards.DashboardInput.property.variables"></a>

```typescript
public readonly variables: DashboardVariableInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableInput">DashboardVariableInput</a>[]

---


### DashboardLineWidgetConfiguration <a name="DashboardLineWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardLineWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardLineWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQuery[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]

---


### DashboardLineWidgetConfigurationInput <a name="DashboardLineWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardLineWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardLineWidgetConfigurationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQueryInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]

---


### DashboardMarkdownWidgetConfiguration <a name="DashboardMarkdownWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardMarkdownWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardMarkdownWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration.property.text">text</a></code> | <code>string</code> | *No description.* |

---

##### `text`<sup>Required</sup> <a name="text" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---


### DashboardMarkdownWidgetConfigurationInput <a name="DashboardMarkdownWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardMarkdownWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardMarkdownWidgetConfigurationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput.property.text">text</a></code> | <code>string</code> | *No description.* |

---

##### `text`<sup>Required</sup> <a name="text" id="@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---


### DashboardOwnerInfo <a name="DashboardOwnerInfo" id="@newrelic/cdk-dashboards.DashboardOwnerInfo"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardOwnerInfo.Initializer"></a>

```typescript
import { DashboardOwnerInfo } from '@newrelic/cdk-dashboards'

new DashboardOwnerInfo(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardOwnerInfo.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardOwnerInfo.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardOwnerInfo.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardOwnerInfo.property.userId">userId</a></code> | <code>number</code> | *No description.* |

---

##### `email`<sup>Optional</sup> <a name="email" id="@newrelic/cdk-dashboards.DashboardOwnerInfo.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@newrelic/cdk-dashboards.DashboardOwnerInfo.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---


### DashboardPage <a name="DashboardPage" id="@newrelic/cdk-dashboards.DashboardPage"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardPage.Initializer"></a>

```typescript
import { DashboardPage } from '@newrelic/cdk-dashboards'

new DashboardPage(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardPage.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardPage.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardPage.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardPage.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardPage.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.property.owner">owner</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardOwnerInfo">DashboardOwnerInfo</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPage.property.widgets">widgets</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidget">DashboardWidget</a>[]</code> | *No description.* |

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@newrelic/cdk-dashboards.DashboardPage.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@newrelic/cdk-dashboards.DashboardPage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@newrelic/cdk-dashboards.DashboardPage.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@newrelic/cdk-dashboards.DashboardPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@newrelic/cdk-dashboards.DashboardPage.property.owner"></a>

```typescript
public readonly owner: DashboardOwnerInfo;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardOwnerInfo">DashboardOwnerInfo</a>

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@newrelic/cdk-dashboards.DashboardPage.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `widgets`<sup>Optional</sup> <a name="widgets" id="@newrelic/cdk-dashboards.DashboardPage.property.widgets"></a>

```typescript
public readonly widgets: DashboardWidget[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidget">DashboardWidget</a>[]

---


### DashboardPageInput <a name="DashboardPageInput" id="@newrelic/cdk-dashboards.DashboardPageInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardPageInput.Initializer"></a>

```typescript
import { DashboardPageInput } from '@newrelic/cdk-dashboards'

new DashboardPageInput()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPageInput.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPageInput.property.widgets">widgets</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput">DashboardWidgetInput</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPageInput.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPageInput.property.guid">guid</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@newrelic/cdk-dashboards.DashboardPageInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `widgets`<sup>Required</sup> <a name="widgets" id="@newrelic/cdk-dashboards.DashboardPageInput.property.widgets"></a>

```typescript
public readonly widgets: DashboardWidgetInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetInput">DashboardWidgetInput</a>[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@newrelic/cdk-dashboards.DashboardPageInput.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@newrelic/cdk-dashboards.DashboardPageInput.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---


### DashboardPieWidgetConfiguration <a name="DashboardPieWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardPieWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardPieWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQuery[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]

---


### DashboardPieWidgetConfigurationInput <a name="DashboardPieWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardPieWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardPieWidgetConfigurationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQueryInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]

---


### DashboardTableWidgetConfiguration <a name="DashboardTableWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardTableWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardTableWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQuery[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery">DashboardWidgetNRQLQuery</a>[]

---


### DashboardTableWidgetConfigurationInput <a name="DashboardTableWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardTableWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardTableWidgetConfigurationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.property.nrqlQueries">nrqlQueries</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]</code> | *No description.* |

---

##### `nrqlQueries`<sup>Optional</sup> <a name="nrqlQueries" id="@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput.property.nrqlQueries"></a>

```typescript
public readonly nrqlQueries: DashboardWidgetNRQLQueryInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput">DashboardWidgetNRQLQueryInput</a>[]

---


### DashboardUpdateError <a name="DashboardUpdateError" id="@newrelic/cdk-dashboards.DashboardUpdateError"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardUpdateError.Initializer"></a>

```typescript
import { DashboardUpdateError } from '@newrelic/cdk-dashboards'

new DashboardUpdateError(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateError.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardUpdateError.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateError.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateError.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/cdk-dashboards.DashboardUpdateError.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@newrelic/cdk-dashboards.DashboardUpdateError.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### DashboardUpdateResult <a name="DashboardUpdateResult" id="@newrelic/cdk-dashboards.DashboardUpdateResult"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardUpdateResult.Initializer"></a>

```typescript
import { DashboardUpdateResult } from '@newrelic/cdk-dashboards'

new DashboardUpdateResult(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateResult.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardUpdateResult.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateResult.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardUpdateResult.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardUpdateResult.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardUpdateResult.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardUpdateResult.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateResult.property.entityResult">entityResult</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult">DashboardEntityResult</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateResult.property.errors">errors</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateError">DashboardUpdateError</a>[]</code> | *No description.* |

---

##### `entityResult`<sup>Optional</sup> <a name="entityResult" id="@newrelic/cdk-dashboards.DashboardUpdateResult.property.entityResult"></a>

```typescript
public readonly entityResult: DashboardEntityResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardEntityResult">DashboardEntityResult</a>

---

##### `errors`<sup>Optional</sup> <a name="errors" id="@newrelic/cdk-dashboards.DashboardUpdateResult.property.errors"></a>

```typescript
public readonly errors: DashboardUpdateError[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardUpdateError">DashboardUpdateError</a>[]

---


### DashboardVariable <a name="DashboardVariable" id="@newrelic/cdk-dashboards.DashboardVariable"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariable.Initializer"></a>

```typescript
import { DashboardVariable } from '@newrelic/cdk-dashboards'

new DashboardVariable(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariable.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardVariable.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardVariable.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardVariable.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardVariable.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.defaultValue">defaultValue</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValue">DashboardVariableDefaultValue</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.defaultValues">defaultValues</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItem">DashboardVariableDefaultItem</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.isMultiSelection">isMultiSelection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.items">items</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItem">DashboardVariableEnumItem</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQuery">DashboardVariableNRQLQuery</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.replacementStrategy">replacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariable.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@newrelic/cdk-dashboards.DashboardVariable.property.defaultValue"></a>

```typescript
public readonly defaultValue: DashboardVariableDefaultValue;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValue">DashboardVariableDefaultValue</a>

---

##### `defaultValues`<sup>Optional</sup> <a name="defaultValues" id="@newrelic/cdk-dashboards.DashboardVariable.property.defaultValues"></a>

```typescript
public readonly defaultValues: DashboardVariableDefaultItem[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItem">DashboardVariableDefaultItem</a>[]

---

##### `isMultiSelection`<sup>Optional</sup> <a name="isMultiSelection" id="@newrelic/cdk-dashboards.DashboardVariable.property.isMultiSelection"></a>

```typescript
public readonly isMultiSelection: boolean;
```

- *Type:* boolean

---

##### `items`<sup>Optional</sup> <a name="items" id="@newrelic/cdk-dashboards.DashboardVariable.property.items"></a>

```typescript
public readonly items: DashboardVariableEnumItem[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItem">DashboardVariableEnumItem</a>[]

---

##### `name`<sup>Optional</sup> <a name="name" id="@newrelic/cdk-dashboards.DashboardVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nrqlQuery`<sup>Optional</sup> <a name="nrqlQuery" id="@newrelic/cdk-dashboards.DashboardVariable.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: DashboardVariableNRQLQuery;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQuery">DashboardVariableNRQLQuery</a>

---

##### `replacementStrategy`<sup>Optional</sup> <a name="replacementStrategy" id="@newrelic/cdk-dashboards.DashboardVariable.property.replacementStrategy"></a>

```typescript
public readonly replacementStrategy: string;
```

- *Type:* string

---

##### `title`<sup>Optional</sup> <a name="title" id="@newrelic/cdk-dashboards.DashboardVariable.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Optional</sup> <a name="type" id="@newrelic/cdk-dashboards.DashboardVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


### DashboardVariableDefaultItem <a name="DashboardVariableDefaultItem" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem.Initializer"></a>

```typescript
import { DashboardVariableDefaultItem } from '@newrelic/cdk-dashboards'

new DashboardVariableDefaultItem(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItem.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItem.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItem.property.value">value</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValue">DashboardVariableDefaultValue</a></code> | *No description.* |

---

##### `value`<sup>Optional</sup> <a name="value" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItem.property.value"></a>

```typescript
public readonly value: DashboardVariableDefaultValue;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValue">DashboardVariableDefaultValue</a>

---


### DashboardVariableDefaultItemInput <a name="DashboardVariableDefaultItemInput" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.Initializer"></a>

```typescript
import { DashboardVariableDefaultItemInput } from '@newrelic/cdk-dashboards'

new DashboardVariableDefaultItemInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.property.value">value</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput">DashboardVariableDefaultValueInput</a></code> | *No description.* |

---

##### `value`<sup>Optional</sup> <a name="value" id="@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput.property.value"></a>

```typescript
public readonly value: DashboardVariableDefaultValueInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput">DashboardVariableDefaultValueInput</a>

---


### DashboardVariableDefaultValue <a name="DashboardVariableDefaultValue" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValue"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValue.Initializer"></a>

```typescript
import { DashboardVariableDefaultValue } from '@newrelic/cdk-dashboards'

new DashboardVariableDefaultValue(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValue.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValue.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValue.property.string">string</a></code> | <code>string</code> | *No description.* |

---

##### `string`<sup>Optional</sup> <a name="string" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValue.property.string"></a>

```typescript
public readonly string: string;
```

- *Type:* string

---


### DashboardVariableDefaultValueInput <a name="DashboardVariableDefaultValueInput" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput.Initializer"></a>

```typescript
import { DashboardVariableDefaultValueInput } from '@newrelic/cdk-dashboards'

new DashboardVariableDefaultValueInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput.property.string">string</a></code> | <code>string</code> | *No description.* |

---

##### `string`<sup>Optional</sup> <a name="string" id="@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput.property.string"></a>

```typescript
public readonly string: string;
```

- *Type:* string

---


### DashboardVariableEnumItem <a name="DashboardVariableEnumItem" id="@newrelic/cdk-dashboards.DashboardVariableEnumItem"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableEnumItem.Initializer"></a>

```typescript
import { DashboardVariableEnumItem } from '@newrelic/cdk-dashboards'

new DashboardVariableEnumItem(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItem.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableEnumItem.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItem.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItem.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `title`<sup>Optional</sup> <a name="title" id="@newrelic/cdk-dashboards.DashboardVariableEnumItem.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `value`<sup>Optional</sup> <a name="value" id="@newrelic/cdk-dashboards.DashboardVariableEnumItem.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---


### DashboardVariableEnumItemInput <a name="DashboardVariableEnumItemInput" id="@newrelic/cdk-dashboards.DashboardVariableEnumItemInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableEnumItemInput.Initializer"></a>

```typescript
import { DashboardVariableEnumItemInput } from '@newrelic/cdk-dashboards'

new DashboardVariableEnumItemInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItemInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableEnumItemInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItemInput.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItemInput.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="@newrelic/cdk-dashboards.DashboardVariableEnumItemInput.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `title`<sup>Optional</sup> <a name="title" id="@newrelic/cdk-dashboards.DashboardVariableEnumItemInput.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---


### DashboardVariableInput <a name="DashboardVariableInput" id="@newrelic/cdk-dashboards.DashboardVariableInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableInput.Initializer"></a>

```typescript
import { DashboardVariableInput } from '@newrelic/cdk-dashboards'

new DashboardVariableInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableInput.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardVariableInput.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardVariableInput.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardVariableInput.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardVariableInput.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.defaultValue">defaultValue</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput">DashboardVariableDefaultValueInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.defaultValues">defaultValues</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput">DashboardVariableDefaultItemInput</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.isMultiSelection">isMultiSelection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.items">items</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItemInput">DashboardVariableEnumItemInput</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput">DashboardVariableNRQLQueryInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.replacementStrategy">replacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableInput.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.defaultValue"></a>

```typescript
public readonly defaultValue: DashboardVariableDefaultValueInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultValueInput">DashboardVariableDefaultValueInput</a>

---

##### `defaultValues`<sup>Optional</sup> <a name="defaultValues" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.defaultValues"></a>

```typescript
public readonly defaultValues: DashboardVariableDefaultItemInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableDefaultItemInput">DashboardVariableDefaultItemInput</a>[]

---

##### `isMultiSelection`<sup>Optional</sup> <a name="isMultiSelection" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.isMultiSelection"></a>

```typescript
public readonly isMultiSelection: boolean;
```

- *Type:* boolean

---

##### `items`<sup>Optional</sup> <a name="items" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.items"></a>

```typescript
public readonly items: DashboardVariableEnumItemInput[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableEnumItemInput">DashboardVariableEnumItemInput</a>[]

---

##### `nrqlQuery`<sup>Optional</sup> <a name="nrqlQuery" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.nrqlQuery"></a>

```typescript
public readonly nrqlQuery: DashboardVariableNRQLQueryInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput">DashboardVariableNRQLQueryInput</a>

---

##### `replacementStrategy`<sup>Optional</sup> <a name="replacementStrategy" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.replacementStrategy"></a>

```typescript
public readonly replacementStrategy: string;
```

- *Type:* string

---

##### `title`<sup>Optional</sup> <a name="title" id="@newrelic/cdk-dashboards.DashboardVariableInput.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---


### DashboardVariableNRQLQuery <a name="DashboardVariableNRQLQuery" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQuery"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQuery.Initializer"></a>

```typescript
import { DashboardVariableNRQLQuery } from '@newrelic/cdk-dashboards'

new DashboardVariableNRQLQuery(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQuery.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQuery.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQuery.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQuery.property.accountIds">accountIds</a></code> | <code>number[]</code> | *No description.* |

---

##### `query`<sup>Required</sup> <a name="query" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQuery.property.accountIds"></a>

```typescript
public readonly accountIds: number[];
```

- *Type:* number[]

---


### DashboardVariableNRQLQueryInput <a name="DashboardVariableNRQLQueryInput" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput.Initializer"></a>

```typescript
import { DashboardVariableNRQLQueryInput } from '@newrelic/cdk-dashboards'

new DashboardVariableNRQLQueryInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput.property.accountIds">accountIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput.property.query">query</a></code> | <code>string</code> | *No description.* |

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput.property.accountIds"></a>

```typescript
public readonly accountIds: number[];
```

- *Type:* number[]

---

##### `query`<sup>Required</sup> <a name="query" id="@newrelic/cdk-dashboards.DashboardVariableNRQLQueryInput.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---


### DashboardWidget <a name="DashboardWidget" id="@newrelic/cdk-dashboards.DashboardWidget"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidget.Initializer"></a>

```typescript
import { DashboardWidget } from '@newrelic/cdk-dashboards'

new DashboardWidget(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidget.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardWidget.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardWidget.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardWidget.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardWidget.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.property.rawConfiguration">rawConfiguration</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.property.visualization">visualization</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualization">DashboardWidgetVisualization</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.property.configuration">configuration</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration">DashboardWidgetConfiguration</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.property.layout">layout</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayout">DashboardWidgetLayout</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.property.linkedEntities">linkedEntities</a></code> | <code>any[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidget.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="@newrelic/cdk-dashboards.DashboardWidget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rawConfiguration`<sup>Required</sup> <a name="rawConfiguration" id="@newrelic/cdk-dashboards.DashboardWidget.property.rawConfiguration"></a>

```typescript
public readonly rawConfiguration: number[];
```

- *Type:* number[]

---

##### `visualization`<sup>Required</sup> <a name="visualization" id="@newrelic/cdk-dashboards.DashboardWidget.property.visualization"></a>

```typescript
public readonly visualization: DashboardWidgetVisualization;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualization">DashboardWidgetVisualization</a>

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@newrelic/cdk-dashboards.DashboardWidget.property.configuration"></a>

```typescript
public readonly configuration: DashboardWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration">DashboardWidgetConfiguration</a>

---

##### `layout`<sup>Optional</sup> <a name="layout" id="@newrelic/cdk-dashboards.DashboardWidget.property.layout"></a>

```typescript
public readonly layout: DashboardWidgetLayout;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetLayout">DashboardWidgetLayout</a>

---

##### `linkedEntities`<sup>Optional</sup> <a name="linkedEntities" id="@newrelic/cdk-dashboards.DashboardWidget.property.linkedEntities"></a>

```typescript
public readonly linkedEntities: any[];
```

- *Type:* any[]

---

##### `title`<sup>Optional</sup> <a name="title" id="@newrelic/cdk-dashboards.DashboardWidget.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---


### DashboardWidgetConfiguration <a name="DashboardWidgetConfiguration" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.Initializer"></a>

```typescript
import { DashboardWidgetConfiguration } from '@newrelic/cdk-dashboards'

new DashboardWidgetConfiguration(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.Initializer.parameter.source"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.convertValues">convertValues</a></code> | *No description.* |

---

##### `convertValues` <a name="convertValues" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.convertValues"></a>

```typescript
public convertValues(a: any, classs: any, asMap?: boolean): any
```

###### `a`<sup>Required</sup> <a name="a" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.convertValues.parameter.a"></a>

- *Type:* any

---

###### `classs`<sup>Required</sup> <a name="classs" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.convertValues.parameter.classs"></a>

- *Type:* any

---

###### `asMap`<sup>Optional</sup> <a name="asMap" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.convertValues.parameter.asMap"></a>

- *Type:* boolean

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.area">area</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration">DashboardAreaWidgetConfiguration</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.bar">bar</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration">DashboardBarWidgetConfiguration</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.billboard">billboard</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration">DashboardBillboardWidgetConfiguration</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.line">line</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration">DashboardLineWidgetConfiguration</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.markdown">markdown</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration">DashboardMarkdownWidgetConfiguration</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.pie">pie</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration">DashboardPieWidgetConfiguration</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.table">table</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration">DashboardTableWidgetConfiguration</a></code> | *No description.* |

---

##### `area`<sup>Optional</sup> <a name="area" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.area"></a>

```typescript
public readonly area: DashboardAreaWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfiguration">DashboardAreaWidgetConfiguration</a>

---

##### `bar`<sup>Optional</sup> <a name="bar" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.bar"></a>

```typescript
public readonly bar: DashboardBarWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfiguration">DashboardBarWidgetConfiguration</a>

---

##### `billboard`<sup>Optional</sup> <a name="billboard" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.billboard"></a>

```typescript
public readonly billboard: DashboardBillboardWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfiguration">DashboardBillboardWidgetConfiguration</a>

---

##### `line`<sup>Optional</sup> <a name="line" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.line"></a>

```typescript
public readonly line: DashboardLineWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfiguration">DashboardLineWidgetConfiguration</a>

---

##### `markdown`<sup>Optional</sup> <a name="markdown" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.markdown"></a>

```typescript
public readonly markdown: DashboardMarkdownWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfiguration">DashboardMarkdownWidgetConfiguration</a>

---

##### `pie`<sup>Optional</sup> <a name="pie" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.pie"></a>

```typescript
public readonly pie: DashboardPieWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfiguration">DashboardPieWidgetConfiguration</a>

---

##### `table`<sup>Optional</sup> <a name="table" id="@newrelic/cdk-dashboards.DashboardWidgetConfiguration.property.table"></a>

```typescript
public readonly table: DashboardTableWidgetConfiguration;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfiguration">DashboardTableWidgetConfiguration</a>

---


### DashboardWidgetConfigurationInput <a name="DashboardWidgetConfigurationInput" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.Initializer"></a>

```typescript
import { DashboardWidgetConfigurationInput } from '@newrelic/cdk-dashboards'

new DashboardWidgetConfigurationInput()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.area">area</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput">DashboardAreaWidgetConfigurationInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.bar">bar</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput">DashboardBarWidgetConfigurationInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.billboard">billboard</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput">DashboardBillboardWidgetConfigurationInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.line">line</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput">DashboardLineWidgetConfigurationInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.markdown">markdown</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput">DashboardMarkdownWidgetConfigurationInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.pie">pie</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput">DashboardPieWidgetConfigurationInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.table">table</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput">DashboardTableWidgetConfigurationInput</a></code> | *No description.* |

---

##### `area`<sup>Optional</sup> <a name="area" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.area"></a>

```typescript
public readonly area: DashboardAreaWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardAreaWidgetConfigurationInput">DashboardAreaWidgetConfigurationInput</a>

---

##### `bar`<sup>Optional</sup> <a name="bar" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.bar"></a>

```typescript
public readonly bar: DashboardBarWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardBarWidgetConfigurationInput">DashboardBarWidgetConfigurationInput</a>

---

##### `billboard`<sup>Optional</sup> <a name="billboard" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.billboard"></a>

```typescript
public readonly billboard: DashboardBillboardWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardBillboardWidgetConfigurationInput">DashboardBillboardWidgetConfigurationInput</a>

---

##### `line`<sup>Optional</sup> <a name="line" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.line"></a>

```typescript
public readonly line: DashboardLineWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardLineWidgetConfigurationInput">DashboardLineWidgetConfigurationInput</a>

---

##### `markdown`<sup>Optional</sup> <a name="markdown" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.markdown"></a>

```typescript
public readonly markdown: DashboardMarkdownWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardMarkdownWidgetConfigurationInput">DashboardMarkdownWidgetConfigurationInput</a>

---

##### `pie`<sup>Optional</sup> <a name="pie" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.pie"></a>

```typescript
public readonly pie: DashboardPieWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardPieWidgetConfigurationInput">DashboardPieWidgetConfigurationInput</a>

---

##### `table`<sup>Optional</sup> <a name="table" id="@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput.property.table"></a>

```typescript
public readonly table: DashboardTableWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardTableWidgetConfigurationInput">DashboardTableWidgetConfigurationInput</a>

---


### DashboardWidgetInput <a name="DashboardWidgetInput" id="@newrelic/cdk-dashboards.DashboardWidgetInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetInput.Initializer"></a>

```typescript
import { DashboardWidgetInput } from '@newrelic/cdk-dashboards'

new DashboardWidgetInput()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput.property.configuration">configuration</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput">DashboardWidgetConfigurationInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput.property.layout">layout</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayoutInput">DashboardWidgetLayoutInput</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput.property.rawConfiguration">rawConfiguration</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetInput.property.visualization">visualization</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput">DashboardWidgetVisualizationInput</a></code> | *No description.* |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@newrelic/cdk-dashboards.DashboardWidgetInput.property.configuration"></a>

```typescript
public readonly configuration: DashboardWidgetConfigurationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetConfigurationInput">DashboardWidgetConfigurationInput</a>

---

##### `id`<sup>Optional</sup> <a name="id" id="@newrelic/cdk-dashboards.DashboardWidgetInput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `layout`<sup>Optional</sup> <a name="layout" id="@newrelic/cdk-dashboards.DashboardWidgetInput.property.layout"></a>

```typescript
public readonly layout: DashboardWidgetLayoutInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetLayoutInput">DashboardWidgetLayoutInput</a>

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="linkedEntityGuids" id="@newrelic/cdk-dashboards.DashboardWidgetInput.property.linkedEntityGuids"></a>

```typescript
public readonly linkedEntityGuids: string[];
```

- *Type:* string[]

---

##### `rawConfiguration`<sup>Optional</sup> <a name="rawConfiguration" id="@newrelic/cdk-dashboards.DashboardWidgetInput.property.rawConfiguration"></a>

```typescript
public readonly rawConfiguration: number[];
```

- *Type:* number[]

---

##### `title`<sup>Optional</sup> <a name="title" id="@newrelic/cdk-dashboards.DashboardWidgetInput.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `visualization`<sup>Optional</sup> <a name="visualization" id="@newrelic/cdk-dashboards.DashboardWidgetInput.property.visualization"></a>

```typescript
public readonly visualization: DashboardWidgetVisualizationInput;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput">DashboardWidgetVisualizationInput</a>

---


### DashboardWidgetLayout <a name="DashboardWidgetLayout" id="@newrelic/cdk-dashboards.DashboardWidgetLayout"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetLayout.Initializer"></a>

```typescript
import { DashboardWidgetLayout } from '@newrelic/cdk-dashboards'

new DashboardWidgetLayout(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayout.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidgetLayout.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayout.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayout.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayout.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayout.property.width">width</a></code> | <code>number</code> | *No description.* |

---

##### `column`<sup>Optional</sup> <a name="column" id="@newrelic/cdk-dashboards.DashboardWidgetLayout.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Optional</sup> <a name="height" id="@newrelic/cdk-dashboards.DashboardWidgetLayout.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `row`<sup>Optional</sup> <a name="row" id="@newrelic/cdk-dashboards.DashboardWidgetLayout.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `width`<sup>Optional</sup> <a name="width" id="@newrelic/cdk-dashboards.DashboardWidgetLayout.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---


### DashboardWidgetLayoutInput <a name="DashboardWidgetLayoutInput" id="@newrelic/cdk-dashboards.DashboardWidgetLayoutInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.Initializer"></a>

```typescript
import { DashboardWidgetLayoutInput } from '@newrelic/cdk-dashboards'

new DashboardWidgetLayoutInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.column">column</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.row">row</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.width">width</a></code> | <code>number</code> | *No description.* |

---

##### `column`<sup>Optional</sup> <a name="column" id="@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.column"></a>

```typescript
public readonly column: number;
```

- *Type:* number

---

##### `height`<sup>Optional</sup> <a name="height" id="@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `row`<sup>Optional</sup> <a name="row" id="@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.row"></a>

```typescript
public readonly row: number;
```

- *Type:* number

---

##### `width`<sup>Optional</sup> <a name="width" id="@newrelic/cdk-dashboards.DashboardWidgetLayoutInput.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---


### DashboardWidgetNRQLQuery <a name="DashboardWidgetNRQLQuery" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery.Initializer"></a>

```typescript
import { DashboardWidgetNRQLQuery } from '@newrelic/cdk-dashboards'

new DashboardWidgetNRQLQuery(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery.property.query">query</a></code> | <code>string</code> | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---


### DashboardWidgetNRQLQueryInput <a name="DashboardWidgetNRQLQueryInput" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput.Initializer"></a>

```typescript
import { DashboardWidgetNRQLQueryInput } from '@newrelic/cdk-dashboards'

new DashboardWidgetNRQLQueryInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput.property.query">query</a></code> | <code>string</code> | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@newrelic/cdk-dashboards.DashboardWidgetNRQLQueryInput.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---


### DashboardWidgetVisualization <a name="DashboardWidgetVisualization" id="@newrelic/cdk-dashboards.DashboardWidgetVisualization"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetVisualization.Initializer"></a>

```typescript
import { DashboardWidgetVisualization } from '@newrelic/cdk-dashboards'

new DashboardWidgetVisualization(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualization.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidgetVisualization.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualization.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Optional</sup> <a name="id" id="@newrelic/cdk-dashboards.DashboardWidgetVisualization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### DashboardWidgetVisualizationInput <a name="DashboardWidgetVisualizationInput" id="@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput.Initializer"></a>

```typescript
import { DashboardWidgetVisualizationInput } from '@newrelic/cdk-dashboards'

new DashboardWidgetVisualizationInput(source?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput.Initializer.parameter.source">source</a></code> | <code>any</code> | *No description.* |

---

##### `source`<sup>Optional</sup> <a name="source" id="@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput.Initializer.parameter.source"></a>

- *Type:* any

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Optional</sup> <a name="id" id="@newrelic/cdk-dashboards.DashboardWidgetVisualizationInput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### Tag <a name="Tag" id="@newrelic/cdk-dashboards.Tag"></a>

#### Initializers <a name="Initializers" id="@newrelic/cdk-dashboards.Tag.Initializer"></a>

```typescript
import { Tag } from '@newrelic/cdk-dashboards'

new Tag()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.Tag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.Tag.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="@newrelic/cdk-dashboards.Tag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@newrelic/cdk-dashboards.Tag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IDashboardConfiguration <a name="IDashboardConfiguration" id="@newrelic/cdk-dashboards.IDashboardConfiguration"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IDashboardConfiguration">IDashboardConfiguration</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardConfiguration.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardConfiguration.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="@newrelic/cdk-dashboards.IDashboardConfiguration.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@newrelic/cdk-dashboards.IDashboardConfiguration.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

### IDashboardCreateResult <a name="IDashboardCreateResult" id="@newrelic/cdk-dashboards.IDashboardCreateResult"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IDashboardCreateResult">IDashboardCreateResult</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardCreateResult.property.dashboardCreate">dashboardCreate</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardCreateResult">DashboardCreateResult</a></code> | *No description.* |

---

##### `dashboardCreate`<sup>Required</sup> <a name="dashboardCreate" id="@newrelic/cdk-dashboards.IDashboardCreateResult.property.dashboardCreate"></a>

```typescript
public readonly dashboardCreate: DashboardCreateResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardCreateResult">DashboardCreateResult</a>

---

### IDashboardDeleteResult <a name="IDashboardDeleteResult" id="@newrelic/cdk-dashboards.IDashboardDeleteResult"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IDashboardDeleteResult">IDashboardDeleteResult</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardDeleteResult.property.dashboardDelete">dashboardDelete</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardDeleteResult">DashboardDeleteResult</a></code> | *No description.* |

---

##### `dashboardDelete`<sup>Required</sup> <a name="dashboardDelete" id="@newrelic/cdk-dashboards.IDashboardDeleteResult.property.dashboardDelete"></a>

```typescript
public readonly dashboardDelete: DashboardDeleteResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardDeleteResult">DashboardDeleteResult</a>

---

### IDashboardListResult <a name="IDashboardListResult" id="@newrelic/cdk-dashboards.IDashboardListResult"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IDashboardListResult">IDashboardListResult</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardListResult.property.actor">actor</a></code> | <code><a href="#@newrelic/cdk-dashboards.IEntitySearch">IEntitySearch</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardListResult.property.errors">errors</a></code> | <code>any[]</code> | *No description.* |

---

##### `actor`<sup>Optional</sup> <a name="actor" id="@newrelic/cdk-dashboards.IDashboardListResult.property.actor"></a>

```typescript
public readonly actor: IEntitySearch;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.IEntitySearch">IEntitySearch</a>

---

##### `errors`<sup>Optional</sup> <a name="errors" id="@newrelic/cdk-dashboards.IDashboardListResult.property.errors"></a>

```typescript
public readonly errors: any[];
```

- *Type:* any[]

---

### IDashboardReadResult <a name="IDashboardReadResult" id="@newrelic/cdk-dashboards.IDashboardReadResult"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IDashboardReadResult">IDashboardReadResult</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardReadResult.property.actor">actor</a></code> | <code><a href="#@newrelic/cdk-dashboards.IEntityResult">IEntityResult</a></code> | *No description.* |

---

##### `actor`<sup>Required</sup> <a name="actor" id="@newrelic/cdk-dashboards.IDashboardReadResult.property.actor"></a>

```typescript
public readonly actor: IEntityResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.IEntityResult">IEntityResult</a>

---

### IDashboardUpdateResult <a name="IDashboardUpdateResult" id="@newrelic/cdk-dashboards.IDashboardUpdateResult"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IDashboardUpdateResult">IDashboardUpdateResult</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IDashboardUpdateResult.property.dashboardUpdate">dashboardUpdate</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardUpdateResult">DashboardUpdateResult</a></code> | *No description.* |

---

##### `dashboardUpdate`<sup>Required</sup> <a name="dashboardUpdate" id="@newrelic/cdk-dashboards.IDashboardUpdateResult.property.dashboardUpdate"></a>

```typescript
public readonly dashboardUpdate: DashboardUpdateResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardUpdateResult">DashboardUpdateResult</a>

---

### IEntity <a name="IEntity" id="@newrelic/cdk-dashboards.IEntity"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IEntity">IEntity</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.alertSeverity">alertSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.dashboardParentGuid">dashboardParentGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.indexedAt">indexedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.permalink">permalink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.reporting">reporting</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.tags">tags</a></code> | <code><a href="#@newrelic/cdk-dashboards.ITag">ITag</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntity.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@newrelic/cdk-dashboards.IEntity.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `alertSeverity`<sup>Required</sup> <a name="alertSeverity" id="@newrelic/cdk-dashboards.IEntity.property.alertSeverity"></a>

```typescript
public readonly alertSeverity: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@newrelic/cdk-dashboards.IEntity.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dashboardParentGuid`<sup>Required</sup> <a name="dashboardParentGuid" id="@newrelic/cdk-dashboards.IEntity.property.dashboardParentGuid"></a>

```typescript
public readonly dashboardParentGuid: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@newrelic/cdk-dashboards.IEntity.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@newrelic/cdk-dashboards.IEntity.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@newrelic/cdk-dashboards.IEntity.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `indexedAt`<sup>Required</sup> <a name="indexedAt" id="@newrelic/cdk-dashboards.IEntity.property.indexedAt"></a>

```typescript
public readonly indexedAt: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@newrelic/cdk-dashboards.IEntity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@newrelic/cdk-dashboards.IEntity.property.permalink"></a>

```typescript
public readonly permalink: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@newrelic/cdk-dashboards.IEntity.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `reporting`<sup>Required</sup> <a name="reporting" id="@newrelic/cdk-dashboards.IEntity.property.reporting"></a>

```typescript
public readonly reporting: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Required</sup> <a name="tags" id="@newrelic/cdk-dashboards.IEntity.property.tags"></a>

```typescript
public readonly tags: ITag[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.ITag">ITag</a>[]

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/cdk-dashboards.IEntity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@newrelic/cdk-dashboards.IEntity.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

### IEntityResult <a name="IEntityResult" id="@newrelic/cdk-dashboards.IEntityResult"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IEntityResult">IEntityResult</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IEntityResult.property.entity">entity</a></code> | <code><a href="#@newrelic/cdk-dashboards.DashboardEntityResult">DashboardEntityResult</a></code> | *No description.* |

---

##### `entity`<sup>Required</sup> <a name="entity" id="@newrelic/cdk-dashboards.IEntityResult.property.entity"></a>

```typescript
public readonly entity: DashboardEntityResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.DashboardEntityResult">DashboardEntityResult</a>

---

### IEntitySearch <a name="IEntitySearch" id="@newrelic/cdk-dashboards.IEntitySearch"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IEntitySearch">IEntitySearch</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IEntitySearch.property.entitySearch">entitySearch</a></code> | <code><a href="#@newrelic/cdk-dashboards.IEntitySearchResults">IEntitySearchResults</a></code> | *No description.* |

---

##### `entitySearch`<sup>Required</sup> <a name="entitySearch" id="@newrelic/cdk-dashboards.IEntitySearch.property.entitySearch"></a>

```typescript
public readonly entitySearch: IEntitySearchResults;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.IEntitySearchResults">IEntitySearchResults</a>

---

### IEntitySearchResults <a name="IEntitySearchResults" id="@newrelic/cdk-dashboards.IEntitySearchResults"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IEntitySearchResults">IEntitySearchResults</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IEntitySearchResults.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntitySearchResults.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntitySearchResults.property.results">results</a></code> | <code><a href="#@newrelic/cdk-dashboards.IResult">IResult</a></code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IEntitySearchResults.property.types">types</a></code> | <code><a href="#@newrelic/cdk-dashboards.IType">IType</a>[]</code> | *No description.* |

---

##### `count`<sup>Required</sup> <a name="count" id="@newrelic/cdk-dashboards.IEntitySearchResults.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@newrelic/cdk-dashboards.IEntitySearchResults.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `results`<sup>Required</sup> <a name="results" id="@newrelic/cdk-dashboards.IEntitySearchResults.property.results"></a>

```typescript
public readonly results: IResult;
```

- *Type:* <a href="#@newrelic/cdk-dashboards.IResult">IResult</a>

---

##### `types`<sup>Required</sup> <a name="types" id="@newrelic/cdk-dashboards.IEntitySearchResults.property.types"></a>

```typescript
public readonly types: IType[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.IType">IType</a>[]

---

### IQueryOptions <a name="IQueryOptions" id="@newrelic/cdk-dashboards.IQueryOptions"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IQueryOptions">IQueryOptions</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IQueryOptions.property.caseSensitiveTagMatching">caseSensitiveTagMatching</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IQueryOptions.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IQueryOptions.property.tagFilter">tagFilter</a></code> | <code>string</code> | *No description.* |

---

##### `caseSensitiveTagMatching`<sup>Required</sup> <a name="caseSensitiveTagMatching" id="@newrelic/cdk-dashboards.IQueryOptions.property.caseSensitiveTagMatching"></a>

```typescript
public readonly caseSensitiveTagMatching: boolean;
```

- *Type:* boolean

---

##### `limit`<sup>Required</sup> <a name="limit" id="@newrelic/cdk-dashboards.IQueryOptions.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@newrelic/cdk-dashboards.IQueryOptions.property.tagFilter"></a>

```typescript
public readonly tagFilter: string;
```

- *Type:* string

---

### IResult <a name="IResult" id="@newrelic/cdk-dashboards.IResult"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IResult">IResult</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IResult.property.entities">entities</a></code> | <code><a href="#@newrelic/cdk-dashboards.IEntity">IEntity</a>[]</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IResult.property.nextCursor">nextCursor</a></code> | <code>string</code> | *No description.* |

---

##### `entities`<sup>Required</sup> <a name="entities" id="@newrelic/cdk-dashboards.IResult.property.entities"></a>

```typescript
public readonly entities: IEntity[];
```

- *Type:* <a href="#@newrelic/cdk-dashboards.IEntity">IEntity</a>[]

---

##### `nextCursor`<sup>Required</sup> <a name="nextCursor" id="@newrelic/cdk-dashboards.IResult.property.nextCursor"></a>

```typescript
public readonly nextCursor: string;
```

- *Type:* string

---

### ITag <a name="ITag" id="@newrelic/cdk-dashboards.ITag"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.ITag">ITag</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.ITag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.ITag.property.values">values</a></code> | <code>string[]</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="@newrelic/cdk-dashboards.ITag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@newrelic/cdk-dashboards.ITag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

### IType <a name="IType" id="@newrelic/cdk-dashboards.IType"></a>

- *Implemented By:* <a href="#@newrelic/cdk-dashboards.IType">IType</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/cdk-dashboards.IType.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IType.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IType.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/cdk-dashboards.IType.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `count`<sup>Required</sup> <a name="count" id="@newrelic/cdk-dashboards.IType.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `domain`<sup>Required</sup> <a name="domain" id="@newrelic/cdk-dashboards.IType.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@newrelic/cdk-dashboards.IType.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/cdk-dashboards.IType.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

