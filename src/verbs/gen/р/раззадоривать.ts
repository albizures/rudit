import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раззадоривать: PerfectVerb = {
  name: Word('раззадоривать', 6),
  singular1stPerson: Word('раззадориваю', 6),
  singular2ndPerson: Word('раззадориваешь', 6),
  singular3rdPerson: Word('раззадоривает', 6),
  plural1stPerson: Word('раззадориваем', 6),
  plural2ndPerson: Word('раззадориваете', 6),
  plural3rdPerson: Word('раззадоривают', 6),
  masculinePast: Word('раззадоривал', 6),
  femininePast: Word('раззадоривала', 6),
  neuterPast: Word('раззадоривало', 6),
  pluralPast: Word('раззадоривали', 6),
  imperativeInformal: Word('раззадоривай', 6),
  imperativeFormal: Word('раззадоривайте', 6),
  imperfect: [],
};

perfectVerbs.set(раззадоривать.name.text, раззадоривать);

export { раззадоривать };