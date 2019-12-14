import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возгордиться: PerfectVerb = {
  name: Word('возгордиться', 7),
  singular1stPerson: Word('возгоржусь', 7),
  singular2ndPerson: Word('возгордишься', 7),
  singular3rdPerson: Word('возгордится', 7),
  plural1stPerson: Word('возгордимся', 7),
  plural2ndPerson: Word('возгордитесь', 7),
  plural3rdPerson: Word('возгордятся', 7),
  masculinePast: Word('возгордился', 7),
  femininePast: Word('возгордилась', 7),
  neuterPast: Word('возгордилось', 7),
  pluralPast: Word('возгордились', 7),
  imperativeInformal: Word('возгордись', 7),
  imperativeFormal: Word('возгордитесь', 7),
  imperfect: [],
};

perfectVerbs.set(возгордиться.name.text, возгордиться);

export { возгордиться };