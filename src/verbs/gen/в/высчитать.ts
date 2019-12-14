import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высчитать: PerfectVerb = {
  name: Word('высчитать', 1),
  singular1stPerson: Word('высчитаю', 1),
  singular2ndPerson: Word('высчитаешь', 1),
  singular3rdPerson: Word('высчитает', 1),
  plural1stPerson: Word('высчитаем', 1),
  plural2ndPerson: Word('высчитаете', 1),
  plural3rdPerson: Word('высчитают', 1),
  masculinePast: Word('высчитал', 1),
  femininePast: Word('высчитала', 1),
  neuterPast: Word('высчитало', 1),
  pluralPast: Word('высчитали', 1),
  imperativeInformal: Word('высчитай', 1),
  imperativeFormal: Word('высчитайте', 1),
  imperfect: [],
};

perfectVerbs.set(высчитать.name.text, высчитать);

export { высчитать };