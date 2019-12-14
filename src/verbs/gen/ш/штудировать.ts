import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const штудировать: PerfectVerb = {
  name: Word('штудировать', 4),
  singular1stPerson: Word('штудирую', 4),
  singular2ndPerson: Word('штудируешь', 4),
  singular3rdPerson: Word('штудирует', 4),
  plural1stPerson: Word('штудируем', 4),
  plural2ndPerson: Word('штудируете', 4),
  plural3rdPerson: Word('штудируют', 4),
  masculinePast: Word('штудировал', 4),
  femininePast: Word('штудировала', 4),
  neuterPast: Word('штудировало', 4),
  pluralPast: Word('штудировали', 4),
  imperativeInformal: Word('штудируй', 4),
  imperativeFormal: Word('штудируйте', 4),
  imperfect: [],
};

perfectVerbs.set(штудировать.name.text, штудировать);

export { штудировать };