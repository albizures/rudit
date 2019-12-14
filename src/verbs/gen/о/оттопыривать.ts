import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттопыривать: PerfectVerb = {
  name: Word('оттопыривать', 5),
  singular1stPerson: Word('оттопыриваю', 5),
  singular2ndPerson: Word('оттопыриваешь', 5),
  singular3rdPerson: Word('оттопыривает', 5),
  plural1stPerson: Word('оттопыриваем', 5),
  plural2ndPerson: Word('оттопыриваете', 5),
  plural3rdPerson: Word('оттопыривают', 5),
  masculinePast: Word('оттопыривал', 5),
  femininePast: Word('оттопыривала', 5),
  neuterPast: Word('оттопыривало', 5),
  pluralPast: Word('оттопыривали', 5),
  imperativeInformal: Word('оттопыривай', 5),
  imperativeFormal: Word('оттопыривайте', 5),
  imperfect: [],
};

perfectVerbs.set(оттопыривать.name.text, оттопыривать);

export { оттопыривать };