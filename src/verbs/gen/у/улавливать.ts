import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улавливать: PerfectVerb = {
  name: Word('улавливать', 2),
  singular1stPerson: Word('улавливаю', 2),
  singular2ndPerson: Word('улавливаешь', 2),
  singular3rdPerson: Word('улавливает', 2),
  plural1stPerson: Word('улавливаем', 2),
  plural2ndPerson: Word('улавливаете', 2),
  plural3rdPerson: Word('улавливают', 2),
  masculinePast: Word('улавливал', 2),
  femininePast: Word('улавливала', 2),
  neuterPast: Word('улавливало', 2),
  pluralPast: Word('улавливали', 2),
  imperativeInformal: Word('улавливай', 2),
  imperativeFormal: Word('улавливайте', 2),
  imperfect: ['уловить'],
};

perfectVerbs.set(улавливать.name.text, улавливать);

export { улавливать };