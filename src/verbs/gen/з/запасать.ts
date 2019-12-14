import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запасать: PerfectVerb = {
  name: Word('запасать', 5),
  singular1stPerson: Word('запасаю', 5),
  singular2ndPerson: Word('запасаешь', 5),
  singular3rdPerson: Word('запасает', 5),
  plural1stPerson: Word('запасаем', 5),
  plural2ndPerson: Word('запасаете', 5),
  plural3rdPerson: Word('запасают', 5),
  masculinePast: Word('запасал', 5),
  femininePast: Word('запасала', 5),
  neuterPast: Word('запасало', 5),
  pluralPast: Word('запасали', 5),
  imperativeInformal: Word('запасай', 5),
  imperativeFormal: Word('запасайте', 5),
  imperfect: ['запасти'],
};

perfectVerbs.set(запасать.name.text, запасать);

export { запасать };