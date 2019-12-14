import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запудривать: PerfectVerb = {
  name: Word('запудривать', 3),
  singular1stPerson: Word('запудриваю', 3),
  singular2ndPerson: Word('запудриваешь', 3),
  singular3rdPerson: Word('запудривает', 3),
  plural1stPerson: Word('запудриваем', 3),
  plural2ndPerson: Word('запудриваете', 3),
  plural3rdPerson: Word('запудривают', 3),
  masculinePast: Word('запудривал', 3),
  femininePast: Word('запудривала', 3),
  neuterPast: Word('запудривало', 3),
  pluralPast: Word('запудривали', 3),
  imperativeInformal: Word('запудривай', 3),
  imperativeFormal: Word('запудривайте', 3),
  imperfect: [],
};

perfectVerbs.set(запудривать.name.text, запудривать);

export { запудривать };