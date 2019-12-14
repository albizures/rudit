import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилагать: PerfectVerb = {
  name: Word('прилагать', 6),
  singular1stPerson: Word('прилагаю', 6),
  singular2ndPerson: Word('прилагаешь', 6),
  singular3rdPerson: Word('прилагает', 6),
  plural1stPerson: Word('прилагаем', 6),
  plural2ndPerson: Word('прилагаете', 6),
  plural3rdPerson: Word('прилагают', 6),
  masculinePast: Word('прилагал', 6),
  femininePast: Word('прилагала', 6),
  neuterPast: Word('прилагало', 6),
  pluralPast: Word('прилагали', 6),
  imperativeInformal: Word('прилагай', 6),
  imperativeFormal: Word('прилагайте', 6),
  imperfect: ['приложить'],
};

perfectVerbs.set(прилагать.name.text, прилагать);

export { прилагать };