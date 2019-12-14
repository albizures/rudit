import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const автоматизировать: PerfectVerb = {
  name: Word('автоматизировать', 9),
  singular1stPerson: Word('автоматизирую', 9),
  singular2ndPerson: Word('автоматизируешь', 9),
  singular3rdPerson: Word('автоматизирует', 9),
  plural1stPerson: Word('автоматизируем', 9),
  plural2ndPerson: Word('автоматизируете', 9),
  plural3rdPerson: Word('автоматизируют', 9),
  masculinePast: Word('автоматизировал', 9),
  femininePast: Word('автоматизировала', 9),
  neuterPast: Word('автоматизировало', 9),
  pluralPast: Word('автоматизировали', 9),
  imperativeInformal: Word('автоматизируй', 9),
  imperativeFormal: Word('автоматизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(автоматизировать.name.text, автоматизировать);

export { автоматизировать };