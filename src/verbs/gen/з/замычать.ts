import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замычать: PerfectVerb = {
  name: Word('замычать', 5),
  singular1stPerson: Word('замычу', 5),
  singular2ndPerson: Word('замычишь', 5),
  singular3rdPerson: Word('замычит', 5),
  plural1stPerson: Word('замычим', 5),
  plural2ndPerson: Word('замычите', 5),
  plural3rdPerson: Word('замычат', 5),
  masculinePast: Word('замычал', 5),
  femininePast: Word('замычала', 5),
  neuterPast: Word('замычало', 5),
  pluralPast: Word('замычали', 5),
  imperativeInformal: Word('замычи', 5),
  imperativeFormal: Word('замычите', 5),
  imperfect: [],
};

perfectVerbs.set(замычать.name.text, замычать);

export { замычать };