import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошибить: PerfectVerb = {
  name: Word('прошибить', 6),
  singular1stPerson: Word('прошибу', 6),
  singular2ndPerson: Word('прошибёшь', 6),
  singular3rdPerson: Word('прошибёт', 6),
  plural1stPerson: Word('прошибём', 6),
  plural2ndPerson: Word('прошибёте', 6),
  plural3rdPerson: Word('прошибут', 6),
  masculinePast: Word('прошиб', 4),
  femininePast: Word('прошибла', 4),
  neuterPast: Word('прошибло', 4),
  pluralPast: Word('прошибли', 4),
  imperativeInformal: Word('прошиби', 6),
  imperativeFormal: Word('прошибите', 6),
  imperfect: [],
};

perfectVerbs.set(прошибить.name.text, прошибить);

export { прошибить };