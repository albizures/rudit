import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заприходовать: PerfectVerb = {
  name: Word('заприходовать', 6),
  singular1stPerson: Word('заприходую', 6),
  singular2ndPerson: Word('заприходуешь', 6),
  singular3rdPerson: Word('заприходует', 6),
  plural1stPerson: Word('заприходуем', 6),
  plural2ndPerson: Word('заприходуете', 6),
  plural3rdPerson: Word('заприходуют', 6),
  masculinePast: Word('заприходовал', 6),
  femininePast: Word('заприходовала', 6),
  neuterPast: Word('заприходовало', 6),
  pluralPast: Word('заприходовали', 6),
  imperativeInformal: Word('заприходуй', 6),
  imperativeFormal: Word('заприходуйте', 6),
  imperfect: [],
};

perfectVerbs.set(заприходовать.name.text, заприходовать);

export { заприходовать };