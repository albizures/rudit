import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const магнетизировать: PerfectVerb = {
  name: Word('магнетизировать', 8),
  singular1stPerson: Word('магнетизирую', 8),
  singular2ndPerson: Word('магнетизируешь', 8),
  singular3rdPerson: Word('магнетизирует', 8),
  plural1stPerson: Word('магнетизируем', 8),
  plural2ndPerson: Word('магнетизируете', 8),
  plural3rdPerson: Word('магнетизируют', 8),
  masculinePast: Word('магнетизировал', 8),
  femininePast: Word('магнетизировала', 8),
  neuterPast: Word('магнетизировало', 8),
  pluralPast: Word('магнетизировали', 8),
  imperativeInformal: Word('магнетизируй', 8),
  imperativeFormal: Word('магнетизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(магнетизировать.name.text, магнетизировать);

export { магнетизировать };