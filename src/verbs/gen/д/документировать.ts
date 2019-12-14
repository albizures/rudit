import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const документировать: PerfectVerb = {
  name: Word('документировать', 8),
  singular1stPerson: Word('документирую', 8),
  singular2ndPerson: Word('документируешь', 8),
  singular3rdPerson: Word('документирует', 8),
  plural1stPerson: Word('документируем', 8),
  plural2ndPerson: Word('документируете', 8),
  plural3rdPerson: Word('документируют', 8),
  masculinePast: Word('документировал', 8),
  femininePast: Word('документировала', 8),
  neuterPast: Word('документировало', 8),
  pluralPast: Word('документировали', 8),
  imperativeInformal: Word('документируй', 8),
  imperativeFormal: Word('документируйте', 8),
  imperfect: [],
};

perfectVerbs.set(документировать.name.text, документировать);

export { документировать };