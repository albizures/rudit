import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оспаривать: PerfectVerb = {
  name: Word('оспаривать', 3),
  singular1stPerson: Word('оспариваю', 3),
  singular2ndPerson: Word('оспариваешь', 3),
  singular3rdPerson: Word('оспаривает', 3),
  plural1stPerson: Word('оспариваем', 3),
  plural2ndPerson: Word('оспариваете', 3),
  plural3rdPerson: Word('оспаривают', 3),
  masculinePast: Word('оспаривал', 3),
  femininePast: Word('оспаривала', 3),
  neuterPast: Word('оспаривало', 3),
  pluralPast: Word('оспаривали', 3),
  imperativeInformal: Word('оспаривай', 3),
  imperativeFormal: Word('оспаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(оспаривать.name.text, оспаривать);

export { оспаривать };