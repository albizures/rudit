import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбирать: PerfectVerb = {
  name: Word('подбирать', 6),
  singular1stPerson: Word('подбираю', 6),
  singular2ndPerson: Word('подбираешь', 6),
  singular3rdPerson: Word('подбирает', 6),
  plural1stPerson: Word('подбираем', 6),
  plural2ndPerson: Word('подбираете', 6),
  plural3rdPerson: Word('подбирают', 6),
  masculinePast: Word('подбирал', 6),
  femininePast: Word('подбирала', 6),
  neuterPast: Word('подбирало', 6),
  pluralPast: Word('подбирали', 6),
  imperativeInformal: Word('подбирай', 6),
  imperativeFormal: Word('подбирайте', 6),
  imperfect: [],
};

perfectVerbs.set(подбирать.name.text, подбирать);

export { подбирать };