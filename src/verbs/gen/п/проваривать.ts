import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проваривать: PerfectVerb = {
  name: Word('проваривать', 4),
  singular1stPerson: Word('провариваю', 4),
  singular2ndPerson: Word('провариваешь', 4),
  singular3rdPerson: Word('проваривает', 4),
  plural1stPerson: Word('провариваем', 4),
  plural2ndPerson: Word('провариваете', 4),
  plural3rdPerson: Word('проваривают', 4),
  masculinePast: Word('проваривал', 4),
  femininePast: Word('проваривала', 4),
  neuterPast: Word('проваривало', 4),
  pluralPast: Word('проваривали', 4),
  imperativeInformal: Word('проваривай', 4),
  imperativeFormal: Word('проваривайте', 4),
  imperfect: [],
};

perfectVerbs.set(проваривать.name.text, проваривать);

export { проваривать };