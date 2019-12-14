import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приговаривать: PerfectVerb = {
  name: Word('приговаривать', 6),
  singular1stPerson: Word('приговариваю', 6),
  singular2ndPerson: Word('приговариваешь', 6),
  singular3rdPerson: Word('приговаривает', 6),
  plural1stPerson: Word('приговариваем', 6),
  plural2ndPerson: Word('приговариваете', 6),
  plural3rdPerson: Word('приговаривают', 6),
  masculinePast: Word('приговаривал', 6),
  femininePast: Word('приговаривала', 6),
  neuterPast: Word('приговаривало', 6),
  pluralPast: Word('приговаривали', 6),
  imperativeInformal: Word('приговаривай', 6),
  imperativeFormal: Word('приговаривайте', 6),
  imperfect: ['приговорить'],
};

perfectVerbs.set(приговаривать.name.text, приговаривать);

export { приговаривать };