import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ерошиться: PerfectVerb = {
  name: Word('ерошиться', 2),
  singular1stPerson: Word('ерошусь', 2),
  singular2ndPerson: Word('ерошишься', 2),
  singular3rdPerson: Word('ерошится', 2),
  plural1stPerson: Word('ерошимся', 2),
  plural2ndPerson: Word('ерошитесь', 2),
  plural3rdPerson: Word('ерошатся', 2),
  masculinePast: Word('ерошился', 2),
  femininePast: Word('ерошилась', 2),
  neuterPast: Word('ерошилось', 2),
  pluralPast: Word('ерошились', 2),
  imperativeInformal: Word('ерошься', 2),
  imperativeFormal: Word('ерошьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(ерошиться.name.text, ерошиться);

export { ерошиться };