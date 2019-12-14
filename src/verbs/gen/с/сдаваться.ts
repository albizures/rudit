import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдаваться: PerfectVerb = {
  name: Word('сдаваться', 4),
  singular1stPerson: Word('сдаюсь', 3),
  singular2ndPerson: Word('сдаёшься', 3),
  singular3rdPerson: Word('сдаётся', 3),
  plural1stPerson: Word('сдаёмся', 3),
  plural2ndPerson: Word('сдаётесь', 3),
  plural3rdPerson: Word('сдаются', 3),
  masculinePast: Word('сдавался', 4),
  femininePast: Word('сдавалась', 4),
  neuterPast: Word('сдавалось', 4),
  pluralPast: Word('сдавались', 4),
  imperativeInformal: Word('сдавайся', 4),
  imperativeFormal: Word('сдавайтесь', 4),
  imperfect: ['сдаться'],
};

perfectVerbs.set(сдаваться.name.text, сдаваться);

export { сдаваться };