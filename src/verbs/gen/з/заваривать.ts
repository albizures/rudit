import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заваривать: PerfectVerb = {
  name: Word('заваривать', 3),
  singular1stPerson: Word('завариваю', 3),
  singular2ndPerson: Word('завариваешь', 3),
  singular3rdPerson: Word('заваривает', 3),
  plural1stPerson: Word('завариваем', 3),
  plural2ndPerson: Word('завариваете', 3),
  plural3rdPerson: Word('заваривают', 3),
  masculinePast: Word('заваривал', 3),
  femininePast: Word('заваривала', 3),
  neuterPast: Word('заваривало', 3),
  pluralPast: Word('заваривали', 3),
  imperativeInformal: Word('заваривай', 3),
  imperativeFormal: Word('заваривайте', 3),
  imperfect: [],
};

perfectVerbs.set(заваривать.name.text, заваривать);

export { заваривать };