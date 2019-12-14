import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опровергать: PerfectVerb = {
  name: Word('опровергать', 8),
  singular1stPerson: Word('опровергаю', 8),
  singular2ndPerson: Word('опровергаешь', 8),
  singular3rdPerson: Word('опровергает', 8),
  plural1stPerson: Word('опровергаем', 8),
  plural2ndPerson: Word('опровергаете', 8),
  plural3rdPerson: Word('опровергают', 8),
  masculinePast: Word('опровергал', 8),
  femininePast: Word('опровергала', 8),
  neuterPast: Word('опровергало', 8),
  pluralPast: Word('опровергали', 8),
  imperativeInformal: Word('опровергай', 8),
  imperativeFormal: Word('опровергайте', 8),
  imperfect: [],
};

perfectVerbs.set(опровергать.name.text, опровергать);

export { опровергать };