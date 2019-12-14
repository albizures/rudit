import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокричать: PerfectVerb = {
  name: Word('прокричать', 7),
  singular1stPerson: Word('прокричу', 7),
  singular2ndPerson: Word('прокричишь', 7),
  singular3rdPerson: Word('прокричит', 7),
  plural1stPerson: Word('прокричим', 7),
  plural2ndPerson: Word('прокричите', 7),
  plural3rdPerson: Word('прокричат', 7),
  masculinePast: Word('прокричал', 7),
  femininePast: Word('прокричала', 7),
  neuterPast: Word('прокричало', 7),
  pluralPast: Word('прокричали', 7),
  imperativeInformal: Word('прокричи', 7),
  imperativeFormal: Word('прокричите', 7),
  imperfect: [],
};

perfectVerbs.set(прокричать.name.text, прокричать);

export { прокричать };