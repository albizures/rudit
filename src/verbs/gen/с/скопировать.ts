import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скопировать: PerfectVerb = {
  name: Word('скопировать', 4),
  singular1stPerson: Word('скопирую', 4),
  singular2ndPerson: Word('скопируешь', 4),
  singular3rdPerson: Word('скопирует', 4),
  plural1stPerson: Word('скопируем', 4),
  plural2ndPerson: Word('скопируете', 4),
  plural3rdPerson: Word('скопируют', 4),
  masculinePast: Word('скопировал', 4),
  femininePast: Word('скопировала', 4),
  neuterPast: Word('скопировало', 4),
  pluralPast: Word('скопировали', 4),
  imperativeInformal: Word('скопируй', 4),
  imperativeFormal: Word('скопируйте', 4),
  imperfect: [],
};

perfectVerbs.set(скопировать.name.text, скопировать);

export { скопировать };