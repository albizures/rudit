import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашаривать: PerfectVerb = {
  name: Word('нашаривать', 3),
  singular1stPerson: Word('нашариваю', 3),
  singular2ndPerson: Word('нашариваешь', 3),
  singular3rdPerson: Word('нашаривает', 3),
  plural1stPerson: Word('нашариваем', 3),
  plural2ndPerson: Word('нашариваете', 3),
  plural3rdPerson: Word('нашаривают', 3),
  masculinePast: Word('нашаривал', 3),
  femininePast: Word('нашаривала', 3),
  neuterPast: Word('нашаривало', 3),
  pluralPast: Word('нашаривали', 3),
  imperativeInformal: Word('нашаривай', 3),
  imperativeFormal: Word('нашаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(нашаривать.name.text, нашаривать);

export { нашаривать };