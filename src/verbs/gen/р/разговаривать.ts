import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разговаривать: PerfectVerb = {
  name: Word('разговаривать', 6),
  singular1stPerson: Word('разговариваю', 6),
  singular2ndPerson: Word('разговариваешь', 1),
  singular3rdPerson: Word('разговаривает', 6),
  plural1stPerson: Word('разговариваем', 6),
  plural2ndPerson: Word('разговариваете', 6),
  plural3rdPerson: Word('разговаривают', 6),
  masculinePast: Word('разговаривал', 6),
  femininePast: Word('разговаривала', 6),
  neuterPast: Word('разговаривало', 6),
  pluralPast: Word('разговаривали', 6),
  imperativeInformal: Word('разговаривай', 6),
  imperativeFormal: Word('разговаривайте', 6),
  imperfect: [],
};

perfectVerbs.set(разговаривать.name.text, разговаривать);

export { разговаривать };