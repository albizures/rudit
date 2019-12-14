import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвирать: PerfectVerb = {
  name: Word('подвирать', 6),
  singular1stPerson: Word('подвираю', 6),
  singular2ndPerson: Word('подвираешь', 6),
  singular3rdPerson: Word('подвирает', 6),
  plural1stPerson: Word('подвираем', 6),
  plural2ndPerson: Word('подвираете', 6),
  plural3rdPerson: Word('подвирают', 6),
  masculinePast: Word('подвирал', 6),
  femininePast: Word('подвирала', 6),
  neuterPast: Word('подвирало', 6),
  pluralPast: Word('подвирали', 6),
  imperativeInformal: Word('подвирай', 6),
  imperativeFormal: Word('подвирайте', 6),
  imperfect: [],
};

perfectVerbs.set(подвирать.name.text, подвирать);

export { подвирать };