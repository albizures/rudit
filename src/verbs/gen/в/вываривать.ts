import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вываривать: PerfectVerb = {
  name: Word('вываривать', 3),
  singular1stPerson: Word('вывариваю', 3),
  singular2ndPerson: Word('вывариваешь', 3),
  singular3rdPerson: Word('вываривает', 3),
  plural1stPerson: Word('вывариваем', 3),
  plural2ndPerson: Word('вывариваете', 3),
  plural3rdPerson: Word('вываривают', 3),
  masculinePast: Word('вываривал', 3),
  femininePast: Word('вываривала', 3),
  neuterPast: Word('вываривало', 3),
  pluralPast: Word('вываривали', 3),
  imperativeInformal: Word('вываривай', 3),
  imperativeFormal: Word('вываривайте', 3),
  imperfect: [],
};

perfectVerbs.set(вываривать.name.text, вываривать);

export { вываривать };