import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const патрулировать: PerfectVerb = {
  name: Word('патрулировать', 6),
  singular1stPerson: Word('патрулирую', 6),
  singular2ndPerson: Word('патрулируешь', 6),
  singular3rdPerson: Word('патрулирует', 6),
  plural1stPerson: Word('патрулируем', 6),
  plural2ndPerson: Word('патрулируете', 6),
  plural3rdPerson: Word('патрулируют', 6),
  masculinePast: Word('патрулировал', 6),
  femininePast: Word('патрулировала', 6),
  neuterPast: Word('патрулировало', 6),
  pluralPast: Word('патрулировали', 6),
  imperativeInformal: Word('патрулируй', 6),
  imperativeFormal: Word('патрулируйте', 6),
  imperfect: [],
};

perfectVerbs.set(патрулировать.name.text, патрулировать);

export { патрулировать };