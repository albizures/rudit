import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скандировать: PerfectVerb = {
  name: Word('скандировать', 5),
  singular1stPerson: Word('скандирую', 5),
  singular2ndPerson: Word('скандируешь', 5),
  singular3rdPerson: Word('скандирует', 5),
  plural1stPerson: Word('скандируем', 5),
  plural2ndPerson: Word('скандируете', 5),
  plural3rdPerson: Word('скандируют', 5),
  masculinePast: Word('скандировал', 5),
  femininePast: Word('скандировала', 5),
  neuterPast: Word('скандировало', 5),
  pluralPast: Word('скандировали', 5),
  imperativeInformal: Word('скандируй', 5),
  imperativeFormal: Word('скандируйте', 5),
  imperfect: [],
};

perfectVerbs.set(скандировать.name.text, скандировать);

export { скандировать };