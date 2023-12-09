/* istanbul ignore file */
/* Do not change, this code is generated from Golang structs */

export class DashboardVariableNRQLQueryInput {
  accountIds: number[];
  query: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.accountIds = source.accountIds;
    this.query = source.query;
  }
}
export class DashboardVariableEnumItemInput {
  title?: string;
  value: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.title = source.title;
    this.value = source.value;
  }
}
export class DashboardVariableDefaultItemInput {
  value?: DashboardVariableDefaultValueInput;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.value = this.convertValues(source.value, DashboardVariableDefaultValueInput);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardVariableDefaultValueInput {
  string?: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.string = source.string;
  }
}
export class DashboardVariableInput {
  defaultValue?: DashboardVariableDefaultValueInput;
  defaultValues?: DashboardVariableDefaultItemInput[];
  isMultiSelection?: boolean;
  items?: DashboardVariableEnumItemInput[];
  nrqlQuery?: DashboardVariableNRQLQueryInput;
  name: string;
  replacementStrategy?: string;
  title?: string;
  type: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.defaultValue = this.convertValues(source.defaultValue, DashboardVariableDefaultValueInput);
    this.defaultValues = this.convertValues(source.defaultValues, DashboardVariableDefaultItemInput);
    this.isMultiSelection = source.isMultiSelection;
    this.items = this.convertValues(source.items, DashboardVariableEnumItemInput);
    this.nrqlQuery = this.convertValues(source.nrqlQuery, DashboardVariableNRQLQueryInput);
    this.name = source.name;
    this.replacementStrategy = source.replacementStrategy;
    this.title = source.title;
    this.type = source.type;
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardWidgetVisualizationInput {
  id?: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.id = source.id;
  }
}
export class DashboardWidgetLayoutInput {
  column?: number;
  height?: number;
  row?: number;
  width?: number;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.column = source.column;
    this.height = source.height;
    this.row = source.row;
    this.width = source.width;
  }
}
export class DashboardTableWidgetConfigurationInput {
  nrqlQueries?: DashboardWidgetNRQLQueryInput[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQueryInput);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardPieWidgetConfigurationInput {
  nrqlQueries?: DashboardWidgetNRQLQueryInput[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQueryInput);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardMarkdownWidgetConfigurationInput {
  text: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.text = source.text;
  }
}
export class DashboardLineWidgetConfigurationInput {
  nrqlQueries?: DashboardWidgetNRQLQueryInput[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQueryInput);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardBillboardWidgetThresholdInput {
  alertSeverity?: string;
  value?: number;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.alertSeverity = source.alertSeverity;
    this.value = source.value;
  }
}
export class DashboardBillboardWidgetConfigurationInput {
  nrqlQueries?: DashboardWidgetNRQLQueryInput[];
  thresholds?: DashboardBillboardWidgetThresholdInput[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQueryInput);
    this.thresholds = this.convertValues(source.thresholds, DashboardBillboardWidgetThresholdInput);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardBarWidgetConfigurationInput {
  nrqlQueries?: DashboardWidgetNRQLQueryInput[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQueryInput);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardWidgetNRQLQueryInput {
  accountId: number;
  query: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.accountId = source.accountId;
    this.query = source.query;
  }
}
export class DashboardAreaWidgetConfigurationInput {
  nrqlQueries?: DashboardWidgetNRQLQueryInput[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQueryInput);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardWidgetConfigurationInput {
  area?: DashboardAreaWidgetConfigurationInput;
  bar?: DashboardBarWidgetConfigurationInput;
  billboard?: DashboardBillboardWidgetConfigurationInput;
  line?: DashboardLineWidgetConfigurationInput;
  markdown?: DashboardMarkdownWidgetConfigurationInput;
  pie?: DashboardPieWidgetConfigurationInput;
  table?: DashboardTableWidgetConfigurationInput;

  // constructor(source: any = {}) {
  //   if ('string' === typeof source) source = JSON.parse(source);
  //   this.area = this.convertValues(source.area, DashboardAreaWidgetConfigurationInput);
  //   this.bar = this.convertValues(source.bar, DashboardBarWidgetConfigurationInput);
  //   this.billboard = this.convertValues(source.billboard, DashboardBillboardWidgetConfigurationInput);
  //   this.line = this.convertValues(source.line, DashboardLineWidgetConfigurationInput);
  //   this.markdown = this.convertValues(source.markdown, DashboardMarkdownWidgetConfigurationInput);
  //   this.pie = this.convertValues(source.pie, DashboardPieWidgetConfigurationInput);
  //   this.table = this.convertValues(source.table, DashboardTableWidgetConfigurationInput);
  // }
  //
  // convertValues(a: any, classs: any, asMap: boolean = false): any {
  //     if (!a) {
  //         return a;
  //     }
  //     if (a.slice) {
  //         return (a as any[]).map(elem => this.convertValues(elem, classs));
  //     } else if ('object' === typeof a) {
  //         if (asMap) {
  //             for (const key of Object.keys(a)) {
  //                 a[key] = new classs(a[key]);
  //             }
  //             return a;
  //         }
  //         return new classs(a);
  //     }
  //     return a;
  // }
}
export class DashboardWidgetInput {
  configuration?: DashboardWidgetConfigurationInput;
  id?: string;
  layout?: DashboardWidgetLayoutInput;
  linkedEntityGuids?: string[];
  rawConfiguration?: number[];
  title?: string;
  visualization?: DashboardWidgetVisualizationInput;

