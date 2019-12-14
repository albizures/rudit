import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подремать: PerfectVerb = {
  name: Word('подремать', 6),
  singular1stPerson: Word('подремлю', 7),
  singular2ndPerson: Word('подремлешь', 4),
  singular3rdPerson: Word('подремлет', 4),
  plural1stPerson: Word('подремлем', 4),
  plural2ndPerson: Word('подремлете', 4),
  plural3rdPerson: Word('подремлют', 4),
  masculinePast: Word('подремал', 6),
  femininePast: Word('подремала', 6),
  neuterPast: Word('подремало', 6),
  pluralPast: Word('подремали', 6),
  imperativeInformal: Word('подремли', 7),
  imperativeFormal: Word('подремлите', 7),
  imperfect: [],
};

perfectVerbs.set(подремать.name.text, подремать);

export { подремать };