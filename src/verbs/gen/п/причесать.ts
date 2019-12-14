import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причесать: PerfectVerb = {
  name: Word('причесать', 6),
  singular1stPerson: Word('причешу', 6),
  singular2ndPerson: Word('причешешь', 4),
  singular3rdPerson: Word('причешет', 4),
  plural1stPerson: Word('причешем', 4),
  plural2ndPerson: Word('причешете', 4),
  plural3rdPerson: Word('причешут', 4),
  masculinePast: Word('причесал', 6),
  femininePast: Word('причесала', 6),
  neuterPast: Word('причесало', 6),
  pluralPast: Word('причесали', 6),
  imperativeInformal: Word('причеши', 6),
  imperativeFormal: Word('причешите', 6),
  imperfect: [],
};

perfectVerbs.set(причесать.name.text, причесать);

export { причесать };