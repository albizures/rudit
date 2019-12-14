import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const алкать: PerfectVerb = {
  name: Word('алкать', 3),
  singular1stPerson: Word('алчу', 0),
  singular2ndPerson: Word('алчешь', 0),
  singular3rdPerson: Word('алчет', 0),
  plural1stPerson: Word('алчем', 0),
  plural2ndPerson: Word('алчете', 0),
  plural3rdPerson: Word('алчут', 0),
  masculinePast: Word('алкал', 3),
  femininePast: Word('алкала', 3),
  neuterPast: Word('алкало', 3),
  pluralPast: Word('алкали', 3),
  imperativeInformal: Word('алчи', 0),
  imperativeFormal: Word('алчите', 0),
  imperfect: [],
};

perfectVerbs.set(алкать.name.text, алкать);

export { алкать };