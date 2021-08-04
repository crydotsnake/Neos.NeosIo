<?php
declare(strict_types=1);

namespace Neos\MarketPlace\Domain\Model;

/*
 * This file is part of the Neos.MarketPlace package.
 *
 * (c) Contributors of the Neos Project - www.neos.io
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

/**
 * @api
 */
class LogAction
{
    public const SINGLE_PACKAGE_SYNC_STARTED = 'SinglePackageSyncStarted';

    public const SINGLE_PACKAGE_SYNC_FINISHED = 'SinglePackageSyncFinished';

    public const SINGLE_PACKAGE_SYNC_FAILED = 'SinglePackageSyncFailed';

    public const FULL_SYNC_STARTED = 'FullSyncStarted';

    public const FULL_SYNC_FINISHED = 'FullSyncFinished';
}
