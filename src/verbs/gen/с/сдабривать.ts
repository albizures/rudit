import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдабривать: PerfectVerb = {
  name: Word('сдабривать', 2),
  singular1stPerson: Word('сдабриваю', 2),
  singular2ndPerson: Word('сдабриваешь', 2),
  singular3rdPerson: Word('сдабривает', 2),
  plural1stPerson: Word('сдабриваем', 2),
  plural2ndPerson: Word('сдабриваете', 2),
  plural3rdPerson: Word('сдабривают', 2),
  masculinePast: Word('сдабривал', 2),
  femininePast: Word('сдабривала', 2),
  neuterPast: Word('сдабривало', 2),
  pluralPast: Word('сдабривали', 2),
  imperativeInformal: Word('сдабривай', 2),
  imperativeFormal: Word('сдабривайте', 2),
  imperfect: [],
};

perfectVerbs.set(сдабривать.name.text, сдабривать);

export { сдабривать };