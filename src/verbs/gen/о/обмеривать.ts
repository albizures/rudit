import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмеривать: PerfectVerb = {
  name: Word('обмеривать', 3),
  singular1stPerson: Word('обмериваю', 3),
  singular2ndPerson: Word('обмериваешь', 3),
  singular3rdPerson: Word('обмеривает', 3),
  plural1stPerson: Word('обмериваем', 3),
  plural2ndPerson: Word('обмериваете', 3),
  plural3rdPerson: Word('обмеривают', 3),
  masculinePast: Word('обмеривал', 3),
  femininePast: Word('обмеривала', 3),
  neuterPast: Word('обмеривало', 3),
  pluralPast: Word('обмеривали', 3),
  imperativeInformal: Word('обмеривай', 3),
  imperativeFormal: Word('обмеривайте', 3),
  imperfect: [],
};

perfectVerbs.set(обмеривать.name.text, обмеривать);

export { обмеривать };