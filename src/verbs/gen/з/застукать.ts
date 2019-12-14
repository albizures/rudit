import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застукать: PerfectVerb = {
  name: Word('застукать', 4),
  singular1stPerson: Word('застукаю', 4),
  singular2ndPerson: Word('застукаешь', 4),
  singular3rdPerson: Word('застукает', 4),
  plural1stPerson: Word('застукаем', 4),
  plural2ndPerson: Word('застукаете', 4),
  plural3rdPerson: Word('застукают', 4),
  masculinePast: Word('застукал', 4),
  femininePast: Word('застукала', 4),
  neuterPast: Word('застукало', 4),
  pluralPast: Word('застукали', 4),
  imperativeInformal: Word('застукай', 4),
  imperativeFormal: Word('застукайте', 4),
  imperfect: [],
};

perfectVerbs.set(застукать.name.text, застукать);

export { застукать };