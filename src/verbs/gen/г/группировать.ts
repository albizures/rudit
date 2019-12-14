import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const группировать: PerfectVerb = {
  name: Word('группировать', 9),
  singular1stPerson: Word('группирую', 7),
  singular2ndPerson: Word('группируешь', 7),
  singular3rdPerson: Word('группирует', 7),
  plural1stPerson: Word('группируем', 7),
  plural2ndPerson: Word('группируете', 7),
  plural3rdPerson: Word('группируют', 7),
  masculinePast: Word('группировал', 9),
  femininePast: Word('группировала', 9),
  neuterPast: Word('группировало', 9),
  pluralPast: Word('группировали', 9),
  imperativeInformal: Word('группируй', 7),
  imperativeFormal: Word('группируйте', 7),
  imperfect: [],
};

perfectVerbs.set(группировать.name.text, группировать);

export { группировать };