import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддаваться: PerfectVerb = {
  name: Word('поддаваться', 6),
  singular1stPerson: Word('поддаюсь', 5),
  singular2ndPerson: Word('поддаёшься', 4),
  singular3rdPerson: Word('поддаётся', 4),
  plural1stPerson: Word('поддаёмся', 4),
  plural2ndPerson: Word('поддаётесь', 4),
  plural3rdPerson: Word('поддаются', 5),
  masculinePast: Word('поддавался', 6),
  femininePast: Word('поддавалась', 6),
  neuterPast: Word('поддавалось', 6),
  pluralPast: Word('поддавались', 6),
  imperativeInformal: Word('поддавайся', 6),
  imperativeFormal: Word('поддавайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поддаваться.name.text, поддаваться);

export { поддаваться };