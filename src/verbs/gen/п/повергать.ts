import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повергать: PerfectVerb = {
  name: Word('повергать', 6),
  singular1stPerson: Word('повергаю', 6),
  singular2ndPerson: Word('повергаешь', 6),
  singular3rdPerson: Word('повергает', 6),
  plural1stPerson: Word('повергаем', 6),
  plural2ndPerson: Word('повергаете', 6),
  plural3rdPerson: Word('повергают', 6),
  masculinePast: Word('повергал', 6),
  femininePast: Word('повергала', 6),
  neuterPast: Word('повергало', 6),
  pluralPast: Word('повергали', 6),
  imperativeInformal: Word('повергай', 6),
  imperativeFormal: Word('повергайте', 6),
  imperfect: [],
};

perfectVerbs.set(повергать.name.text, повергать);

export { повергать };