import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлечиться: PerfectVerb = {
  name: Word('подлечиться', 6),
  singular1stPerson: Word('подлечусь', 6),
  singular2ndPerson: Word('подлечишься', 4),
  singular3rdPerson: Word('подлечится', 4),
  plural1stPerson: Word('подлечимся', 4),
  plural2ndPerson: Word('подлечитесь', 4),
  plural3rdPerson: Word('подлечатся', 4),
  masculinePast: Word('подлечился', 6),
  femininePast: Word('подлечилась', 6),
  neuterPast: Word('подлечилось', 6),
  pluralPast: Word('подлечились', 6),
  imperativeInformal: Word('подлечись', 6),
  imperativeFormal: Word('подлечитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подлечиться.name.text, подлечиться);

export { подлечиться };