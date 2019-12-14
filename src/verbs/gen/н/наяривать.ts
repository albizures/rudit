import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наяривать: PerfectVerb = {
  name: Word('наяривать', 2),
  singular1stPerson: Word('наяриваю', 2),
  singular2ndPerson: Word('наяриваешь', 2),
  singular3rdPerson: Word('наяривает', 2),
  plural1stPerson: Word('наяриваем', 2),
  plural2ndPerson: Word('наяриваете', 2),
  plural3rdPerson: Word('наяривают', 2),
  masculinePast: Word('наяривал', 2),
  femininePast: Word('наяривала', 2),
  neuterPast: Word('наяривало', 2),
  pluralPast: Word('наяривали', 2),
  imperativeInformal: Word('наяривай', 2),
  imperativeFormal: Word('наяривайте', 2),
  imperfect: [],
};

perfectVerbs.set(наяривать.name.text, наяривать);

export { наяривать };