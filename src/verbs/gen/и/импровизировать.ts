import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const импровизировать: PerfectVerb = {
  name: Word('импровизировать', 8),
  singular1stPerson: Word('импровизирую', 8),
  singular2ndPerson: Word('импровизируешь', 8),
  singular3rdPerson: Word('импровизирует', 8),
  plural1stPerson: Word('импровизируем', 8),
  plural2ndPerson: Word('импровизируете', 8),
  plural3rdPerson: Word('импровизируют', 8),
  masculinePast: Word('импровизировал', 8),
  femininePast: Word('импровизировала', 8),
  neuterPast: Word('импровизировало', 8),
  pluralPast: Word('импровизировали', 8),
  imperativeInformal: Word('импровизируй', 8),
  imperativeFormal: Word('импровизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(импровизировать.name.text, импровизировать);

export { импровизировать };