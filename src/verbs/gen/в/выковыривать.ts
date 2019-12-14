import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выковыривать: PerfectVerb = {
  name: Word('выковыривать', 5),
  singular1stPerson: Word('выковыриваю', 5),
  singular2ndPerson: Word('выковыриваешь', 5),
  singular3rdPerson: Word('выковыривает', 5),
  plural1stPerson: Word('выковыриваем', 5),
  plural2ndPerson: Word('выковыриваете', 5),
  plural3rdPerson: Word('выковыривают', 5),
  masculinePast: Word('выковыривал', 5),
  femininePast: Word('выковыривала', 5),
  neuterPast: Word('выковыривало', 5),
  pluralPast: Word('выковыривали', 5),
  imperativeInformal: Word('выковыривай', 5),
  imperativeFormal: Word('выковыривайте', 5),
  imperfect: ['выковырять'],
};

perfectVerbs.set(выковыривать.name.text, выковыривать);

export { выковыривать };