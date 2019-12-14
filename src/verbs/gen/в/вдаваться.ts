import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдаваться: PerfectVerb = {
  name: Word('вдаваться', 4),
  singular1stPerson: Word('вдаюсь', 3),
  singular2ndPerson: Word('вдаёшься', 3),
  singular3rdPerson: Word('вдаётся', 3),
  plural1stPerson: Word('вдаёмся', 3),
  plural2ndPerson: Word('вдаётесь', 3),
  plural3rdPerson: Word('вдаются', 3),
  masculinePast: Word('вдавался', 4),
  femininePast: Word('вдавалась', 4),
  neuterPast: Word('вдавалось', 4),
  pluralPast: Word('вдавались', 4),
  imperativeInformal: Word('вдавайся', 4),
  imperativeFormal: Word('вдавайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вдаваться.name.text, вдаваться);

export { вдаваться };