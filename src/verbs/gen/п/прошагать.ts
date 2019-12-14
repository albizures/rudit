import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошагать: PerfectVerb = {
  name: Word('прошагать', 6),
  singular1stPerson: Word('прошагаю', 6),
  singular2ndPerson: Word('прошагаешь', 6),
  singular3rdPerson: Word('прошагает', 6),
  plural1stPerson: Word('прошагаем', 6),
  plural2ndPerson: Word('прошагаете', 6),
  plural3rdPerson: Word('прошагают', 6),
  masculinePast: Word('прошагал', 6),
  femininePast: Word('прошагала', 6),
  neuterPast: Word('прошагало', 6),
  pluralPast: Word('прошагали', 6),
  imperativeInformal: Word('прошагай', 6),
  imperativeFormal: Word('прошагайте', 6),
  imperfect: [],
};

perfectVerbs.set(прошагать.name.text, прошагать);

export { прошагать };