import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задабривать: PerfectVerb = {
  name: Word('задабривать', 3),
  singular1stPerson: Word('задабриваю', 3),
  singular2ndPerson: Word('задабриваешь', 3),
  singular3rdPerson: Word('задабривает', 3),
  plural1stPerson: Word('задабриваем', 3),
  plural2ndPerson: Word('задабриваете', 3),
  plural3rdPerson: Word('задабривают', 3),
  masculinePast: Word('задабривал', 3),
  femininePast: Word('задабривала', 3),
  neuterPast: Word('задабривало', 3),
  pluralPast: Word('задабривали', 3),
  imperativeInformal: Word('задабривай', 3),
  imperativeFormal: Word('задабривайте', 3),
  imperfect: [],
};

perfectVerbs.set(задабривать.name.text, задабривать);

export { задабривать };