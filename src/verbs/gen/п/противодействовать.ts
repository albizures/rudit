import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противодействовать: PerfectVerb = {
  name: Word('противодействовать', 8),
  singular1stPerson: Word('противодействую', 8),
  singular2ndPerson: Word('противодействуешь', 8),
  singular3rdPerson: Word('противодействует', 8),
  plural1stPerson: Word('противодействуем', 8),
  plural2ndPerson: Word('противодействуете', 8),
  plural3rdPerson: Word('противодействуют', 8),
  masculinePast: Word('противодействовал', 8),
  femininePast: Word('противодействовала', 8),
  neuterPast: Word('противодействовало', 8),
  pluralPast: Word('противодействовали', 8),
  imperativeInformal: Word('противодействуй', 8),
  imperativeFormal: Word('противодействуйте', 8),
  imperfect: [],
};

perfectVerbs.set(противодействовать.name.text, противодействовать);

export { противодействовать };