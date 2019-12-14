import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задаваться: PerfectVerb = {
  name: Word('задаваться', 5),
  singular1stPerson: Word('задаюсь', 4),
  singular2ndPerson: Word('задаёшься', 4),
  singular3rdPerson: Word('задаётся', 4),
  plural1stPerson: Word('задаёмся', 4),
  plural2ndPerson: Word('задаётесь', 4),
  plural3rdPerson: Word('задаются', 4),
  masculinePast: Word('задавался', 5),
  femininePast: Word('задавалась', 5),
  neuterPast: Word('задавалось', 5),
  pluralPast: Word('задавались', 5),
  imperativeInformal: Word('задавайся', 5),
  imperativeFormal: Word('задавайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(задаваться.name.text, задаваться);

export { задаваться };