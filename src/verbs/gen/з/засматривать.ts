import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засматривать: PerfectVerb = {
  name: Word('засматривать', 4),
  singular1stPerson: Word('засматриваю', 4),
  singular2ndPerson: Word('засматриваешь', 4),
  singular3rdPerson: Word('засматривает', 4),
  plural1stPerson: Word('засматриваем', 4),
  plural2ndPerson: Word('засматриваете', 4),
  plural3rdPerson: Word('засматривают', 4),
  masculinePast: Word('засматривал', 4),
  femininePast: Word('засматривала', 4),
  neuterPast: Word('засматривало', 4),
  pluralPast: Word('засматривали', 4),
  imperativeInformal: Word('засматривай', 4),
  imperativeFormal: Word('засматривайте', 4),
  imperfect: [],
};

perfectVerbs.set(засматривать.name.text, засматривать);

export { засматривать };