import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придавать: PerfectVerb = {
  name: Word('придавать', 6),
  singular1stPerson: Word('придаю', 5),
  singular2ndPerson: Word('придаёшь', 5),
  singular3rdPerson: Word('придаёт', 5),
  plural1stPerson: Word('придаём', 5),
  plural2ndPerson: Word('придаёте', 5),
  plural3rdPerson: Word('придают', 5),
  masculinePast: Word('придавал', 6),
  femininePast: Word('придавала', 6),
  neuterPast: Word('придавало', 6),
  pluralPast: Word('придавали', 6),
  imperativeInformal: Word('придавай', 6),
  imperativeFormal: Word('придавайте', 6),
  imperfect: [],
};

perfectVerbs.set(придавать.name.text, придавать);

export { придавать };