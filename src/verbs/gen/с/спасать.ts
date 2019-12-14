import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спасать: PerfectVerb = {
  name: Word('спасать', 4),
  singular1stPerson: Word('спасаю', 4),
  singular2ndPerson: Word('спасаешь', 4),
  singular3rdPerson: Word('спасает', 4),
  plural1stPerson: Word('спасаем', 4),
  plural2ndPerson: Word('спасаете', 4),
  plural3rdPerson: Word('спасают', 4),
  masculinePast: Word('спасал', 4),
  femininePast: Word('спасала', 4),
  neuterPast: Word('спасало', 4),
  pluralPast: Word('спасали', 4),
  imperativeInformal: Word('спасай', 4),
  imperativeFormal: Word('спасайте', 4),
  imperfect: ['спасти'],
};

perfectVerbs.set(спасать.name.text, спасать);

export { спасать };