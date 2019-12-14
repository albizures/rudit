import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реквизировать: PerfectVerb = {
  name: Word('реквизировать', 6),
  singular1stPerson: Word('реквизирую', 6),
  singular2ndPerson: Word('реквизируешь', 6),
  singular3rdPerson: Word('реквизирует', 6),
  plural1stPerson: Word('реквизируем', 6),
  plural2ndPerson: Word('реквизируете', 6),
  plural3rdPerson: Word('реквизируют', 6),
  masculinePast: Word('реквизировал', 6),
  femininePast: Word('реквизировала', 6),
  neuterPast: Word('реквизировало', 6),
  pluralPast: Word('реквизировали', 6),
  imperativeInformal: Word('реквизируй', 6),
  imperativeFormal: Word('реквизируйте', 6),
  imperfect: [],
};

perfectVerbs.set(реквизировать.name.text, реквизировать);

export { реквизировать };