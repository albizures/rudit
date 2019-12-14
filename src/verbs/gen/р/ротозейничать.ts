import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ротозейничать: PerfectVerb = {
  name: Word('ротозейничать', 5),
  singular1stPerson: Word('ротозейничаю', 5),
  singular2ndPerson: Word('ротозейничаешь', 5),
  singular3rdPerson: Word('ротозейничает', 5),
  plural1stPerson: Word('ротозейничаем', 5),
  plural2ndPerson: Word('ротозейничаете', 5),
  plural3rdPerson: Word('ротозейничают', 5),
  masculinePast: Word('ротозейничал', 5),
  femininePast: Word('ротозейничала', 5),
  neuterPast: Word('ротозейничало', 5),
  pluralPast: Word('ротозейничали', 5),
  imperativeInformal: Word('ротозейничай', 5),
  imperativeFormal: Word('ротозейничайте', 5),
  imperfect: [],
};

perfectVerbs.set(ротозейничать.name.text, ротозейничать);

export { ротозейничать };