import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорычать: PerfectVerb = {
  name: Word('прорычать', 6),
  singular1stPerson: Word('прорычу', 6),
  singular2ndPerson: Word('прорычишь', 6),
  singular3rdPerson: Word('прорычит', 6),
  plural1stPerson: Word('прорычим', 6),
  plural2ndPerson: Word('прорычите', 6),
  plural3rdPerson: Word('прорычат', 6),
  masculinePast: Word('прорычал', 6),
  femininePast: Word('прорычала', 6),
  neuterPast: Word('прорычало', 6),
  pluralPast: Word('прорычали', 6),
  imperativeInformal: Word('прорычи', 6),
  imperativeFormal: Word('прорычите', 6),
  imperfect: [],
};

perfectVerbs.set(прорычать.name.text, прорычать);

export { прорычать };