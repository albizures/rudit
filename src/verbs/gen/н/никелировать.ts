import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const никелировать: PerfectVerb = {
  name: Word('никелировать', 9),
  singular1stPerson: Word('никелирую', 7),
  singular2ndPerson: Word('никелируешь', 7),
  singular3rdPerson: Word('никелирует', 7),
  plural1stPerson: Word('никелируем', 7),
  plural2ndPerson: Word('никелируете', 7),
  plural3rdPerson: Word('никелируют', 7),
  masculinePast: Word('никелировал', 9),
  femininePast: Word('никелировала', 9),
  neuterPast: Word('никелировало', 9),
  pluralPast: Word('никелировали', 9),
  imperativeInformal: Word('никелируй', 7),
  imperativeFormal: Word('никелируйте', 7),
  imperfect: [],
};

perfectVerbs.set(никелировать.name.text, никелировать);

export { никелировать };