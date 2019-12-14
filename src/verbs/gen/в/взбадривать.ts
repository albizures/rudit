import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбадривать: PerfectVerb = {
  name: Word('взбадривать', 3),
  singular1stPerson: Word('взбадриваю', 3),
  singular2ndPerson: Word('взбадриваешь', 3),
  singular3rdPerson: Word('взбадривает', 3),
  plural1stPerson: Word('взбадриваем', 3),
  plural2ndPerson: Word('взбадриваете', 3),
  plural3rdPerson: Word('взбадривают', 3),
  masculinePast: Word('взбадривал', 3),
  femininePast: Word('взбадривала', 3),
  neuterPast: Word('взбадривало', 3),
  pluralPast: Word('взбадривали', 3),
  imperativeInformal: Word('взбадривай', 3),
  imperativeFormal: Word('взбадривайте', 3),
  imperfect: [],
};

perfectVerbs.set(взбадривать.name.text, взбадривать);

export { взбадривать };