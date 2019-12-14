import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемеривать: PerfectVerb = {
  name: Word('перемеривать', 5),
  singular1stPerson: Word('перемериваю', 5),
  singular2ndPerson: Word('перемериваешь', 5),
  singular3rdPerson: Word('перемеривает', 5),
  plural1stPerson: Word('перемериваем', 5),
  plural2ndPerson: Word('перемериваете', 5),
  plural3rdPerson: Word('перемеривают', 5),
  masculinePast: Word('перемеривал', 5),
  femininePast: Word('перемеривала', 5),
  neuterPast: Word('перемеривало', 5),
  pluralPast: Word('перемеривали', 5),
  imperativeInformal: Word('перемеривай', 5),
  imperativeFormal: Word('перемеривайте', 5),
  imperfect: [],
};

perfectVerbs.set(перемеривать.name.text, перемеривать);

export { перемеривать };