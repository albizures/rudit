import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плиссировать: PerfectVerb = {
  name: Word('плиссировать', 9),
  singular1stPerson: Word('плиссирую', 7),
  singular2ndPerson: Word('плиссируешь', 7),
  singular3rdPerson: Word('плиссирует', 7),
  plural1stPerson: Word('плиссируем', 7),
  plural2ndPerson: Word('плиссируете', 7),
  plural3rdPerson: Word('плиссируют', 7),
  masculinePast: Word('плиссировал', 9),
  femininePast: Word('плиссировала', 9),
  neuterPast: Word('плиссировало', 9),
  pluralPast: Word('плиссировали', 9),
  imperativeInformal: Word('плиссируй', 7),
  imperativeFormal: Word('плиссируйте', 7),
  imperfect: [],
};

perfectVerbs.set(плиссировать.name.text, плиссировать);

export { плиссировать };