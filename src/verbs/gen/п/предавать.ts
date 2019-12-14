import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предавать: PerfectVerb = {
  name: Word('предавать', 6),
  singular1stPerson: Word('предаю', 5),
  singular2ndPerson: Word('предаёшь', 5),
  singular3rdPerson: Word('предаёт', 5),
  plural1stPerson: Word('предаём', 5),
  plural2ndPerson: Word('предаёте', 5),
  plural3rdPerson: Word('предают', 5),
  masculinePast: Word('предавал', 6),
  femininePast: Word('предавала', 6),
  neuterPast: Word('предавало', 6),
  pluralPast: Word('предавали', 6),
  imperativeInformal: Word('предавай', 6),
  imperativeFormal: Word('предавайте', 6),
  imperfect: ['предать'],
};

perfectVerbs.set(предавать.name.text, предавать);

export { предавать };