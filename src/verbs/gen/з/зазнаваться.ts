import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазнаваться: PerfectVerb = {
  name: Word('зазнаваться', 6),
  singular1stPerson: Word('зазнаюсь', 5),
  singular2ndPerson: Word('зазнаёшься', 5),
  singular3rdPerson: Word('зазнаётся', 5),
  plural1stPerson: Word('зазнаёмся', 5),
  plural2ndPerson: Word('зазнаётесь', 5),
  plural3rdPerson: Word('зазнаются', 5),
  masculinePast: Word('зазнавался', 6),
  femininePast: Word('зазнавалась', 6),
  neuterPast: Word('зазнавалось', 6),
  pluralPast: Word('зазнавались', 6),
  imperativeInformal: Word('зазнавайся', 6),
  imperativeFormal: Word('зазнавайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(зазнаваться.name.text, зазнаваться);

export { зазнаваться };