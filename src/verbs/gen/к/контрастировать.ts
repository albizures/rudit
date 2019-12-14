import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const контрастировать: PerfectVerb = {
  name: Word('контрастировать', 8),
  singular1stPerson: Word('контрастирую', 8),
  singular2ndPerson: Word('контрастируешь', 8),
  singular3rdPerson: Word('контрастирует', 8),
  plural1stPerson: Word('контрастируем', 8),
  plural2ndPerson: Word('контрастируете', 8),
  plural3rdPerson: Word('контрастируют', 8),
  masculinePast: Word('контрастировал', 8),
  femininePast: Word('контрастировала', 8),
  neuterPast: Word('контрастировало', 8),
  pluralPast: Word('контрастировали', 8),
  imperativeInformal: Word('контрастируй', 8),
  imperativeFormal: Word('контрастируйте', 8),
  imperfect: [],
};

perfectVerbs.set(контрастировать.name.text, контрастировать);

export { контрастировать };