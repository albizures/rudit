import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переваривать: PerfectVerb = {
  name: Word('переваривать', 5),
  singular1stPerson: Word('перевариваю', 5),
  singular2ndPerson: Word('перевариваешь', 5),
  singular3rdPerson: Word('переваривает', 5),
  plural1stPerson: Word('перевариваем', 5),
  plural2ndPerson: Word('перевариваете', 5),
  plural3rdPerson: Word('переваривают', 5),
  masculinePast: Word('переваривал', 5),
  femininePast: Word('переваривала', 5),
  neuterPast: Word('переваривало', 5),
  pluralPast: Word('переваривали', 5),
  imperativeInformal: Word('переваривай', 5),
  imperativeFormal: Word('переваривайте', 5),
  imperfect: [],
};

perfectVerbs.set(переваривать.name.text, переваривать);

export { переваривать };