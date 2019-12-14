import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сваривать: PerfectVerb = {
  name: Word('сваривать', 2),
  singular1stPerson: Word('свариваю', 2),
  singular2ndPerson: Word('свариваешь', 2),
  singular3rdPerson: Word('сваривает', 2),
  plural1stPerson: Word('свариваем', 2),
  plural2ndPerson: Word('свариваете', 2),
  plural3rdPerson: Word('сваривают', 2),
  masculinePast: Word('сваривал', 2),
  femininePast: Word('сваривала', 2),
  neuterPast: Word('сваривало', 2),
  pluralPast: Word('сваривали', 2),
  imperativeInformal: Word('сваривай', 2),
  imperativeFormal: Word('сваривайте', 2),
  imperfect: [],
};

perfectVerbs.set(сваривать.name.text, сваривать);

export { сваривать };