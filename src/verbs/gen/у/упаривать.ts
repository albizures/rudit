import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упаривать: PerfectVerb = {
  name: Word('упаривать', 2),
  singular1stPerson: Word('упариваю', 2),
  singular2ndPerson: Word('упариваешь', 2),
  singular3rdPerson: Word('упаривает', 2),
  plural1stPerson: Word('упариваем', 2),
  plural2ndPerson: Word('упариваете', 2),
  plural3rdPerson: Word('упаривают', 2),
  masculinePast: Word('упаривал', 2),
  femininePast: Word('упаривала', 2),
  neuterPast: Word('упаривало', 2),
  pluralPast: Word('упаривали', 2),
  imperativeInformal: Word('упаривай', 2),
  imperativeFormal: Word('упаривайте', 2),
  imperfect: [],
};

perfectVerbs.set(упаривать.name.text, упаривать);

export { упаривать };