import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздаваться: PerfectVerb = {
  name: Word('раздаваться', 6),
  singular1stPerson: Word('раздаюсь', 5),
  singular2ndPerson: Word('раздаёшься', 1),
  singular3rdPerson: Word('раздаётся', 1),
  plural1stPerson: Word('раздаёмся', 1),
  plural2ndPerson: Word('раздаётесь', 1),
  plural3rdPerson: Word('раздаются', 5),
  masculinePast: Word('раздавался', 6),
  femininePast: Word('раздавалась', 6),
  neuterPast: Word('раздавалось', 6),
  pluralPast: Word('раздавались', 6),
  imperativeInformal: Word('раздавайся', 6),
  imperativeFormal: Word('раздавайтесь', 6),
  imperfect: ['раздаться'],
};

perfectVerbs.set(раздаваться.name.text, раздаваться);

export { раздаваться };