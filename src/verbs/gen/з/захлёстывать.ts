import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлёстывать: PerfectVerb = {
  name: Word('захлёстывать', 4),
  singular1stPerson: Word('захлёстываю', 4),
  singular2ndPerson: Word('захлёстываешь', 4),
  singular3rdPerson: Word('захлёстывает', 4),
  plural1stPerson: Word('захлёстываем', 4),
  plural2ndPerson: Word('захлёстываете', 4),
  plural3rdPerson: Word('захлёстывают', 4),
  masculinePast: Word('захлёстывал', 4),
  femininePast: Word('захлёстывала', 4),
  neuterPast: Word('захлёстывало', 4),
  pluralPast: Word('захлёстывали', 4),
  imperativeInformal: Word('захлёстывай', 4),
  imperativeFormal: Word('захлёстывайте', 4),
  imperfect: [],
};

perfectVerbs.set(захлёстывать.name.text, захлёстывать);

export { захлёстывать };