import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уместиться: PerfectVerb = {
  name: Word('уместиться', 5),
  singular1stPerson: Word('умещусь', 4),
  singular2ndPerson: Word('уместишься', 5),
  singular3rdPerson: Word('уместится', 5),
  plural1stPerson: Word('уместимся', 5),
  plural2ndPerson: Word('уместитесь', 5),
  plural3rdPerson: Word('уместятся', 5),
  masculinePast: Word('уместился', 5),
  femininePast: Word('уместилась', 5),
  neuterPast: Word('уместилось', 5),
  pluralPast: Word('уместились', 5),
  imperativeInformal: Word('уместись', 5),
  imperativeFormal: Word('уместитесь', 5),
  imperfect: [],
};

perfectVerbs.set(уместиться.name.text, уместиться);

export { уместиться };