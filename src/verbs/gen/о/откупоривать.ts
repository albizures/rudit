import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откупоривать: PerfectVerb = {
  name: Word('откупоривать', 3),
  singular1stPerson: Word('откупориваю', 3),
  singular2ndPerson: Word('откупориваешь', 3),
  singular3rdPerson: Word('откупоривает', 3),
  plural1stPerson: Word('откупориваем', 3),
  plural2ndPerson: Word('откупориваете', 3),
  plural3rdPerson: Word('откупоривают', 3),
  masculinePast: Word('откупоривал', 3),
  femininePast: Word('откупоривала', 3),
  neuterPast: Word('откупоривало', 3),
  pluralPast: Word('откупоривали', 3),
  imperativeInformal: Word('откупоривай', 3),
  imperativeFormal: Word('откупоривайте', 3),
  imperfect: [],
};

perfectVerbs.set(откупоривать.name.text, откупоривать);

export { откупоривать };