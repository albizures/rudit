import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпаривать: PerfectVerb = {
  name: Word('отпаривать', 3),
  singular1stPerson: Word('отпариваю', 3),
  singular2ndPerson: Word('отпариваешь', 3),
  singular3rdPerson: Word('отпаривает', 3),
  plural1stPerson: Word('отпариваем', 3),
  plural2ndPerson: Word('отпариваете', 3),
  plural3rdPerson: Word('отпаривают', 3),
  masculinePast: Word('отпаривал', 3),
  femininePast: Word('отпаривала', 3),
  neuterPast: Word('отпаривало', 3),
  pluralPast: Word('отпаривали', 3),
  imperativeInformal: Word('отпаривай', 3),
  imperativeFormal: Word('отпаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(отпаривать.name.text, отпаривать);

export { отпаривать };