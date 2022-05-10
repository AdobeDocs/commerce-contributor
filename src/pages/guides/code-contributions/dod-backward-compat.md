---
title: Backward Compatibility Definition of Done | Commerce Contributor
description: Backward compatibility ensures that new code does not break old code. Learn about backward compatibility and the defintion of done in Commerce projects.
---

# Backward compatibility definition of done

All backward incompatible changes should be approved and covered by static tests to meet the "Definition of Done" (DoD).


## Functional backward compatibility

**Functional backward compatibility** means the behavior of the application is preserved.

-  Existing product features and functionality must be retained during any changes to the code.
-  Any backward-incompatible functional changes must be approved by a product owner.
-  The documentation should explain the justification and provide a business value.

## Technical backward compatibility

**Technical backward compatibility** means the technical interfaces are preserved.

Technical interfaces include PHP interfaces or classes, CLI commands, URLs, or any other interfaces that can be used by 3rd-party developer, system integrator, or user of Magento.
Any change to an interface that can lead to a broken integration is a breaking technical change.
Technical interfaces and the corresponding level of change are described in [Code Changes](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/versioning/codebase-changes.html) and [Module Version Dependencies](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/versioning/dependencies.html).

Technical backward compatibility must be retained between PATCH (marketing) versions of Magento products. It should also be retained between MINOR (marketing) releases if possible.
Any breaking changes must be approved by an architect, product owner and release manager.

For more information, see [Backward compatibility policy](backward-compatibility-policy.md) and [Versioning](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/versioning/).
