import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдавать: PerfectVerb = {
  name: Word('выдавать', 5),
  singular1stPerson: Word('выдаю', 4),
  singular2ndPerson: Word('выдаёшь', 3),
  singular3rdPerson: Word('выдаёт', 3),
  plural1stPerson: Word('выдаём', 3),
  plural2ndPerson: Word('выдаёте', 3),
  plural3rdPerson: Word('выдают', 4),
  masculinePast: Word('выдавал', 5),
  femininePast: Word('выдавала', 5),
  neuterPast: Word('выдавало', 5),
  pluralPast: Word('выдавали', 5),
  imperativeInformal: Word('выдавай', 5),
  imperativeFormal: Word('выдавайте', 5),
  imperfect: ['выдать'],
};

perfectVerbs.set(выдавать.name.text, выдавать);

export { выдавать };