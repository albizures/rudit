import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добривать: PerfectVerb = {
  name: Word('добривать', 6),
  singular1stPerson: Word('добриваю', 6),
  singular2ndPerson: Word('добриваешь', 6),
  singular3rdPerson: Word('добривает', 6),
  plural1stPerson: Word('добриваем', 6),
  plural2ndPerson: Word('добриваете', 6),
  plural3rdPerson: Word('добривают', 6),
  masculinePast: Word('добривал', 6),
  femininePast: Word('добривала', 6),
  neuterPast: Word('добривало', 6),
  pluralPast: Word('добривали', 6),
  imperativeInformal: Word('добривай', 6),
  imperativeFormal: Word('добривайте', 6),
  imperfect: [],
};

perfectVerbs.set(добривать.name.text, добривать);

export { добривать };