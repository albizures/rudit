import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подговаривать: PerfectVerb = {
  name: Word('подговаривать', 6),
  singular1stPerson: Word('подговариваю', 6),
  singular2ndPerson: Word('подговариваешь', 6),
  singular3rdPerson: Word('подговаривает', 6),
  plural1stPerson: Word('подговариваем', 6),
  plural2ndPerson: Word('подговариваете', 6),
  plural3rdPerson: Word('подговаривают', 6),
  masculinePast: Word('подговаривал', 6),
  femininePast: Word('подговаривала', 6),
  neuterPast: Word('подговаривало', 6),
  pluralPast: Word('подговаривали', 6),
  imperativeInformal: Word('подговаривай', 6),
  imperativeFormal: Word('подговаривайте', 6),
  imperfect: ['подговорить'],
};

perfectVerbs.set(подговаривать.name.text, подговаривать);

export { подговаривать };