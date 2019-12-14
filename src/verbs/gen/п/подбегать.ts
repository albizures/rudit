import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбегать: PerfectVerb = {
  name: Word('подбегать', 6),
  singular1stPerson: Word('подбегаю', 6),
  singular2ndPerson: Word('подбегаешь', 6),
  singular3rdPerson: Word('подбегает', 6),
  plural1stPerson: Word('подбегаем', 6),
  plural2ndPerson: Word('подбегаете', 6),
  plural3rdPerson: Word('подбегают', 6),
  masculinePast: Word('подбегал', 6),
  femininePast: Word('подбегала', 6),
  neuterPast: Word('подбегало', 6),
  pluralPast: Word('подбегали', 6),
  imperativeInformal: Word('подбегай', 6),
  imperativeFormal: Word('подбегайте', 6),
  imperfect: [],
};

perfectVerbs.set(подбегать.name.text, подбегать);

export { подбегать };