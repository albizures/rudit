import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надсматривать: PerfectVerb = {
  name: Word('надсматривать', 5),
  singular1stPerson: Word('надсматриваю', 5),
  singular2ndPerson: Word('надсматриваешь', 5),
  singular3rdPerson: Word('надсматривает', 5),
  plural1stPerson: Word('надсматриваем', 5),
  plural2ndPerson: Word('надсматриваете', 5),
  plural3rdPerson: Word('надсматривают', 5),
  masculinePast: Word('надсматривал', 5),
  femininePast: Word('надсматривала', 5),
  neuterPast: Word('надсматривало', 5),
  pluralPast: Word('надсматривали', 5),
  imperativeInformal: Word('надсматривай', 5),
  imperativeFormal: Word('надсматривайте', 5),
  imperfect: [],
};

perfectVerbs.set(надсматривать.name.text, надсматривать);

export { надсматривать };