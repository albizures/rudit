import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезжиривать: PerfectVerb = {
  name: Word('обезжиривать', 5),
  singular1stPerson: Word('обезжириваю', 5),
  singular2ndPerson: Word('обезжириваешь', 5),
  singular3rdPerson: Word('обезжиривает', 5),
  plural1stPerson: Word('обезжириваем', 5),
  plural2ndPerson: Word('обезжириваете', 5),
  plural3rdPerson: Word('обезжиривают', 5),
  masculinePast: Word('обезжиривал', 5),
  femininePast: Word('обезжиривала', 5),
  neuterPast: Word('обезжиривало', 5),
  pluralPast: Word('обезжиривали', 5),
  imperativeInformal: Word('обезжиривай', 5),
  imperativeFormal: Word('обезжиривайте', 5),
  imperfect: [],
};

perfectVerbs.set(обезжиривать.name.text, обезжиривать);

export { обезжиривать };