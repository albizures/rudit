import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поместиться: PerfectVerb = {
  name: Word('поместиться', 6),
  singular1stPerson: Word('помещусь', 5),
  singular2ndPerson: Word('поместишься', 6),
  singular3rdPerson: Word('поместится', 6),
  plural1stPerson: Word('поместимся', 6),
  plural2ndPerson: Word('поместитесь', 6),
  plural3rdPerson: Word('поместятся', 6),
  masculinePast: Word('поместился', 6),
  femininePast: Word('поместилась', 6),
  neuterPast: Word('поместилось', 6),
  pluralPast: Word('поместились', 6),
  imperativeInformal: Word('поместись', 6),
  imperativeFormal: Word('поместитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поместиться.name.text, поместиться);

export { поместиться };