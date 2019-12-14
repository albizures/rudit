import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рукоблудничать: PerfectVerb = {
  name: Word('рукоблудничать', 6),
  singular1stPerson: Word('рукоблудничаю', 6),
  singular2ndPerson: Word('рукоблудничаешь', 6),
  singular3rdPerson: Word('рукоблудничает', 6),
  plural1stPerson: Word('рукоблудничаем', 6),
  plural2ndPerson: Word('рукоблудничаете', 6),
  plural3rdPerson: Word('рукоблудничают', 6),
  masculinePast: Word('рукоблудничал', 6),
  femininePast: Word('рукоблудничала', 6),
  neuterPast: Word('рукоблудничало', 6),
  pluralPast: Word('рукоблудничали', 6),
  imperativeInformal: Word('рукоблудничай', 6),
  imperativeFormal: Word('рукоблудничайте', 6),
  imperfect: [],
};

perfectVerbs.set(рукоблудничать.name.text, рукоблудничать);

export { рукоблудничать };