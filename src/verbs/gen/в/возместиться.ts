import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возместиться: PerfectVerb = {
  name: Word('возместиться', 7),
  singular1stPerson: Word('возмещусь', 6),
  singular2ndPerson: Word('возместишься', 7),
  singular3rdPerson: Word('возместится', 7),
  plural1stPerson: Word('возместимся', 7),
  plural2ndPerson: Word('возместитесь', 7),
  plural3rdPerson: Word('возместятся', 7),
  masculinePast: Word('возместился', 7),
  femininePast: Word('возместилась', 7),
  neuterPast: Word('возместилось', 7),
  pluralPast: Word('возместились', 7),
  imperativeInformal: Word('возместись', 7),
  imperativeFormal: Word('возместитесь', 7),
  imperfect: [],
};

perfectVerbs.set(возместиться.name.text, возместиться);

export { возместиться };