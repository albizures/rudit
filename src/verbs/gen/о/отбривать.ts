import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбривать: PerfectVerb = {
  name: Word('отбривать', 6),
  singular1stPerson: Word('отбриваю', 6),
  singular2ndPerson: Word('отбриваешь', 6),
  singular3rdPerson: Word('отбривает', 6),
  plural1stPerson: Word('отбриваем', 6),
  plural2ndPerson: Word('отбриваете', 6),
  plural3rdPerson: Word('отбривают', 6),
  masculinePast: Word('отбривал', 6),
  femininePast: Word('отбривала', 6),
  neuterPast: Word('отбривало', 6),
  pluralPast: Word('отбривали', 6),
  imperativeInformal: Word('отбривай', 6),
  imperativeFormal: Word('отбривайте', 6),
  imperfect: [],
};

perfectVerbs.set(отбривать.name.text, отбривать);

export { отбривать };