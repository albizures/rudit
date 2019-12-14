import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припасать: PerfectVerb = {
  name: Word('припасать', 6),
  singular1stPerson: Word('припасаю', 6),
  singular2ndPerson: Word('припасаешь', 6),
  singular3rdPerson: Word('припасает', 6),
  plural1stPerson: Word('припасаем', 6),
  plural2ndPerson: Word('припасаете', 6),
  plural3rdPerson: Word('припасают', 6),
  masculinePast: Word('припасал', 6),
  femininePast: Word('припасала', 6),
  neuterPast: Word('припасало', 6),
  pluralPast: Word('припасали', 6),
  imperativeInformal: Word('припасай', 6),
  imperativeFormal: Word('припасайте', 6),
  imperfect: [],
};

perfectVerbs.set(припасать.name.text, припасать);

export { припасать };