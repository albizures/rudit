import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подштукатуривать: PerfectVerb = {
  name: Word('подштукатуривать', 9),
  singular1stPerson: Word('подштукатуриваю', 9),
  singular2ndPerson: Word('подштукатуриваешь', 9),
  singular3rdPerson: Word('подштукатуривает', 9),
  plural1stPerson: Word('подштукатуриваем', 9),
  plural2ndPerson: Word('подштукатуриваете', 9),
  plural3rdPerson: Word('подштукатуривают', 9),
  masculinePast: Word('подштукатуривал', 9),
  femininePast: Word('подштукатуривала', 9),
  neuterPast: Word('подштукатуривало', 9),
  pluralPast: Word('подштукатуривали', 9),
  imperativeInformal: Word('подштукатуривай', 9),
  imperativeFormal: Word('подштукатуривайте', 9),
  imperfect: [],
};

perfectVerbs.set(подштукатуривать.name.text, подштукатуривать);

export { подштукатуривать };