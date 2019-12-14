import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приваривать: PerfectVerb = {
  name: Word('приваривать', 4),
  singular1stPerson: Word('привариваю', 4),
  singular2ndPerson: Word('привариваешь', 4),
  singular3rdPerson: Word('приваривает', 4),
  plural1stPerson: Word('привариваем', 4),
  plural2ndPerson: Word('привариваете', 4),
  plural3rdPerson: Word('приваривают', 4),
  masculinePast: Word('приваривал', 4),
  femininePast: Word('приваривала', 4),
  neuterPast: Word('приваривало', 4),
  pluralPast: Word('приваривали', 4),
  imperativeInformal: Word('приваривай', 4),
  imperativeFormal: Word('приваривайте', 4),
  imperfect: [],
};

perfectVerbs.set(приваривать.name.text, приваривать);

export { приваривать };