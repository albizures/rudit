import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повадиться: PerfectVerb = {
  name: Word('повадиться', 3),
  singular1stPerson: Word('поважусь', 3),
  singular2ndPerson: Word('повадишься', 3),
  singular3rdPerson: Word('повадится', 3),
  plural1stPerson: Word('повадимся', 3),
  plural2ndPerson: Word('повадитесь', 3),
  plural3rdPerson: Word('повадятся', 3),
  masculinePast: Word('повадился', 3),
  femininePast: Word('повадилась', 3),
  neuterPast: Word('повадилось', 3),
  pluralPast: Word('повадились', 3),
  imperativeInformal: Word('повадься', 3),
  imperativeFormal: Word('повадьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(повадиться.name.text, повадиться);

export { повадиться };