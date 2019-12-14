import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разместиться: PerfectVerb = {
  name: Word('разместиться', 7),
  singular1stPerson: Word('размещусь', 6),
  singular2ndPerson: Word('разместишься', 7),
  singular3rdPerson: Word('разместится', 7),
  plural1stPerson: Word('разместимся', 7),
  plural2ndPerson: Word('разместитесь', 7),
  plural3rdPerson: Word('разместятся', 7),
  masculinePast: Word('разместился', 7),
  femininePast: Word('разместилась', 7),
  neuterPast: Word('разместилось', 7),
  pluralPast: Word('разместились', 7),
  imperativeInformal: Word('разместись', 7),
  imperativeFormal: Word('разместитесь', 7),
  imperfect: [],
};

perfectVerbs.set(разместиться.name.text, разместиться);

export { разместиться };