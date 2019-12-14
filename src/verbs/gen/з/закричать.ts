import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закричать: PerfectVerb = {
  name: Word('закричать', 6),
  singular1stPerson: Word('закричу', 6),
  singular2ndPerson: Word('закричишь', 6),
  singular3rdPerson: Word('закричит', 6),
  plural1stPerson: Word('закричим', 6),
  plural2ndPerson: Word('закричите', 6),
  plural3rdPerson: Word('закричат', 6),
  masculinePast: Word('закричал', 6),
  femininePast: Word('закричала', 6),
  neuterPast: Word('закричало', 6),
  pluralPast: Word('закричали', 6),
  imperativeInformal: Word('закричи', 6),
  imperativeFormal: Word('закричите', 6),
  imperfect: ['кричать'],
};

perfectVerbs.set(закричать.name.text, закричать);

export { закричать };