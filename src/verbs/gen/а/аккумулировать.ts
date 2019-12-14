import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аккумулировать: PerfectVerb = {
  name: Word('аккумулировать', 7),
  singular1stPerson: Word('аккумулирую', 7),
  singular2ndPerson: Word('аккумулируешь', 7),
  singular3rdPerson: Word('аккумулирует', 7),
  plural1stPerson: Word('аккумулируем', 7),
  plural2ndPerson: Word('аккумулируете', 7),
  plural3rdPerson: Word('аккумулируют', 7),
  masculinePast: Word('аккумулировал', 7),
  femininePast: Word('аккумулировала', 7),
  neuterPast: Word('аккумулировало', 7),
  pluralPast: Word('аккумулировали', 7),
  imperativeInformal: Word('аккумулируй', 7),
  imperativeFormal: Word('аккумулируйте', 7),
  imperfect: [],
};

perfectVerbs.set(аккумулировать.name.text, аккумулировать);

export { аккумулировать };