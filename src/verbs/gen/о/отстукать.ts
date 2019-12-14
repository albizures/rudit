import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстукать: PerfectVerb = {
  name: Word('отстукать', 4),
  singular1stPerson: Word('отстукаю', 4),
  singular2ndPerson: Word('отстукаешь', 4),
  singular3rdPerson: Word('отстукает', 4),
  plural1stPerson: Word('отстукаем', 4),
  plural2ndPerson: Word('отстукаете', 4),
  plural3rdPerson: Word('отстукают', 4),
  masculinePast: Word('отстукал', 4),
  femininePast: Word('отстукала', 4),
  neuterPast: Word('отстукало', 4),
  pluralPast: Word('отстукали', 4),
  imperativeInformal: Word('отстукай', 4),
  imperativeFormal: Word('отстукайте', 4),
  imperfect: [],
};

perfectVerbs.set(отстукать.name.text, отстукать);

export { отстукать };