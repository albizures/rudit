import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угасать: PerfectVerb = {
  name: Word('угасать', 4),
  singular1stPerson: Word('угасаю', 4),
  singular2ndPerson: Word('угасаешь', 4),
  singular3rdPerson: Word('угасает', 4),
  plural1stPerson: Word('угасаем', 4),
  plural2ndPerson: Word('угасаете', 4),
  plural3rdPerson: Word('угасают', 4),
  masculinePast: Word('угасал', 4),
  femininePast: Word('угасала', 4),
  neuterPast: Word('угасало', 4),
  pluralPast: Word('угасали', 4),
  imperativeInformal: Word('угасай', 4),
  imperativeFormal: Word('угасайте', 4),
  imperfect: [],
};

perfectVerbs.set(угасать.name.text, угасать);

export { угасать };