import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужасать: PerfectVerb = {
  name: Word('ужасать', 4),
  singular1stPerson: Word('ужасаю', 4),
  singular2ndPerson: Word('ужасаешь', 4),
  singular3rdPerson: Word('ужасает', 4),
  plural1stPerson: Word('ужасаем', 4),
  plural2ndPerson: Word('ужасаете', 4),
  plural3rdPerson: Word('ужасают', 4),
  masculinePast: Word('ужасал', 4),
  femininePast: Word('ужасала', 4),
  neuterPast: Word('ужасало', 4),
  pluralPast: Word('ужасали', 4),
  imperativeInformal: Word('ужасай', 4),
  imperativeFormal: Word('ужасайте', 4),
  imperfect: ['ужаснуть'],
};

perfectVerbs.set(ужасать.name.text, ужасать);

export { ужасать };