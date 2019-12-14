import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплавать: PerfectVerb = {
  name: Word('наплавать', 4),
  singular1stPerson: Word('наплаваю', 4),
  singular2ndPerson: Word('наплаваешь', 4),
  singular3rdPerson: Word('наплавает', 4),
  plural1stPerson: Word('наплаваем', 4),
  plural2ndPerson: Word('наплаваете', 4),
  plural3rdPerson: Word('наплавают', 4),
  masculinePast: Word('наплавал', 4),
  femininePast: Word('наплавала', 4),
  neuterPast: Word('наплавало', 4),
  pluralPast: Word('наплавали', 4),
  imperativeInformal: Word('наплавай', 4),
  imperativeFormal: Word('наплавайте', 4),
  imperfect: [],
};

perfectVerbs.set(наплавать.name.text, наплавать);

export { наплавать };