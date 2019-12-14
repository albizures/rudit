import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдавать: PerfectVerb = {
  name: Word('отдавать', 5),
  singular1stPerson: Word('отдаю', 4),
  singular2ndPerson: Word('отдаёшь', 3),
  singular3rdPerson: Word('отдаёт', 3),
  plural1stPerson: Word('отдаём', 3),
  plural2ndPerson: Word('отдаёте', 3),
  plural3rdPerson: Word('отдают', 4),
  masculinePast: Word('отдавал', 5),
  femininePast: Word('отдавала', 5),
  neuterPast: Word('отдавало', 5),
  pluralPast: Word('отдавали', 5),
  imperativeInformal: Word('отдавай', 5),
  imperativeFormal: Word('отдавайте', 5),
  imperfect: ['отдать'],
};

perfectVerbs.set(отдавать.name.text, отдавать);

export { отдавать };