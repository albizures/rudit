import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекуривать: PerfectVerb = {
  name: Word('перекуривать', 5),
  singular1stPerson: Word('перекуриваю', 5),
  singular2ndPerson: Word('перекуриваешь', 5),
  singular3rdPerson: Word('перекуривает', 5),
  plural1stPerson: Word('перекуриваем', 5),
  plural2ndPerson: Word('перекуриваете', 5),
  plural3rdPerson: Word('перекуривают', 5),
  masculinePast: Word('перекуривал', 5),
  femininePast: Word('перекуривала', 5),
  neuterPast: Word('перекуривало', 5),
  pluralPast: Word('перекуривали', 5),
  imperativeInformal: Word('перекуривай', 5),
  imperativeFormal: Word('перекуривайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекуривать.name.text, перекуривать);

export { перекуривать };