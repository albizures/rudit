import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покуривать: PerfectVerb = {
  name: Word('покуривать', 3),
  singular1stPerson: Word('покуриваю', 3),
  singular2ndPerson: Word('покуриваешь', 3),
  singular3rdPerson: Word('покуривает', 3),
  plural1stPerson: Word('покуриваем', 3),
  plural2ndPerson: Word('покуриваете', 3),
  plural3rdPerson: Word('покуривают', 3),
  masculinePast: Word('покуривал', 3),
  femininePast: Word('покуривала', 3),
  neuterPast: Word('покуривало', 3),
  pluralPast: Word('покуривали', 3),
  imperativeInformal: Word('покуривай', 3),
  imperativeFormal: Word('покуривайте', 3),
  imperfect: [],
};

perfectVerbs.set(покуривать.name.text, покуривать);

export { покуривать };