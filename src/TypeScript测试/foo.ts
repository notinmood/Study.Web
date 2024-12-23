/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/23 11:56:44
 * @FilePath     : foo.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */

export class Foo {
    constructor(public name: string) {}

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}
