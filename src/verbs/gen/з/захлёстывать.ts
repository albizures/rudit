import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлёстывать: PerfectVerb = {
  name: Word('захлёстывать', 1),
  singular1stPerson: Word('захлёстываю', 1),
  singular2ndPerson: Word('захлёстываешь', 1),
  singular3rdPerson: Word('захлёстывает', 1),
  plural1stPerson: Word('захлёстываем', 1),
  plural2ndPerson: Word('захлёстываете', 1),
  plural3rdPerson: Word('захлёстывают', 1),
  masculinePast: Word('захлёстывал', 1),
  femininePast: Word('захлёстывала', 1),
  neuterPast: Word('захлёстывало', 1),
  pluralPast: Word('захлёстывали', 1),
  imperativeInformal: Word('захлёстывай', 1),
  imperativeFormal: Word('захлёстывайте', 1),
  imperfect: [],
};

perfectVerbs.set(захлёстывать.name.text, захлёстывать);

export { захлёстывать };