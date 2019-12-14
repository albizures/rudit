import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проплавать: PerfectVerb = {
  name: Word('проплавать', 5),
  singular1stPerson: Word('проплаваю', 5),
  singular2ndPerson: Word('проплаваешь', 5),
  singular3rdPerson: Word('проплавает', 5),
  plural1stPerson: Word('проплаваем', 5),
  plural2ndPerson: Word('проплаваете', 5),
  plural3rdPerson: Word('проплавают', 5),
  masculinePast: Word('проплавал', 5),
  femininePast: Word('проплавала', 5),
  neuterPast: Word('проплавало', 5),
  pluralPast: Word('проплавали', 5),
  imperativeInformal: Word('проплавай', 5),
  imperativeFormal: Word('проплавайте', 5),
  imperfect: [],
};

perfectVerbs.set(проплавать.name.text, проплавать);

export { проплавать };