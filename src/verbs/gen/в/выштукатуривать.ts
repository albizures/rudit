import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выштукатуривать: PerfectVerb = {
  name: Word('выштукатуривать', 8),
  singular1stPerson: Word('выштукатуриваю', 8),
  singular2ndPerson: Word('выштукатуриваешь', 8),
  singular3rdPerson: Word('выштукатуривает', 8),
  plural1stPerson: Word('выштукатуриваем', 8),
  plural2ndPerson: Word('выштукатуриваете', 8),
  plural3rdPerson: Word('выштукатуривают', 8),
  masculinePast: Word('выштукатуривал', 8),
  femininePast: Word('выштукатуривала', 8),
  neuterPast: Word('выштукатуривало', 8),
  pluralPast: Word('выштукатуривали', 8),
  imperativeInformal: Word('выштукатуривай', 8),
  imperativeFormal: Word('выштукатуривайте', 8),
  imperfect: [],
};

perfectVerbs.set(выштукатуривать.name.text, выштукатуривать);

export { выштукатуривать };