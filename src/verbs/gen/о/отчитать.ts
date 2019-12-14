import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчитать: PerfectVerb = {
  name: Word('отчитать', 5),
  singular1stPerson: Word('отчитаю', 5),
  singular2ndPerson: Word('отчитаешь', 5),
  singular3rdPerson: Word('отчитает', 5),
  plural1stPerson: Word('отчитаем', 5),
  plural2ndPerson: Word('отчитаете', 5),
  plural3rdPerson: Word('отчитают', 5),
  masculinePast: Word('отчитал', 5),
  femininePast: Word('отчитала', 5),
  neuterPast: Word('отчитало', 5),
  pluralPast: Word('отчитали', 5),
  imperativeInformal: Word('отчитай', 5),
  imperativeFormal: Word('отчитайте', 5),
  imperfect: [],
};

perfectVerbs.set(отчитать.name.text, отчитать);

export { отчитать };