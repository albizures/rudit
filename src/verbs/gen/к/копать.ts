import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копать: PerfectVerb = {
  name: Word('копать', 3),
  singular1stPerson: Word('копаю', 3),
  singular2ndPerson: Word('копаешь', 3),
  singular3rdPerson: Word('копает', 3),
  plural1stPerson: Word('копаем', 3),
  plural2ndPerson: Word('копаете', 3),
  plural3rdPerson: Word('копают', 3),
  masculinePast: Word('копал', 3),
  femininePast: Word('копала', 3),
  neuterPast: Word('копало', 3),
  pluralPast: Word('копали', 3),
  imperativeInformal: Word('копай', 3),
  imperativeFormal: Word('копайте', 3),
  imperfect: ['копнуть'],
};

perfectVerbs.set(копать.name.text, копать);

export { копать };