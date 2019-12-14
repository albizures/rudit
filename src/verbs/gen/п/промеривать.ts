import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промеривать: PerfectVerb = {
  name: Word('промеривать', 4),
  singular1stPerson: Word('промериваю', 4),
  singular2ndPerson: Word('промериваешь', 4),
  singular3rdPerson: Word('промеривает', 4),
  plural1stPerson: Word('промериваем', 4),
  plural2ndPerson: Word('промериваете', 4),
  plural3rdPerson: Word('промеривают', 4),
  masculinePast: Word('промеривал', 4),
  femininePast: Word('промеривала', 4),
  neuterPast: Word('промеривало', 4),
  pluralPast: Word('промеривали', 4),
  imperativeInformal: Word('промеривай', 4),
  imperativeFormal: Word('промеривайте', 4),
  imperfect: [],
};

perfectVerbs.set(промеривать.name.text, промеривать);

export { промеривать };