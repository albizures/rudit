import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обветривать: PerfectVerb = {
  name: Word('обветривать', 3),
  singular1stPerson: Word('обветриваю', 3),
  singular2ndPerson: Word('обветриваешь', 3),
  singular3rdPerson: Word('обветривает', 3),
  plural1stPerson: Word('обветриваем', 3),
  plural2ndPerson: Word('обветриваете', 3),
  plural3rdPerson: Word('обветривают', 3),
  masculinePast: Word('обветривал', 3),
  femininePast: Word('обветривала', 3),
  neuterPast: Word('обветривало', 3),
  pluralPast: Word('обветривали', 3),
  imperativeInformal: Word('обветривай', 3),
  imperativeFormal: Word('обветривайте', 3),
  imperfect: [],
};

perfectVerbs.set(обветривать.name.text, обветривать);

export { обветривать };