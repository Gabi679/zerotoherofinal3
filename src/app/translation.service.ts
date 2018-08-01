import { Injectable } from '@angular/core';
/**
 * define the service
 */
@Injectable()
export class TranslationService {
    /**
     * store the available languages
     */
    public languages = ['hun', 'eng'];
    /**
     * actual language
     */
    public language = 'hun';
    /**
     * store the words.
     */
    private dictionary: {[key: string]: TranslationSet} = {
        'hun' : {
            languange: 'hun',
            values: {
                'change' : 'nyelvváltás',
                'new' : 'új kategória',
                'date': 'dátum',
                'option': 'Megjegyzés',
                'price': 'költség',
                'category': 'kategória',
                'add': 'rögzítés',
                'choosed': 'választott',
            }
        },
        'eng' : {
            languange: 'eng',
            values: {
                'change' : 'choose language',
                'new' : 'add category',
                'date': 'date',
                'option': 'other',
                'price': 'price',
                'category': 'category',
                'add': 'add',
                'choosed': 'choosed',
            }
        }
    };
    /**
     * @ignore
     */
    constructor() { }
    /**
     * 
     * @param value translate the value to the actual language
     */
  translate(value: string): string {
          if ( this.dictionary[this.language] != null) {
              return this.dictionary[this.language].values[value];
          }
      }
}

/**
 * typedef
 */
export class TranslationSet {
   public languange: string;
   public values: {[key: string]: string} = {};
}