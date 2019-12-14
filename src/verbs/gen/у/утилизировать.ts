import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утилизировать: PerfectVerb = {
  name: Word('утилизировать', 6),
  singular1stPerson: Word('утилизирую', 6),
  singular2ndPerson: Word('утилизируешь', 6),
  singular3rdPerson: Word('утилизирует', 6),
  plural1stPerson: Word('утилизируем', 6),
  plural2ndPerson: Word('утилизируете', 6),
  plural3rdPerson: Word('утилизируют', 6),
  masculinePast: Word('утилизировал', 6),
  femininePast: Word('утилизировала', 6),
  neuterPast: Word('утилизировало', 6),
  pluralPast: Word('утилизировали', 6),
  imperativeInformal: Word('утилизируй', 6),
  imperativeFormal: Word('утилизируйте', 6),
  imperfect: [],
};

perfectVerbs.set(утилизировать.name.text, утилизировать);

export { утилизировать };