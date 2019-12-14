import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отваривать: PerfectVerb = {
  name: Word('отваривать', 3),
  singular1stPerson: Word('отвариваю', 3),
  singular2ndPerson: Word('отвариваешь', 3),
  singular3rdPerson: Word('отваривает', 3),
  plural1stPerson: Word('отвариваем', 3),
  plural2ndPerson: Word('отвариваете', 3),
  plural3rdPerson: Word('отваривают', 3),
  masculinePast: Word('отваривал', 3),
  femininePast: Word('отваривала', 3),
  neuterPast: Word('отваривало', 3),
  pluralPast: Word('отваривали', 3),
  imperativeInformal: Word('отваривай', 3),
  imperativeFormal: Word('отваривайте', 3),
  imperfect: [],
};

perfectVerbs.set(отваривать.name.text, отваривать);

export { отваривать };