import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рычать: PerfectVerb = {
  name: Word('рычать', 3),
  singular1stPerson: Word('рычу', 3),
  singular2ndPerson: Word('рычишь', 3),
  singular3rdPerson: Word('рычит', 3),
  plural1stPerson: Word('рычим', 3),
  plural2ndPerson: Word('рычите', 3),
  plural3rdPerson: Word('рычат', 3),
  masculinePast: Word('рычал', 3),
  femininePast: Word('рычала', 3),
  neuterPast: Word('рычало', 3),
  pluralPast: Word('рычали', 3),
  imperativeInformal: Word('рычи', 3),
  imperativeFormal: Word('рычите', 3),
  imperfect: ['прорычать'],
};

perfectVerbs.set(рычать.name.text, рычать);

export { рычать };