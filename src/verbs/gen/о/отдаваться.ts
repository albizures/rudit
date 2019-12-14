import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдаваться: PerfectVerb = {
  name: Word('отдаваться', 5),
  singular1stPerson: Word('отдаюсь', 4),
  singular2ndPerson: Word('отдаёшься', 3),
  singular3rdPerson: Word('отдаётся', 3),
  plural1stPerson: Word('отдаёмся', 3),
  plural2ndPerson: Word('отдаётесь', 3),
  plural3rdPerson: Word('отдаются', 4),
  masculinePast: Word('отдавался', 5),
  femininePast: Word('отдавалась', 5),
  neuterPast: Word('отдавалось', 5),
  pluralPast: Word('отдавались', 5),
  imperativeInformal: Word('отдавайся', 5),
  imperativeFormal: Word('отдавайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отдаваться.name.text, отдаваться);

export { отдаваться };