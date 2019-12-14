import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накричать: PerfectVerb = {
  name: Word('накричать', 6),
  singular1stPerson: Word('накричу', 6),
  singular2ndPerson: Word('накричишь', 6),
  singular3rdPerson: Word('накричит', 6),
  plural1stPerson: Word('накричим', 6),
  plural2ndPerson: Word('накричите', 6),
  plural3rdPerson: Word('накричат', 6),
  masculinePast: Word('накричал', 6),
  femininePast: Word('накричала', 6),
  neuterPast: Word('накричало', 6),
  pluralPast: Word('накричали', 6),
  imperativeInformal: Word('накричи', 6),
  imperativeFormal: Word('накричите', 6),
  imperfect: [],
};

perfectVerbs.set(накричать.name.text, накричать);

export { накричать };