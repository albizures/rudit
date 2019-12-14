import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджаривать: PerfectVerb = {
  name: Word('поджаривать', 4),
  singular1stPerson: Word('поджариваю', 4),
  singular2ndPerson: Word('поджариваешь', 4),
  singular3rdPerson: Word('поджаривает', 4),
  plural1stPerson: Word('поджариваем', 4),
  plural2ndPerson: Word('поджариваете', 4),
  plural3rdPerson: Word('поджаривают', 4),
  masculinePast: Word('поджаривал', 4),
  femininePast: Word('поджаривала', 4),
  neuterPast: Word('поджаривало', 4),
  pluralPast: Word('поджаривали', 4),
  imperativeInformal: Word('поджаривай', 4),
  imperativeFormal: Word('поджаривайте', 4),
  imperfect: [],
};

perfectVerbs.set(поджаривать.name.text, поджаривать);

export { поджаривать };