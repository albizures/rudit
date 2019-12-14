import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересматривать: PerfectVerb = {
  name: Word('пересматривать', 6),
  singular1stPerson: Word('пересматриваю', 6),
  singular2ndPerson: Word('пересматриваешь', 6),
  singular3rdPerson: Word('пересматривает', 6),
  plural1stPerson: Word('пересматриваем', 6),
  plural2ndPerson: Word('пересматриваете', 6),
  plural3rdPerson: Word('пересматривают', 6),
  masculinePast: Word('пересматривал', 6),
  femininePast: Word('пересматривала', 6),
  neuterPast: Word('пересматривало', 6),
  pluralPast: Word('пересматривали', 6),
  imperativeInformal: Word('пересматривай', 6),
  imperativeFormal: Word('пересматривайте', 6),
  imperfect: [],
};

perfectVerbs.set(пересматривать.name.text, пересматривать);

export { пересматривать };