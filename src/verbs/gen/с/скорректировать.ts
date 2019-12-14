import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скорректировать: PerfectVerb = {
  name: Word('скорректировать', 8),
  singular1stPerson: Word('скорректирую', 8),
  singular2ndPerson: Word('скорректируешь', 8),
  singular3rdPerson: Word('скорректирует', 8),
  plural1stPerson: Word('скорректируем', 8),
  plural2ndPerson: Word('скорректируете', 8),
  plural3rdPerson: Word('скорректируют', 8),
  masculinePast: Word('скорректировал', 8),
  femininePast: Word('скорректировала', 8),
  neuterPast: Word('скорректировало', 8),
  pluralPast: Word('скорректировали', 8),
  imperativeInformal: Word('скорректируй', 8),
  imperativeFormal: Word('скорректируйте', 8),
  imperfect: [],
};

perfectVerbs.set(скорректировать.name.text, скорректировать);

export { скорректировать };