import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напасать: PerfectVerb = {
  name: Word('напасать', 5),
  singular1stPerson: Word('напасаю', 5),
  singular2ndPerson: Word('напасаешь', 5),
  singular3rdPerson: Word('напасает', 5),
  plural1stPerson: Word('напасаем', 5),
  plural2ndPerson: Word('напасаете', 5),
  plural3rdPerson: Word('напасают', 5),
  masculinePast: Word('напасал', 5),
  femininePast: Word('напасала', 5),
  neuterPast: Word('напасало', 5),
  pluralPast: Word('напасали', 5),
  imperativeInformal: Word('напасай', 5),
  imperativeFormal: Word('напасайте', 5),
  imperfect: [],
};

perfectVerbs.set(напасать.name.text, напасать);

export { напасать };