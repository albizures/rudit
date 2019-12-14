import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мяукать: PerfectVerb = {
  name: Word('мяукать', 2),
  singular1stPerson: Word('мяукаю', 2),
  singular2ndPerson: Word('мяукаешь', 2),
  singular3rdPerson: Word('мяукает', 2),
  plural1stPerson: Word('мяукаем', 2),
  plural2ndPerson: Word('мяукаете', 2),
  plural3rdPerson: Word('мяукают', 2),
  masculinePast: Word('мяукал', 2),
  femininePast: Word('мяукала', 2),
  neuterPast: Word('мяукало', 2),
  pluralPast: Word('мяукали', 2),
  imperativeInformal: Word('мяукай', 2),
  imperativeFormal: Word('мяукайте', 2),
  imperfect: [],
};

perfectVerbs.set(мяукать.name.text, мяукать);

export { мяукать };