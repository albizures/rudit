import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наторговать: PerfectVerb = {
  name: Word('наторговать', 8),
  singular1stPerson: Word('наторгую', 6),
  singular2ndPerson: Word('наторгуешь', 6),
  singular3rdPerson: Word('наторгует', 6),
  plural1stPerson: Word('наторгуем', 6),
  plural2ndPerson: Word('наторгуете', 6),
  plural3rdPerson: Word('наторгуют', 6),
  masculinePast: Word('наторговал', 8),
  femininePast: Word('наторговала', 8),
  neuterPast: Word('наторговало', 8),
  pluralPast: Word('наторговали', 8),
  imperativeInformal: Word('наторгуй', 6),
  imperativeFormal: Word('наторгуйте', 6),
  imperfect: [],
};

perfectVerbs.set(наторговать.name.text, наторговать);

export { наторговать };