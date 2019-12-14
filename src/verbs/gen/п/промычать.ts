import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промычать: PerfectVerb = {
  name: Word('промычать', 6),
  singular1stPerson: Word('промычу', 6),
  singular2ndPerson: Word('промычишь', 6),
  singular3rdPerson: Word('промычит', 6),
  plural1stPerson: Word('промычим', 6),
  plural2ndPerson: Word('промычите', 6),
  plural3rdPerson: Word('промычат', 6),
  masculinePast: Word('промычал', 6),
  femininePast: Word('промычала', 6),
  neuterPast: Word('промычало', 6),
  pluralPast: Word('промычали', 6),
  imperativeInformal: Word('промычи', 6),
  imperativeFormal: Word('промычите', 6),
  imperfect: [],
};

perfectVerbs.set(промычать.name.text, промычать);

export { промычать };