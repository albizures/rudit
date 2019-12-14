import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосчитать: PerfectVerb = {
  name: Word('сосчитать', 6),
  singular1stPerson: Word('сосчитаю', 6),
  singular2ndPerson: Word('сосчитаешь', 6),
  singular3rdPerson: Word('сосчитает', 6),
  plural1stPerson: Word('сосчитаем', 6),
  plural2ndPerson: Word('сосчитаете', 6),
  plural3rdPerson: Word('сосчитают', 6),
  masculinePast: Word('сосчитал', 6),
  femininePast: Word('сосчитала', 6),
  neuterPast: Word('сосчитало', 6),
  pluralPast: Word('сосчитали', 6),
  imperativeInformal: Word('сосчитай', 6),
  imperativeFormal: Word('сосчитайте', 6),
  imperfect: [],
};

perfectVerbs.set(сосчитать.name.text, сосчитать);

export { сосчитать };