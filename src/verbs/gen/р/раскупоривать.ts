import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскупоривать: PerfectVerb = {
  name: Word('раскупоривать', 4),
  singular1stPerson: Word('раскупориваю', 4),
  singular2ndPerson: Word('раскупориваешь', 4),
  singular3rdPerson: Word('раскупоривает', 4),
  plural1stPerson: Word('раскупориваем', 4),
  plural2ndPerson: Word('раскупориваете', 4),
  plural3rdPerson: Word('раскупоривают', 4),
  masculinePast: Word('раскупоривал', 4),
  femininePast: Word('раскупоривала', 4),
  neuterPast: Word('раскупоривало', 4),
  pluralPast: Word('раскупоривали', 4),
  imperativeInformal: Word('раскупоривай', 4),
  imperativeFormal: Word('раскупоривайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскупоривать.name.text, раскупоривать);

export { раскупоривать };