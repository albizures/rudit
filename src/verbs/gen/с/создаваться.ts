import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const создаваться: PerfectVerb = {
  name: Word('создаваться', 6),
  singular1stPerson: Word('создаюсь', 5),
  singular2ndPerson: Word('создаёшься', 4),
  singular3rdPerson: Word('создаётся', 4),
  plural1stPerson: Word('создаёмся', 4),
  plural2ndPerson: Word('создаётесь', 4),
  plural3rdPerson: Word('создаются', 5),
  masculinePast: Word('создавался', 6),
  femininePast: Word('создавалась', 6),
  neuterPast: Word('создавалось', 6),
  pluralPast: Word('создавались', 6),
  imperativeInformal: Word('создавайся', 6),
  imperativeFormal: Word('создавайтесь', 6),
  imperfect: ['создаться'],
};

perfectVerbs.set(создаваться.name.text, создаваться);

export { создаваться };