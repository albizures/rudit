import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсчитать: PerfectVerb = {
  name: Word('отсчитать', 6),
  singular1stPerson: Word('отсчитаю', 6),
  singular2ndPerson: Word('отсчитаешь', 6),
  singular3rdPerson: Word('отсчитает', 6),
  plural1stPerson: Word('отсчитаем', 6),
  plural2ndPerson: Word('отсчитаете', 6),
  plural3rdPerson: Word('отсчитают', 6),
  masculinePast: Word('отсчитал', 6),
  femininePast: Word('отсчитала', 6),
  neuterPast: Word('отсчитало', 6),
  pluralPast: Word('отсчитали', 6),
  imperativeInformal: Word('отсчитай', 6),
  imperativeFormal: Word('отсчитайте', 6),
  imperfect: [],
};

perfectVerbs.set(отсчитать.name.text, отсчитать);

export { отсчитать };