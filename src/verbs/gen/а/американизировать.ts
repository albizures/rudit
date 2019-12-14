import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const американизировать: PerfectVerb = {
  name: Word('американизировать', 10),
  singular1stPerson: Word('американизирую', 10),
  singular2ndPerson: Word('американизируешь', 10),
  singular3rdPerson: Word('американизирует', 10),
  plural1stPerson: Word('американизируем', 10),
  plural2ndPerson: Word('американизируете', 10),
  plural3rdPerson: Word('американизируют', 10),
  masculinePast: Word('американизировал', 10),
  femininePast: Word('американизировала', 10),
  neuterPast: Word('американизировало', 10),
  pluralPast: Word('американизировали', 10),
  imperativeInformal: Word('американизируй', 10),
  imperativeFormal: Word('американизируйте', 10),
  imperfect: [],
};

perfectVerbs.set(американизировать.name.text, американизировать);

export { американизировать };