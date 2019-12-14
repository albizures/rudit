import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досматривать: PerfectVerb = {
  name: Word('досматривать', 4),
  singular1stPerson: Word('досматриваю', 4),
  singular2ndPerson: Word('досматриваешь', 4),
  singular3rdPerson: Word('досматривает', 4),
  plural1stPerson: Word('досматриваем', 4),
  plural2ndPerson: Word('досматриваете', 4),
  plural3rdPerson: Word('досматривают', 4),
  masculinePast: Word('досматривал', 4),
  femininePast: Word('досматривала', 4),
  neuterPast: Word('досматривало', 4),
  pluralPast: Word('досматривали', 4),
  imperativeInformal: Word('досматривай', 4),
  imperativeFormal: Word('досматривайте', 4),
  imperfect: [],
};

perfectVerbs.set(досматривать.name.text, досматривать);

export { досматривать };