  // constructor(source: any = {}) {
  //   if ('string' === typeof source) source = JSON.parse(source);
  //   this.configuration = this.convertValues(source.configuration, DashboardWidgetConfigurationInput);
  //   this.id = source.id;
  //   this.layout = this.convertValues(source.layout, DashboardWidgetLayoutInput);
  //   this.linkedEntityGuids = source.linkedEntityGuids;
  //   this.rawConfiguration = source.rawConfiguration;
  //   this.title = source.title;
  //   this.visualization = this.convertValues(source.visualization, DashboardWidgetVisualizationInput);
  // }
  //
  // convertValues(a: any, classs: any, asMap: boolean = false): any {
  //     if (!a) {
  //         return a;
  //     }
  //     if (a.slice) {
  //         return (a as any[]).map(elem => this.convertValues(elem, classs));
  //     } else if ('object' === typeof a) {
  //         if (asMap) {
  //             for (const key of Object.keys(a)) {
  //                 a[key] = new classs(a[key]);
  //             }
  //             return a;
  //         }
  //         return new classs(a);
  //     }
  //     return a;
  // }
}
export class DashboardPageInput {
  description?: string;
  guid?: string;
  name!: string;
  widgets!: DashboardWidgetInput[];

  // constructor(source: any = {}) {
  //   if ('string' === typeof source) source = JSON.parse(source);
  //   this.description = source.description;
  //   this.guid = source.guid;
  //   this.name = source.name;
  //   this.widgets = this.convertValues(source.widgets, DashboardWidgetInput);
  // }
  //
  // convertValues(a: any, classs: any, asMap: boolean = false): any {
  //     if (!a) {
  //         return a;
  //     }
  //     if (a.slice) {
  //         return (a as any[]).map(elem => this.convertValues(elem, classs));
  //     } else if ('object' === typeof a) {
  //         if (asMap) {
  //             for (const key of Object.keys(a)) {
  //                 a[key] = new classs(a[key]);
  //             }
  //             return a;
  //         }
  //         return new classs(a);
  //     }
  //     return a;
  // }
}
export class DashboardInput {
  description?: string;
  name!: string;
  pages?: DashboardPageInput[];
  permissions!: string;
  variables?: DashboardVariableInput[];

