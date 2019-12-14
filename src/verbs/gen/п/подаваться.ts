import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подаваться: PerfectVerb = {
  name: Word('подаваться', 5),
  singular1stPerson: Word('подаюсь', 4),
  singular2ndPerson: Word('подаёшься', 3),
  singular3rdPerson: Word('подаётся', 3),
  plural1stPerson: Word('подаёмся', 3),
  plural2ndPerson: Word('подаётесь', 3),
  plural3rdPerson: Word('подаются', 4),
  masculinePast: Word('подавался', 5),
  femininePast: Word('подавалась', 5),
  neuterPast: Word('подавалось', 5),
  pluralPast: Word('подавались', 5),
  imperativeInformal: Word('подавайся', 5),
  imperativeFormal: Word('подавайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подаваться.name.text, подаваться);

export { подаваться };