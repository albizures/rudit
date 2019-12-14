import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надсадиться: PerfectVerb = {
  name: Word('надсадиться', 6),
  singular1stPerson: Word('надсажусь', 6),
  singular2ndPerson: Word('надсадишься', 4),
  singular3rdPerson: Word('надсадится', 4),
  plural1stPerson: Word('надсадимся', 4),
  plural2ndPerson: Word('надсадитесь', 4),
  plural3rdPerson: Word('надсадятся', 4),
  masculinePast: Word('надсадился', 6),
  femininePast: Word('надсадилась', 6),
  neuterPast: Word('надсадилось', 6),
  pluralPast: Word('надсадились', 6),
  imperativeInformal: Word('надсадись', 6),
  imperativeFormal: Word('надсадитесь', 6),
  imperfect: [],
};

perfectVerbs.set(надсадиться.name.text, надсадиться);

export { надсадиться };