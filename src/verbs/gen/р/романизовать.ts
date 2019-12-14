import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const романизовать: PerfectVerb = {
  name: Word('романизовать', 9),
  singular1stPerson: Word('романизую', 7),
  singular2ndPerson: Word('романизуешь', 7),
  singular3rdPerson: Word('романизует', 7),
  plural1stPerson: Word('романизуем', 7),
  plural2ndPerson: Word('романизуете', 7),
  plural3rdPerson: Word('романизуют', 7),
  masculinePast: Word('романизовал', 9),
  femininePast: Word('романизовала', 9),
  neuterPast: Word('романизовало', 9),
  pluralPast: Word('романизовали', 9),
  imperativeInformal: Word('романизуй', 7),
  imperativeFormal: Word('романизуйте', 7),
  imperfect: [],
};

perfectVerbs.set(романизовать.name.text, романизовать);

export { романизовать };