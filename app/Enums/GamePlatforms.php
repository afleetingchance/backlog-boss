<?php

declare(strict_types=1);
namespace App\Enums;

enum GamePlatforms: int
{
    case UNKNOWN = 0;
    case WINDOWS = 1;
    case MAC_OS = 2;
    case LINUX = 3;
    case PLAYSTATION = 4;
    case PLAYSTATION_2 = 5;
    case PLAYSTATION_3 = 6;
    case PLAYSTATION_4 = 7;
    case PLAYSTATION_5 = 8;
    case XBOX = 9;
    case XBOX_360 = 10;
    case XBOX_ONE = 11;
    case XBOX_X_S = 12;
    case NINTENDO_64 = 13;
    case GAMECUBE = 14;
    case WII = 15;
    case WII_U = 16;
    case SWITCH = 17;
    case SWITCH_2 = 18;
    case IOS = 19;
    case ANDROID = 20;

    public function getHumanReadable(): string
    {
        return match ($this) {
            self::WINDOWS => 'Windows',
            self::MAC_OS => 'macOS',
            self::LINUX => 'Linux',
            self::PLAYSTATION => 'PS1',
            self::PLAYSTATION_2 => 'PS2',
            self::PLAYSTATION_3 => 'PS3',
            self::PLAYSTATION_4 => 'PS4',
            self::PLAYSTATION_5 => 'PS5',
            self::XBOX => 'Xbox',
            self::XBOX_360 => 'Xbox 360',
            self::XBOX_ONE => 'Xbox One',
            self::XBOX_X_S => 'Xbox Series X/S',
            self::NINTENDO_64 => 'N64',
            self::GAMECUBE => 'GameCube',
            self::WII => 'Wii',
            self::WII_U => 'Wii U',
            self::SWITCH => 'Switch',
            self::SWITCH_2 => 'Switch 2',
            self::IOS => 'iOS',
            self::ANDROID => 'Android',
            default => 'Unknown'
        };
    }

    public static function tryFromHumanReadable(string $humanReadable): self
    {
        return match ($humanReadable) {
            self::WINDOWS->getHumanReadable(), 'PC' => self::WINDOWS,
            self::MAC_OS->getHumanReadable(), 'Mac' => self::MAC_OS,
            self::LINUX->getHumanReadable() => self::LINUX,
            self::PLAYSTATION->getHumanReadable(), 'PlayStation' => self::PLAYSTATION,
            self::PLAYSTATION_2->getHumanReadable(), 'PlayStation 2' => self::PLAYSTATION_2,
            self::PLAYSTATION_3->getHumanReadable(), 'PlayStation 3' => self::PLAYSTATION_3,
            self::PLAYSTATION_4->getHumanReadable(), 'PlayStation 4' => self::PLAYSTATION_4,
            self::PLAYSTATION_5->getHumanReadable(), 'PlayStation 5' => self::PLAYSTATION_5,
            self::XBOX->getHumanReadable() => self::XBOX,
            self::XBOX_360->getHumanReadable() => self::XBOX_360,
            self::XBOX_ONE->getHumanReadable() => self::XBOX_ONE,
            self::XBOX_X_S->getHumanReadable() => self::XBOX_X_S,
            self::NINTENDO_64->getHumanReadable(), 'Nintendo 64'=> self::NINTENDO_64,
            self::GAMECUBE->getHumanReadable(), 'Nintendo GameCube' => self::GAMECUBE,
            self::WII->getHumanReadable() => self::WII,
            self::WII_U->getHumanReadable() => self::WII_U,
            self::SWITCH->getHumanReadable(), 'Nintendo Switch' => self::SWITCH,
            self::SWITCH_2->getHumanReadable(), 'Nintendo Switch 2' => self::SWITCH_2,
            self::IOS->getHumanReadable() => self::IOS,
            self::ANDROID->getHumanReadable() => self::ANDROID,
            default => self::UNKNOWN
        };
    }

}
