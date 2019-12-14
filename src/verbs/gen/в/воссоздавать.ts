import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоздавать: PerfectVerb = {
  name: Word('воссоздавать', 9),
  singular1stPerson: Word('воссоздаю', 8),
  singular2ndPerson: Word('воссоздаёшь', 8),
  singular3rdPerson: Word('воссоздаёт', 8),
  plural1stPerson: Word('воссоздаём', 8),
  plural2ndPerson: Word('воссоздаёте', 8),
  plural3rdPerson: Word('воссоздают', 8),
  masculinePast: Word('воссоздавал', 9),
  femininePast: Word('воссоздавала', 9),
  neuterPast: Word('воссоздавало', 9),
  pluralPast: Word('воссоздавали', 9),
  imperativeInformal: Word('воссоздавай', 9),
  imperativeFormal: Word('воссоздавайте', 9),
  imperfect: ['воссоздать'],
};

perfectVerbs.set(воссоздавать.name.text, воссоздавать);

export { воссоздавать };