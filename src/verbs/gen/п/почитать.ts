import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почитать: PerfectVerb = {
  name: Word('почитать', 5),
  singular1stPerson: Word('почитаю', 5),
  singular2ndPerson: Word('почитаешь', 5),
  singular3rdPerson: Word('почитает', 5),
  plural1stPerson: Word('почитаем', 5),
  plural2ndPerson: Word('почитаете', 5),
  plural3rdPerson: Word('почитают', 5),
  masculinePast: Word('почитал', 5),
  femininePast: Word('почитала', 5),
  neuterPast: Word('почитало', 5),
  pluralPast: Word('почитали', 5),
  imperativeInformal: Word('почитай', 5),
  imperativeFormal: Word('почитайте', 5),
  imperfect: [],
};

perfectVerbs.set(почитать.name.text, почитать);

export { почитать };