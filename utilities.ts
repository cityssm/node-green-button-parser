import 'core-js'
import type { PathLike } from 'node:fs'
import fs, { type FileHandle } from 'node:fs/promises'

import * as lookups from './lookups.js'
import type {
  ApplicationInformationContent,
  AuthorizationContent,
  CustomerAccountContent,
  CustomerAgreementContent,
  CustomerContent,
  GreenButtonContent,
  IntervalBlockContent,
  MeterContent
} from './types.js'

export async function fileToBuffer(
  filePath: PathLike | FileHandle
): Promise<Buffer> {
  return await fs.readFile(filePath)
}

const numberRegExp = /^-?(?:\d*\.)?\d+$/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanContentJson(contentJson: any): void {
  for (const key of Object.keys(contentJson)) {
    if (Array.isArray(contentJson[key]) && contentJson[key].length === 1) {
      contentJson[key] = contentJson[key][0]

      if (
        typeof contentJson[key] === 'string' &&
        contentJson[key].length > 0 &&
        numberRegExp.test(contentJson[key])
      ) {
        contentJson[key] = Number(contentJson[key])
      } else {
        cleanContentJson(contentJson[key])
      }
    }
  }
}

function populateApplicationInformationLookupValues(
  content: ApplicationInformationContent
): void {
  content.dataCustodianApplicationStatusValue =
    lookups.dataCustodianApplicationStatuses[
      content.dataCustodianApplicationStatus
    ]

  if (content.thirdPartyApplicationStatus !== undefined) {
    content.thirdPartyApplicationStatus_value =
      lookups.thirdPartyApplicationStatuses[content.thirdPartyApplicationStatus]
  }

  if (content.thirdPartyApplicationType !== undefined) {
    content.thirdPartyApplicationType_value =
      lookups.thirdPartyApplicationTypes[content.thirdPartyApplicationType]
  }

  if (content.thirdPartyApplicationUse !== undefined) {
    content.thirdPartyApplicationUse_value =
      lookups.thirdPartyApplicationUses[content.thirdPartyApplicationUse]
  }

  if (!Array.isArray(content.grant_types)) {
    content.grant_types = [content.grant_types]
  }

  content.grant_types_values = []

  for (const grantType of content.grant_types) {
    content.grant_types_values.push(lookups.grantTypes[grantType])
  }

  content.response_types_value = lookups.responseTypes[content.response_types]
}

function populateAuthorizationLookupValues(
  content: AuthorizationContent
): void {
  content.status_value = lookups.authorizationStatuses[content.status]

  if (content.grant_type !== undefined) {
    content.grant_type_value = lookups.grantTypes[content.grant_type]
  }

  content.token_type_value = lookups.grantTypes[content.token_type]

  if (content.error !== undefined) {
    content.error_value = lookups.authorizationErrors[content.error]
  }
}

function populateCustomerLookupValues(content: CustomerContent): void {
  if (content.kind !== undefined) {
    content.kind_value = lookups.customerKinds[content.kind]
  }
}

function populateCustomerAccountLookupValues(
  content: CustomerAccountContent
): void {
  if (content.notifications !== undefined) {
    if (!Array.isArray(content.notifications)) {
      content.notifications = [content.notifications]
    }

    for (const notification of content.notifications) {
      notification.methodKind_value =
        lookups.notificationMethodKinds[notification.methodKind]
    }
  }
}

function populateCustomerAgreementLookupValues(
  content: CustomerAgreementContent
): void {
  if (content.DemandResponseProgram !== undefined) {
    if (!Array.isArray(content.DemandResponseProgram)) {
      content.DemandResponseProgram = [content.DemandResponseProgram]
    }

    for (const program of content.DemandResponseProgram) {
      if (program.enrollmentStatus !== undefined) {
        program.enrollmentStatus_value =
          lookups.enrollmentStatuses[program.enrollmentStatus]
      }
    }
  }

  if (content.currency !== undefined) {
    content.currency_value = lookups.currencies[content.currency]
  }
}

function populateIntervalBlockLookupValues(
  content: IntervalBlockContent
): void {
  if (!Array.isArray(content.IntervalReading)) {
    content.IntervalReading = [content.IntervalReading]
  }

  for (const reading of content.IntervalReading) {
    if (reading.ReadingQuality !== undefined) {
      if (!Array.isArray(reading.ReadingQuality)) {
        reading.ReadingQuality = [reading.ReadingQuality]
      }

      reading.ReadingQuality_values = []

      for (const quality of reading.ReadingQuality) {
        reading.ReadingQuality_values.push(lookups.readingQualities[quality])
      }
    }
  }
}

function populateMeterLookupValues(content: MeterContent): void {
  if (content.MeterMultipliers !== undefined) {
    if (!Array.isArray(content.MeterMultipliers)) {
      content.MeterMultipliers = [content.MeterMultipliers]
    }

    for (const multiplier of content.MeterMultipliers) {
      if (multiplier.kind !== undefined) {
        multiplier.kind_value = lookups.meterMultiplierKinds[multiplier.kind]
      }
    }
  }
}

export function populateLookupValues(content: GreenButtonContent): void {
  switch (content.contentType) {
    case 'ApplicationInformation': {
      populateApplicationInformationLookupValues(
        content as ApplicationInformationContent
      )
      break
    }
    case 'Authorization': {
      populateAuthorizationLookupValues(content as AuthorizationContent)
      break
    }
    case 'Customer': {
      populateCustomerLookupValues(content as CustomerContent)
      break
    }
    case 'CustomerAccount': {
      populateCustomerAccountLookupValues(content as CustomerAccountContent)
      break
    }
    case 'CustomerAgreement': {
      populateCustomerAgreementLookupValues(content as CustomerAgreementContent)
      break
    }
    case 'IntervalBlock': {
      populateIntervalBlockLookupValues(content as IntervalBlockContent)
      break
    }
    case 'Meter': {
      populateMeterLookupValues(content as MeterContent)
      break
    }
  }
}
