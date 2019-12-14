import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажаривать: PerfectVerb = {
  name: Word('нажаривать', 3),
  singular1stPerson: Word('нажариваю', 3),
  singular2ndPerson: Word('нажариваешь', 3),
  singular3rdPerson: Word('нажаривает', 3),
  plural1stPerson: Word('нажариваем', 3),
  plural2ndPerson: Word('нажариваете', 3),
  plural3rdPerson: Word('нажаривают', 3),
  masculinePast: Word('нажаривал', 3),
  femininePast: Word('нажаривала', 3),
  neuterPast: Word('нажаривало', 3),
  pluralPast: Word('нажаривали', 3),
  imperativeInformal: Word('нажаривай', 3),
  imperativeFormal: Word('нажаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(нажаривать.name.text, нажаривать);

export { нажаривать };