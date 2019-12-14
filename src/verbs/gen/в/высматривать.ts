import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высматривать: PerfectVerb = {
  name: Word('высматривать', 4),
  singular1stPerson: Word('высматриваю', 4),
  singular2ndPerson: Word('высматриваешь', 4),
  singular3rdPerson: Word('высматривает', 4),
  plural1stPerson: Word('высматриваем', 4),
  plural2ndPerson: Word('высматриваете', 4),
  plural3rdPerson: Word('высматривают', 4),
  masculinePast: Word('высматривал', 4),
  femininePast: Word('высматривала', 4),
  neuterPast: Word('высматривало', 4),
  pluralPast: Word('высматривали', 4),
  imperativeInformal: Word('высматривай', 4),
  imperativeFormal: Word('высматривайте', 4),
  imperfect: [],
};

perfectVerbs.set(высматривать.name.text, высматривать);

export { высматривать };