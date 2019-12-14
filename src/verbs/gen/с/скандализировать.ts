import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скандализировать: PerfectVerb = {
  name: Word('скандализировать', 9),
  singular1stPerson: Word('скандализирую', 9),
  singular2ndPerson: Word('скандализируешь', 9),
  singular3rdPerson: Word('скандализирует', 9),
  plural1stPerson: Word('скандализируем', 9),
  plural2ndPerson: Word('скандализируете', 9),
  plural3rdPerson: Word('скандализируют', 9),
  masculinePast: Word('скандализировал', 9),
  femininePast: Word('скандализировала', 9),
  neuterPast: Word('скандализировало', 9),
  pluralPast: Word('скандализировали', 9),
  imperativeInformal: Word('скандализируй', 9),
  imperativeFormal: Word('скандализируйте', 9),
  imperfect: [],
};

perfectVerbs.set(скандализировать.name.text, скандализировать);

export { скандализировать };