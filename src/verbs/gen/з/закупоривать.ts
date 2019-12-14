import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закупоривать: PerfectVerb = {
  name: Word('закупоривать', 3),
  singular1stPerson: Word('закупориваю', 3),
  singular2ndPerson: Word('закупориваешь', 3),
  singular3rdPerson: Word('закупоривает', 3),
  plural1stPerson: Word('закупориваем', 3),
  plural2ndPerson: Word('закупориваете', 3),
  plural3rdPerson: Word('закупоривают', 3),
  masculinePast: Word('закупоривал', 3),
  femininePast: Word('закупоривала', 3),
  neuterPast: Word('закупоривало', 3),
  pluralPast: Word('закупоривали', 3),
  imperativeInformal: Word('закупоривай', 3),
  imperativeFormal: Word('закупоривайте', 3),
  imperfect: [],
};

perfectVerbs.set(закупоривать.name.text, закупоривать);

export { закупоривать };