import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазубривать: PerfectVerb = {
  name: Word('зазубривать', 3),
  singular1stPerson: Word('зазубриваю', 3),
  singular2ndPerson: Word('зазубриваешь', 3),
  singular3rdPerson: Word('зазубривает', 3),
  plural1stPerson: Word('зазубриваем', 3),
  plural2ndPerson: Word('зазубриваете', 3),
  plural3rdPerson: Word('зазубривают', 3),
  masculinePast: Word('зазубривал', 3),
  femininePast: Word('зазубривала', 3),
  neuterPast: Word('зазубривало', 3),
  pluralPast: Word('зазубривали', 3),
  imperativeInformal: Word('зазубривай', 3),
  imperativeFormal: Word('зазубривайте', 3),
  imperfect: [],
};

perfectVerbs.set(зазубривать.name.text, зазубривать);

export { зазубривать };