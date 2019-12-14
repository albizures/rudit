import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сместиться: PerfectVerb = {
  name: Word('сместиться', 5),
  singular1stPerson: Word('смещусь', 4),
  singular2ndPerson: Word('сместишься', 5),
  singular3rdPerson: Word('сместится', 5),
  plural1stPerson: Word('сместимся', 5),
  plural2ndPerson: Word('сместитесь', 5),
  plural3rdPerson: Word('сместятся', 5),
  masculinePast: Word('сместился', 5),
  femininePast: Word('сместилась', 5),
  neuterPast: Word('сместилось', 5),
  pluralPast: Word('сместились', 5),
  imperativeInformal: Word('сместись', 5),
  imperativeFormal: Word('сместитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сместиться.name.text, сместиться);

export { сместиться };