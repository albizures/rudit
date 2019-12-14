import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гальванизировать: PerfectVerb = {
  name: Word('гальванизировать', 9),
  singular1stPerson: Word('гальванизирую', 9),
  singular2ndPerson: Word('гальванизируешь', 9),
  singular3rdPerson: Word('гальванизирует', 9),
  plural1stPerson: Word('гальванизируем', 9),
  plural2ndPerson: Word('гальванизируете', 9),
  plural3rdPerson: Word('гальванизируют', 9),
  masculinePast: Word('гальванизировал', 9),
  femininePast: Word('гальванизировала', 9),
  neuterPast: Word('гальванизировало', 9),
  pluralPast: Word('гальванизировали', 9),
  imperativeInformal: Word('гальванизируй', 9),
  imperativeFormal: Word('гальванизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(гальванизировать.name.text, гальванизировать);

export { гальванизировать };