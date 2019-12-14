import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкамаривать: PerfectVerb = {
  name: Word('выкамаривать', 5),
  singular1stPerson: Word('выкамариваю', 5),
  singular2ndPerson: Word('выкамариваешь', 5),
  singular3rdPerson: Word('выкамаривает', 5),
  plural1stPerson: Word('выкамариваем', 5),
  plural2ndPerson: Word('выкамариваете', 5),
  plural3rdPerson: Word('выкамаривают', 5),
  masculinePast: Word('выкамаривал', 5),
  femininePast: Word('выкамаривала', 5),
  neuterPast: Word('выкамаривало', 5),
  pluralPast: Word('выкамаривали', 5),
  imperativeInformal: Word('выкамаривай', 5),
  imperativeFormal: Word('выкамаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(выкамаривать.name.text, выкамаривать);

export { выкамаривать };