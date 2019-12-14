import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стажировать: PerfectVerb = {
  name: Word('стажировать', 4),
  singular1stPerson: Word('стажирую', 4),
  singular2ndPerson: Word('стажируешь', 4),
  singular3rdPerson: Word('стажирует', 4),
  plural1stPerson: Word('стажируем', 4),
  plural2ndPerson: Word('стажируете', 4),
  plural3rdPerson: Word('стажируют', 4),
  masculinePast: Word('стажировал', 4),
  femininePast: Word('стажировала', 4),
  neuterPast: Word('стажировало', 4),
  pluralPast: Word('стажировали', 4),
  imperativeInformal: Word('стажируй', 4),
  imperativeFormal: Word('стажируйте', 4),
  imperfect: [],
};

perfectVerbs.set(стажировать.name.text, стажировать);

export { стажировать };