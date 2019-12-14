import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выветривать: PerfectVerb = {
  name: Word('выветривать', 3),
  singular1stPerson: Word('выветриваю', 3),
  singular2ndPerson: Word('выветриваешь', 3),
  singular3rdPerson: Word('выветривает', 3),
  plural1stPerson: Word('выветриваем', 3),
  plural2ndPerson: Word('выветриваете', 3),
  plural3rdPerson: Word('выветривают', 3),
  masculinePast: Word('выветривал', 3),
  femininePast: Word('выветривала', 3),
  neuterPast: Word('выветривало', 3),
  pluralPast: Word('выветривали', 3),
  imperativeInformal: Word('выветривай', 3),
  imperativeFormal: Word('выветривайте', 3),
  imperfect: [],
};

perfectVerbs.set(выветривать.name.text, выветривать);

export { выветривать };