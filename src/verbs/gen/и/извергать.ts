import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извергать: PerfectVerb = {
  name: Word('извергать', 6),
  singular1stPerson: Word('извергаю', 6),
  singular2ndPerson: Word('извергаешь', 6),
  singular3rdPerson: Word('извергает', 6),
  plural1stPerson: Word('извергаем', 6),
  plural2ndPerson: Word('извергаете', 6),
  plural3rdPerson: Word('извергают', 6),
  masculinePast: Word('извергал', 6),
  femininePast: Word('извергала', 6),
  neuterPast: Word('извергало', 6),
  pluralPast: Word('извергали', 6),
  imperativeInformal: Word('извергай', 6),
  imperativeFormal: Word('извергайте', 6),
  imperfect: [],
};

perfectVerbs.set(извергать.name.text, извергать);

export { извергать };