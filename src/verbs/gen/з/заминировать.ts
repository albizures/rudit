import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заминировать: PerfectVerb = {
  name: Word('заминировать', 5),
  singular1stPerson: Word('заминирую', 5),
  singular2ndPerson: Word('заминируешь', 5),
  singular3rdPerson: Word('заминирует', 5),
  plural1stPerson: Word('заминируем', 5),
  plural2ndPerson: Word('заминируете', 5),
  plural3rdPerson: Word('заминируют', 5),
  masculinePast: Word('заминировал', 5),
  femininePast: Word('заминировала', 5),
  neuterPast: Word('заминировало', 5),
  pluralPast: Word('заминировали', 5),
  imperativeInformal: Word('заминируй', 5),
  imperativeFormal: Word('заминируйте', 5),
  imperfect: [],
};

perfectVerbs.set(заминировать.name.text, заминировать);

export { заминировать };