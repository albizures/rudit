import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удаваться: PerfectVerb = {
  name: Word('удаваться', 4),
  singular1stPerson: Word('удаюсь', 3),
  singular2ndPerson: Word('удаёшься', 3),
  singular3rdPerson: Word('удаётся', 3),
  plural1stPerson: Word('удаёмся', 3),
  plural2ndPerson: Word('удаётесь', 3),
  plural3rdPerson: Word('удаются', 3),
  masculinePast: Word('удавался', 4),
  femininePast: Word('удавалась', 4),
  neuterPast: Word('удавалось', 4),
  pluralPast: Word('удавались', 4),
  imperativeInformal: Word('удавайся', 4),
  imperativeFormal: Word('удавайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(удаваться.name.text, удаваться);

export { удаваться };