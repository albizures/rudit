import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похлебать: PerfectVerb = {
  name: Word('похлебать', 6),
  singular1stPerson: Word('похлебаю', 6),
  singular2ndPerson: Word('похлебаешь', 6),
  singular3rdPerson: Word('похлебает', 6),
  plural1stPerson: Word('похлебаем', 6),
  plural2ndPerson: Word('похлебаете', 6),
  plural3rdPerson: Word('похлебают', 6),
  masculinePast: Word('похлебал', 6),
  femininePast: Word('похлебала', 6),
  neuterPast: Word('похлебало', 6),
  pluralPast: Word('похлебали', 6),
  imperativeInformal: Word('похлебай', 6),
  imperativeFormal: Word('похлебайте', 6),
  imperfect: [],
};

perfectVerbs.set(похлебать.name.text, похлебать);

export { похлебать };