import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схематизировать: PerfectVerb = {
  name: Word('схематизировать', 8),
  singular1stPerson: Word('схематизирую', 8),
  singular2ndPerson: Word('схематизируешь', 8),
  singular3rdPerson: Word('схематизирует', 8),
  plural1stPerson: Word('схематизируем', 8),
  plural2ndPerson: Word('схематизируете', 8),
  plural3rdPerson: Word('схематизируют', 8),
  masculinePast: Word('схематизировал', 8),
  femininePast: Word('схематизировала', 8),
  neuterPast: Word('схематизировало', 8),
  pluralPast: Word('схематизировали', 8),
  imperativeInformal: Word('схематизируй', 8),
  imperativeFormal: Word('схематизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(схематизировать.name.text, схематизировать);

export { схематизировать };