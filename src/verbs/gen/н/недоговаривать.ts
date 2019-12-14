import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоговаривать: PerfectVerb = {
  name: Word('недоговаривать', 7),
  singular1stPerson: Word('недоговариваю', 7),
  singular2ndPerson: Word('недоговариваешь', 7),
  singular3rdPerson: Word('недоговаривает', 7),
  plural1stPerson: Word('недоговариваем', 7),
  plural2ndPerson: Word('недоговариваете', 7),
  plural3rdPerson: Word('недоговаривают', 7),
  masculinePast: Word('недоговаривал', 7),
  femininePast: Word('недоговаривала', 7),
  neuterPast: Word('недоговаривало', 7),
  pluralPast: Word('недоговаривали', 7),
  imperativeInformal: Word('недоговаривай', 7),
  imperativeFormal: Word('недоговаривайте', 7),
  imperfect: [],
};

perfectVerbs.set(недоговаривать.name.text, недоговаривать);

export { недоговаривать };