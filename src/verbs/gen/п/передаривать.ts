import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передаривать: PerfectVerb = {
  name: Word('передаривать', 5),
  singular1stPerson: Word('передариваю', 5),
  singular2ndPerson: Word('передариваешь', 5),
  singular3rdPerson: Word('передаривает', 5),
  plural1stPerson: Word('передариваем', 5),
  plural2ndPerson: Word('передариваете', 5),
  plural3rdPerson: Word('передаривают', 5),
  masculinePast: Word('передаривал', 5),
  femininePast: Word('передаривала', 5),
  neuterPast: Word('передаривало', 5),
  pluralPast: Word('передаривали', 5),
  imperativeInformal: Word('передаривай', 5),
  imperativeFormal: Word('передаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(передаривать.name.text, передаривать);

export { передаривать };