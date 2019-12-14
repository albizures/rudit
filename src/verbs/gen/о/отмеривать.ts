import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмеривать: PerfectVerb = {
  name: Word('отмеривать', 3),
  singular1stPerson: Word('отмериваю', 3),
  singular2ndPerson: Word('отмериваешь', 3),
  singular3rdPerson: Word('отмеривает', 3),
  plural1stPerson: Word('отмериваем', 3),
  plural2ndPerson: Word('отмериваете', 3),
  plural3rdPerson: Word('отмеривают', 3),
  masculinePast: Word('отмеривал', 3),
  femininePast: Word('отмеривала', 3),
  neuterPast: Word('отмеривало', 3),
  pluralPast: Word('отмеривали', 3),
  imperativeInformal: Word('отмеривай', 3),
  imperativeFormal: Word('отмеривайте', 3),
  imperfect: [],
};

perfectVerbs.set(отмеривать.name.text, отмеривать);

export { отмеривать };