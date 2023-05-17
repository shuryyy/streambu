import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    cs: { name: 'Český' },
    da: { name: 'Dansk' },
    nl: { name: 'Nederlands' },
    en: { name: 'English' },
    fi: { name: 'Suomi' },
    fr: { name: 'Français' },
    de: { name: 'Deutsch' },
    el: { name: 'Ελληνικά' },
    hu: { name: 'Magyar' },
    pl: { name: 'Polski' },
    'pt-pt': { name: 'Português' },
    ro: { name: 'Română' },
    sk: { name: 'Slovenský' },
    sv: { name: 'Svenska' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
