import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const договаривать: PerfectVerb = {
  name: Word('договаривать', 5),
  singular1stPerson: Word('договариваю', 5),
  singular2ndPerson: Word('договариваешь', 5),
  singular3rdPerson: Word('договаривает', 5),
  plural1stPerson: Word('договариваем', 5),
  plural2ndPerson: Word('договариваете', 5),
  plural3rdPerson: Word('договаривают', 5),
  masculinePast: Word('договаривал', 5),
  femininePast: Word('договаривала', 5),
  neuterPast: Word('договаривало', 5),
  pluralPast: Word('договаривали', 5),
  imperativeInformal: Word('договаривай', 5),
  imperativeFormal: Word('договаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(договаривать.name.text, договаривать);

export { договаривать };