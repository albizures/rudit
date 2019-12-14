import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погасать: PerfectVerb = {
  name: Word('погасать', 5),
  singular1stPerson: Word('погасаю', 5),
  singular2ndPerson: Word('погасаешь', 5),
  singular3rdPerson: Word('погасает', 5),
  plural1stPerson: Word('погасаем', 5),
  plural2ndPerson: Word('погасаете', 5),
  plural3rdPerson: Word('погасают', 5),
  masculinePast: Word('погасал', 5),
  femininePast: Word('погасала', 5),
  neuterPast: Word('погасало', 5),
  pluralPast: Word('погасали', 5),
  imperativeInformal: Word('погасай', 5),
  imperativeFormal: Word('погасайте', 5),
  imperfect: [],
};

perfectVerbs.set(погасать.name.text, погасать);

export { погасать };