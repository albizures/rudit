import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натаскать: PerfectVerb = {
  name: Word('натаскать', 6),
  singular1stPerson: Word('натаскаю', 6),
  singular2ndPerson: Word('натаскаешь', 6),
  singular3rdPerson: Word('натаскает', 6),
  plural1stPerson: Word('натаскаем', 6),
  plural2ndPerson: Word('натаскаете', 6),
  plural3rdPerson: Word('натаскают', 6),
  masculinePast: Word('натаскал', 6),
  femininePast: Word('натаскала', 6),
  neuterPast: Word('натаскало', 6),
  pluralPast: Word('натаскали', 6),
  imperativeInformal: Word('натаскай', 6),
  imperativeFormal: Word('натаскайте', 6),
  imperfect: [],
};

perfectVerbs.set(натаскать.name.text, натаскать);

export { натаскать };