import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдаваться: PerfectVerb = {
  name: Word('вдаваться', 4),
  singular1stPerson: Word('вдаюсь', 3),
  singular2ndPerson: Word('вдаёшься', 2),
  singular3rdPerson: Word('вдаётся', 2),
  plural1stPerson: Word('вдаёмся', 2),
  plural2ndPerson: Word('вдаётесь', 2),
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