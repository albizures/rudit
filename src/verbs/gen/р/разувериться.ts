import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разувериться: PerfectVerb = {
  name: Word('разувериться', 5),
  singular1stPerson: Word('разуверюсь', 5),
  singular2ndPerson: Word('разуверишься', 5),
  singular3rdPerson: Word('разуверится', 5),
  plural1stPerson: Word('разуверимся', 5),
  plural2ndPerson: Word('разуверитесь', 5),
  plural3rdPerson: Word('разуверятся', 5),
  masculinePast: Word('разуверился', 5),
  femininePast: Word('разуверилась', 5),
  neuterPast: Word('разуверилось', 5),
  pluralPast: Word('разуверились', 5),
  imperativeInformal: Word('разуверься', 5),
  imperativeFormal: Word('разуверьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разувериться.name.text, разувериться);

export { разувериться };