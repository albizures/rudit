import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сымпровизировать: PerfectVerb = {
  name: Word('сымпровизировать', 9),
  singular1stPerson: Word('сымпровизирую', 9),
  singular2ndPerson: Word('сымпровизируешь', 9),
  singular3rdPerson: Word('сымпровизирует', 9),
  plural1stPerson: Word('сымпровизируем', 9),
  plural2ndPerson: Word('сымпровизируете', 9),
  plural3rdPerson: Word('сымпровизируют', 9),
  masculinePast: Word('сымпровизировал', 9),
  femininePast: Word('сымпровизировала', 9),
  neuterPast: Word('сымпровизировало', 9),
  pluralPast: Word('сымпровизировали', 9),
  imperativeInformal: Word('сымпровизируй', 9),
  imperativeFormal: Word('сымпровизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(сымпровизировать.name.text, сымпровизировать);

export { сымпровизировать };