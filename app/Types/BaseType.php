<?php

declare(strict_types=1);
namespace App\Types;

abstract class BaseType
{
    protected array $fillable = [];
    protected array $attributes = [];

    public function __construct(array $data)
    {
        $this->fillAttributes($data);
    }

    public function toArray(): array
    {
        return $this->attributes;
    }

    private function fillAttributes(array $data): void
    {
        foreach ($data as $key => $datum) {
            if(in_array($key, $this->fillable))
            {
                $this->attributes[$key] = $datum;
            }
        }
    }
}
