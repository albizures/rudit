import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдаваться: PerfectVerb = {
  name: Word('обдаваться', 5),
  singular1stPerson: Word('обдаюсь', 4),
  singular2ndPerson: Word('обдаёшься', 4),
  singular3rdPerson: Word('обдаётся', 4),
  plural1stPerson: Word('обдаёмся', 4),
  plural2ndPerson: Word('обдаётесь', 4),
  plural3rdPerson: Word('обдаются', 4),
  masculinePast: Word('обдавался', 5),
  femininePast: Word('обдавалась', 5),
  neuterPast: Word('обдавалось', 5),
  pluralPast: Word('обдавались', 5),
  imperativeInformal: Word('обдавайся', 5),
  imperativeFormal: Word('обдавайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обдаваться.name.text, обдаваться);

export { обдаваться };