import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мычать: PerfectVerb = {
  name: Word('мычать', 3),
  singular1stPerson: Word('мычу', 3),
  singular2ndPerson: Word('мычишь', 3),
  singular3rdPerson: Word('мычит', 3),
  plural1stPerson: Word('мычим', 3),
  plural2ndPerson: Word('мычите', 3),
  plural3rdPerson: Word('мычат', 3),
  masculinePast: Word('мычал', 3),
  femininePast: Word('мычала', 3),
  neuterPast: Word('мычало', 3),
  pluralPast: Word('мычали', 3),
  imperativeInformal: Word('мычи', 3),
  imperativeFormal: Word('мычите', 3),
  imperfect: ['промычать'],
};

perfectVerbs.set(мычать.name.text, мычать);

export { мычать };