import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распаривать: PerfectVerb = {
  name: Word('распаривать', 4),
  singular1stPerson: Word('распариваю', 4),
  singular2ndPerson: Word('распариваешь', 4),
  singular3rdPerson: Word('распаривает', 4),
  plural1stPerson: Word('распариваем', 4),
  plural2ndPerson: Word('распариваете', 4),
  plural3rdPerson: Word('распаривают', 4),
  masculinePast: Word('распаривал', 4),
  femininePast: Word('распаривала', 4),
  neuterPast: Word('распаривало', 4),
  pluralPast: Word('распаривали', 4),
  imperativeInformal: Word('распаривай', 4),
  imperativeFormal: Word('распаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(распаривать.name.text, распаривать);

export { распаривать };