import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застопоривать: PerfectVerb = {
  name: Word('застопоривать', 4),
  singular1stPerson: Word('застопориваю', 4),
  singular2ndPerson: Word('застопориваешь', 4),
  singular3rdPerson: Word('застопоривает', 4),
  plural1stPerson: Word('застопориваем', 4),
  plural2ndPerson: Word('застопориваете', 4),
  plural3rdPerson: Word('застопоривают', 4),
  masculinePast: Word('застопоривал', 4),
  femininePast: Word('застопоривала', 4),
  neuterPast: Word('застопоривало', 4),
  pluralPast: Word('застопоривали', 4),
  imperativeInformal: Word('застопоривай', 4),
  imperativeFormal: Word('застопоривайте', 4),
  imperfect: [],
};

perfectVerbs.set(застопоривать.name.text, застопоривать);

export { застопоривать };