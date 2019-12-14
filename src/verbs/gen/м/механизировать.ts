import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const механизировать: PerfectVerb = {
  name: Word('механизировать', 7),
  singular1stPerson: Word('механизирую', 7),
  singular2ndPerson: Word('механизируешь', 7),
  singular3rdPerson: Word('механизирует', 7),
  plural1stPerson: Word('механизируем', 7),
  plural2ndPerson: Word('механизируете', 7),
  plural3rdPerson: Word('механизируют', 7),
  masculinePast: Word('механизировал', 7),
  femininePast: Word('механизировала', 7),
  neuterPast: Word('механизировало', 7),
  pluralPast: Word('механизировали', 7),
  imperativeInformal: Word('механизируй', 7),
  imperativeFormal: Word('механизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(механизировать.name.text, механизировать);

export { механизировать };