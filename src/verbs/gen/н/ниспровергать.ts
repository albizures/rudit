import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ниспровергать: PerfectVerb = {
  name: Word('ниспровергать', 10),
  singular1stPerson: Word('ниспровергаю', 10),
  singular2ndPerson: Word('ниспровергаешь', 10),
  singular3rdPerson: Word('ниспровергает', 10),
  plural1stPerson: Word('ниспровергаем', 10),
  plural2ndPerson: Word('ниспровергаете', 10),
  plural3rdPerson: Word('ниспровергают', 10),
  masculinePast: Word('ниспровергал', 10),
  femininePast: Word('ниспровергала', 10),
  neuterPast: Word('ниспровергало', 10),
  pluralPast: Word('ниспровергали', 10),
  imperativeInformal: Word('ниспровергай', 10),
  imperativeFormal: Word('ниспровергайте', 10),
  imperfect: [],
};

perfectVerbs.set(ниспровергать.name.text, ниспровергать);

export { ниспровергать };