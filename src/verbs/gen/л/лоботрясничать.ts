import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лоботрясничать: PerfectVerb = {
  name: Word('лоботрясничать', 6),
  singular1stPerson: Word('лоботрясничаю', 6),
  singular2ndPerson: Word('лоботрясничаешь', 6),
  singular3rdPerson: Word('лоботрясничает', 6),
  plural1stPerson: Word('лоботрясничаем', 6),
  plural2ndPerson: Word('лоботрясничаете', 6),
  plural3rdPerson: Word('лоботрясничают', 6),
  masculinePast: Word('лоботрясничал', 6),
  femininePast: Word('лоботрясничала', 6),
  neuterPast: Word('лоботрясничало', 6),
  pluralPast: Word('лоботрясничали', 6),
  imperativeInformal: Word('лоботрясничай', 6),
  imperativeFormal: Word('лоботрясничайте', 6),
  imperfect: [],
};

perfectVerbs.set(лоботрясничать.name.text, лоботрясничать);

export { лоботрясничать };