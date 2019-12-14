import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наушничать: PerfectVerb = {
  name: Word('наушничать', 2),
  singular1stPerson: Word('наушничаю', 2),
  singular2ndPerson: Word('наушничаешь', 2),
  singular3rdPerson: Word('наушничает', 2),
  plural1stPerson: Word('наушничаем', 2),
  plural2ndPerson: Word('наушничаете', 2),
  plural3rdPerson: Word('наушничают', 2),
  masculinePast: Word('наушничал', 2),
  femininePast: Word('наушничала', 2),
  neuterPast: Word('наушничало', 2),
  pluralPast: Word('наушничали', 2),
  imperativeInformal: Word('наушничай', 2),
  imperativeFormal: Word('наушничайте', 2),
  imperfect: [],
};

perfectVerbs.set(наушничать.name.text, наушничать);

export { наушничать };