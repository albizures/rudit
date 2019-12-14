import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наставать: PerfectVerb = {
  name: Word('наставать', 6),
  singular1stPerson: Word('настаю', 5),
  singular2ndPerson: Word('настаёшь', 5),
  singular3rdPerson: Word('настаёт', 5),
  plural1stPerson: Word('настаём', 5),
  plural2ndPerson: Word('настаёте', 5),
  plural3rdPerson: Word('настают', 5),
  masculinePast: Word('наставал', 6),
  femininePast: Word('наставала', 6),
  neuterPast: Word('наставало', 6),
  pluralPast: Word('наставали', 6),
  imperativeInformal: Word('наставай', 6),
  imperativeFormal: Word('наставайте', 6),
  imperfect: ['настать'],
};

perfectVerbs.set(наставать.name.text, наставать);

export { наставать };