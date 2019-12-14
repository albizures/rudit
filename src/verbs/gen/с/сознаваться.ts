import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сознаваться: PerfectVerb = {
  name: Word('сознаваться', 6),
  singular1stPerson: Word('сознаюсь', 5),
  singular2ndPerson: Word('сознаёшься', 4),
  singular3rdPerson: Word('сознаётся', 4),
  plural1stPerson: Word('сознаёмся', 4),
  plural2ndPerson: Word('сознаётесь', 4),
  plural3rdPerson: Word('сознаются', 5),
  masculinePast: Word('сознавался', 6),
  femininePast: Word('сознавалась', 6),
  neuterPast: Word('сознавалось', 6),
  pluralPast: Word('сознавались', 6),
  imperativeInformal: Word('сознавайся', 6),
  imperativeFormal: Word('сознавайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(сознаваться.name.text, сознаваться);

export { сознаваться };