import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const парашютировать: PerfectVerb = {
  name: Word('парашютировать', 7),
  singular1stPerson: Word('парашютирую', 7),
  singular2ndPerson: Word('парашютируешь', 7),
  singular3rdPerson: Word('парашютирует', 7),
  plural1stPerson: Word('парашютируем', 7),
  plural2ndPerson: Word('парашютируете', 7),
  plural3rdPerson: Word('парашютируют', 7),
  masculinePast: Word('парашютировал', 7),
  femininePast: Word('парашютировала', 7),
  neuterPast: Word('парашютировало', 7),
  pluralPast: Word('парашютировали', 7),
  imperativeInformal: Word('парашютируй', 7),
  imperativeFormal: Word('парашютируйте', 7),
  imperfect: [],
};

perfectVerbs.set(парашютировать.name.text, парашютировать);

export { парашютировать };