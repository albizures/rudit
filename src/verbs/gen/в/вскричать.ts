import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскричать: PerfectVerb = {
  name: Word('вскричать', 6),
  singular1stPerson: Word('вскричу', 6),
  singular2ndPerson: Word('вскричишь', 6),
  singular3rdPerson: Word('вскричит', 6),
  plural1stPerson: Word('вскричим', 6),
  plural2ndPerson: Word('вскричите', 6),
  plural3rdPerson: Word('вскричат', 6),
  masculinePast: Word('вскричал', 6),
  femininePast: Word('вскричала', 6),
  neuterPast: Word('вскричало', 6),
  pluralPast: Word('вскричали', 6),
  imperativeInformal: Word('вскричи', 6),
  imperativeFormal: Word('вскричите', 6),
  imperfect: [],
};

perfectVerbs.set(вскричать.name.text, вскричать);

export { вскричать };