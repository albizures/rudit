import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const военизировать: PerfectVerb = {
  name: Word('военизировать', 6),
  singular1stPerson: Word('военизирую', 6),
  singular2ndPerson: Word('военизируешь', 6),
  singular3rdPerson: Word('военизирует', 6),
  plural1stPerson: Word('военизируем', 6),
  plural2ndPerson: Word('военизируете', 6),
  plural3rdPerson: Word('военизируют', 6),
  masculinePast: Word('военизировал', 6),
  femininePast: Word('военизировала', 6),
  neuterPast: Word('военизировало', 6),
  pluralPast: Word('военизировали', 6),
  imperativeInformal: Word('военизируй', 6),
  imperativeFormal: Word('военизируйте', 6),
  imperfect: [],
};

perfectVerbs.set(военизировать.name.text, военизировать);

export { военизировать };