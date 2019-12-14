import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const архаизировать: PerfectVerb = {
  name: Word('архаизировать', 6),
  singular1stPerson: Word('архаизирую', 6),
  singular2ndPerson: Word('архаизируешь', 6),
  singular3rdPerson: Word('архаизирует', 6),
  plural1stPerson: Word('архаизируем', 6),
  plural2ndPerson: Word('архаизируете', 6),
  plural3rdPerson: Word('архаизируют', 6),
  masculinePast: Word('архаизировал', 6),
  femininePast: Word('архаизировала', 6),
  neuterPast: Word('архаизировало', 6),
  pluralPast: Word('архаизировали', 6),
  imperativeInformal: Word('архаизируй', 6),
  imperativeFormal: Word('архаизируйте', 6),
  imperfect: [],
};

perfectVerbs.set(архаизировать.name.text, архаизировать);

export { архаизировать };