import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const модернизировать: PerfectVerb = {
  name: Word('модернизировать', 8),
  singular1stPerson: Word('модернизирую', 8),
  singular2ndPerson: Word('модернизируешь', 8),
  singular3rdPerson: Word('модернизирует', 8),
  plural1stPerson: Word('модернизируем', 8),
  plural2ndPerson: Word('модернизируете', 8),
  plural3rdPerson: Word('модернизируют', 8),
  masculinePast: Word('модернизировал', 8),
  femininePast: Word('модернизировала', 8),
  neuterPast: Word('модернизировало', 8),
  pluralPast: Word('модернизировали', 8),
  imperativeInformal: Word('модернизируй', 8),
  imperativeFormal: Word('модернизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(модернизировать.name.text, модернизировать);

export { модернизировать };