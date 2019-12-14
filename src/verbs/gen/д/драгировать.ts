import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драгировать: PerfectVerb = {
  name: Word('драгировать', 4),
  singular1stPerson: Word('драгирую', 4),
  singular2ndPerson: Word('драгируешь', 4),
  singular3rdPerson: Word('драгирует', 4),
  plural1stPerson: Word('драгируем', 4),
  plural2ndPerson: Word('драгируете', 4),
  plural3rdPerson: Word('драгируют', 4),
  masculinePast: Word('драгировал', 4),
  femininePast: Word('драгировала', 4),
  neuterPast: Word('драгировало', 4),
  pluralPast: Word('драгировали', 4),
  imperativeInformal: Word('драгируй', 4),
  imperativeFormal: Word('драгируйте', 4),
  imperfect: [],
};

perfectVerbs.set(драгировать.name.text, драгировать);

export { драгировать };