import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl',
})
export class SafeurlPipe implements PipeTransform {
  /**
   *
   */
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: string, ...args: unknown[]): unknown {
    return this.domSanitizer.bypassSecurityTrustUrl(value);
  }
}
