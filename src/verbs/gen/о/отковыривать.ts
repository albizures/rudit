import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отковыривать: PerfectVerb = {
  name: Word('отковыривать', 5),
  singular1stPerson: Word('отковыриваю', 5),
  singular2ndPerson: Word('отковыриваешь', 5),
  singular3rdPerson: Word('отковыривает', 5),
  plural1stPerson: Word('отковыриваем', 5),
  plural2ndPerson: Word('отковыриваете', 5),
  plural3rdPerson: Word('отковыривают', 5),
  masculinePast: Word('отковыривал', 5),
  femininePast: Word('отковыривала', 5),
  neuterPast: Word('отковыривало', 5),
  pluralPast: Word('отковыривали', 5),
  imperativeInformal: Word('отковыривай', 5),
  imperativeFormal: Word('отковыривайте', 5),
  imperfect: [],
};

perfectVerbs.set(отковыривать.name.text, отковыривать);

export { отковыривать };