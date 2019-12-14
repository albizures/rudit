import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдаваться: PerfectVerb = {
  name: Word('выдаваться', 5),
  singular1stPerson: Word('выдаюсь', 4),
  singular2ndPerson: Word('выдаёшься', 4),
  singular3rdPerson: Word('выдаётся', 4),
  plural1stPerson: Word('выдаёмся', 4),
  plural2ndPerson: Word('выдаётесь', 4),
  plural3rdPerson: Word('выдаются', 4),
  masculinePast: Word('выдавался', 5),
  femininePast: Word('выдавалась', 5),
  neuterPast: Word('выдавалось', 5),
  pluralPast: Word('выдавались', 5),
  imperativeInformal: Word('выдавайся', 5),
  imperativeFormal: Word('выдавайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выдаваться.name.text, выдаваться);

export { выдаваться };