import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const муссировать: PerfectVerb = {
  name: Word('муссировать', 4),
  singular1stPerson: Word('муссирую', 4),
  singular2ndPerson: Word('муссируешь', 4),
  singular3rdPerson: Word('муссирует', 4),
  plural1stPerson: Word('муссируем', 4),
  plural2ndPerson: Word('муссируете', 4),
  plural3rdPerson: Word('муссируют', 4),
  masculinePast: Word('муссировал', 4),
  femininePast: Word('муссировала', 4),
  neuterPast: Word('муссировало', 4),
  pluralPast: Word('муссировали', 4),
  imperativeInformal: Word('муссируй', 4),
  imperativeFormal: Word('муссируйте', 4),
  imperfect: [],
};

perfectVerbs.set(муссировать.name.text, муссировать);

export { муссировать };