  // constructor(source: any = {}) {
  //   if ('string' === typeof source) source = JSON.parse(source);
  //   this.description = source.description;
  //   this.name = source.name;
  //   this.pages = this.convertValues(source.pages, DashboardPageInput);
  //   this.permissions = source.permissions;
  //   this.variables = this.convertValues(source.variables, DashboardVariableInput);
  // }
  //
  // convertValues(a: any, classs: any, asMap: boolean = false): any {
  //     if (!a) {
  //         return a;
  //     }
  //     if (a.slice) {
  //         return (a as any[]).map(elem => this.convertValues(elem, classs));
  //     } else if ('object' === typeof a) {
  //         if (asMap) {
  //             for (const key of Object.keys(a)) {
  //                 a[key] = new classs(a[key]);
  //             }
  //             return a;
  //         }
  //         return new classs(a);
  //     }
  //     return a;
  // }
}
export class DashboardCreateError {
  description?: string;
  type: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.description = source.description;
    this.type = source.type;
  }
}
export class DashboardVariableNRQLQuery {
  accountIds?: number[];
  query: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.accountIds = source.accountIds;
    this.query = source.query;
  }
}
export class DashboardVariableEnumItem {
  title?: string;
  value?: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.title = source.title;
    this.value = source.value;
  }
}
export class DashboardVariableDefaultItem {
  value?: DashboardVariableDefaultValue;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.value = this.convertValues(source.value, DashboardVariableDefaultValue);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardVariableDefaultValue {
  string?: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.string = source.string;
  }
}
export class DashboardVariable {
  defaultValue?: DashboardVariableDefaultValue;
  defaultValues?: DashboardVariableDefaultItem[];
  isMultiSelection?: boolean;
  items?: DashboardVariableEnumItem[];
  nrqlQuery?: DashboardVariableNRQLQuery;
  name?: string;
  replacementStrategy?: string;
  title?: string;
  type?: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.defaultValue = this.convertValues(source.defaultValue, DashboardVariableDefaultValue);
    this.defaultValues = this.convertValues(source.defaultValues, DashboardVariableDefaultItem);
    this.isMultiSelection = source.isMultiSelection;
    this.items = this.convertValues(source.items, DashboardVariableEnumItem);
    this.nrqlQuery = this.convertValues(source.nrqlQuery, DashboardVariableNRQLQuery);
    this.name = source.name;
    this.replacementStrategy = source.replacementStrategy;
    this.title = source.title;
    this.type = source.type;
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardWidgetVisualization {
  id?: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.id = source.id;
  }
}
export class DashboardWidgetLayout {
  column?: number;
  height?: number;
  row?: number;
  width?: number;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.column = source.column;
    this.height = source.height;
    this.row = source.row;
    this.width = source.width;
  }
}
export class DashboardTableWidgetConfiguration {
  nrqlQueries?: DashboardWidgetNRQLQuery[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQuery);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardPieWidgetConfiguration {
  nrqlQueries?: DashboardWidgetNRQLQuery[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQuery);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardMarkdownWidgetConfiguration {
  text: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.text = source.text;
  }
}
export class DashboardLineWidgetConfiguration {
  nrqlQueries?: DashboardWidgetNRQLQuery[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQuery);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardBillboardWidgetThreshold {
  alertSeverity?: string;
  value?: number;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.alertSeverity = source.alertSeverity;
    this.value = source.value;
  }
}
export class DashboardBillboardWidgetConfiguration {
  nrqlQueries?: DashboardWidgetNRQLQuery[];
  thresholds?: DashboardBillboardWidgetThreshold[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQuery);
    this.thresholds = this.convertValues(source.thresholds, DashboardBillboardWidgetThreshold);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardBarWidgetConfiguration {
  nrqlQueries?: DashboardWidgetNRQLQuery[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQuery);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardWidgetNRQLQuery {
  accountId: number;
  query: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.accountId = source.accountId;
    this.query = source.query;
  }
}
export class DashboardAreaWidgetConfiguration {
  nrqlQueries?: DashboardWidgetNRQLQuery[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.nrqlQueries = this.convertValues(source.nrqlQueries, DashboardWidgetNRQLQuery);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardWidgetConfiguration {
  area?: DashboardAreaWidgetConfiguration;
  bar?: DashboardBarWidgetConfiguration;
  billboard?: DashboardBillboardWidgetConfiguration;
  line?: DashboardLineWidgetConfiguration;
  markdown?: DashboardMarkdownWidgetConfiguration;
  pie?: DashboardPieWidgetConfiguration;
  table?: DashboardTableWidgetConfiguration;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.area = this.convertValues(source.area, DashboardAreaWidgetConfiguration);
    this.bar = this.convertValues(source.bar, DashboardBarWidgetConfiguration);
    this.billboard = this.convertValues(source.billboard, DashboardBillboardWidgetConfiguration);
    this.line = this.convertValues(source.line, DashboardLineWidgetConfiguration);
    this.markdown = this.convertValues(source.markdown, DashboardMarkdownWidgetConfiguration);
    this.pie = this.convertValues(source.pie, DashboardPieWidgetConfiguration);
    this.table = this.convertValues(source.table, DashboardTableWidgetConfiguration);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardWidget {
  configuration?: DashboardWidgetConfiguration;
  id: string;
  layout?: DashboardWidgetLayout;
  linkedEntities?: any[];
  rawConfiguration: number[];
  title?: string;
  visualization: DashboardWidgetVisualization;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.configuration = this.convertValues(source.configuration, DashboardWidgetConfiguration);
    this.id = source.id;
    this.layout = this.convertValues(source.layout, DashboardWidgetLayout);
    this.linkedEntities = source.linkedEntities;
    this.rawConfiguration = source.rawConfiguration;
    this.title = source.title;
    this.visualization = this.convertValues(source.visualization, DashboardWidgetVisualization);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardPage {
  createdAt?: string;
  description?: string;
  guid?: string;
  name?: string;
  owner?: DashboardOwnerInfo;
  updatedAt?: string;
  widgets?: DashboardWidget[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.createdAt = source.createdAt;
    this.description = source.description;
    this.guid = source.guid;
    this.name = source.name;
    this.owner = this.convertValues(source.owner, DashboardOwnerInfo);
    this.updatedAt = source.updatedAt;
    this.widgets = this.convertValues(source.widgets, DashboardWidget);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardOwnerInfo {
  email?: string;
  userId?: number;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.email = source.email;
    this.userId = source.userId;
  }
}

export class Tag {
  key!: string;
  values!: string[];
}
export class DashboardEntityResult {
  accountId?: number;
  createdAt?: string;
  description?: string;
  guid?: string;
  name?: string;
  owner?: DashboardOwnerInfo;
  pages?: DashboardPage[];
  permissions?: string;
  updatedAt?: string;
  variables?: DashboardVariable[];

  dashboardParentGuid?: string;
  indexedAt?: number;
  permalink?: string;
  tags?: Tag[];
  tagsWithMetadata?: any[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.accountId = source.accountId;
    this.createdAt = source.createdAt;
    this.description = source.description;
    this.guid = source.guid;
    this.name = source.name;
    this.owner = this.convertValues(source.owner, DashboardOwnerInfo);
    this.pages = this.convertValues(source.pages, DashboardPage);
    this.permissions = source.permissions;
    this.updatedAt = source.updatedAt;
    this.variables = this.convertValues(source.variables, DashboardVariable);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}
export class DashboardCreateResult {
  entityResult?: DashboardEntityResult;
  errors?: DashboardCreateError[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.entityResult = this.convertValues(source.entityResult, DashboardEntityResult);
    this.errors = this.convertValues(source.errors, DashboardCreateError);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}

export class DashboardDeleteError {
  description?: string;
  type: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.description = source.description;
    this.type = source.type;
  }
}
export class DashboardDeleteResult {
  errors?: DashboardDeleteError[];
  status?: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.errors = this.convertValues(source.errors, DashboardDeleteError);
    this.status = source.status;
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}

export class DashboardUpdateError {
  description?: string;
  type: string;

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.description = source.description;
    this.type = source.type;
  }
}
export class DashboardUpdateResult {
  entityResult?: DashboardEntityResult;
  errors?: DashboardUpdateError[];

  constructor(source: any = {}) {
    if ('string' === typeof source) source = JSON.parse(source);
    this.entityResult = this.convertValues(source.entityResult, DashboardEntityResult);
    this.errors = this.convertValues(source.errors, DashboardUpdateError);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ('object' === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
  }
}

