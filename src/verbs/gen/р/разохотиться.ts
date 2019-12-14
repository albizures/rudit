import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разохотиться: PerfectVerb = {
  name: Word('разохотиться', 5),
  singular1stPerson: Word('разохочусь', 5),
  singular2ndPerson: Word('разохотишься', 5),
  singular3rdPerson: Word('разохотится', 5),
  plural1stPerson: Word('разохотимся', 5),
  plural2ndPerson: Word('разохотитесь', 5),
  plural3rdPerson: Word('разохотятся', 5),
  masculinePast: Word('разохотился', 5),
  femininePast: Word('разохотилась', 5),
  neuterPast: Word('разохотилось', 5),
  pluralPast: Word('разохотились', 5),
  imperativeInformal: Word('разохоться', 5),
  imperativeFormal: Word('разохотьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разохотиться.name.text, разохотиться);

export { разохотиться };