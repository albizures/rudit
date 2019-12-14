import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проговаривать: PerfectVerb = {
  name: Word('проговаривать', 6),
  singular1stPerson: Word('проговариваю', 6),
  singular2ndPerson: Word('проговариваешь', 6),
  singular3rdPerson: Word('проговаривает', 6),
  plural1stPerson: Word('проговариваем', 6),
  plural2ndPerson: Word('проговариваете', 6),
  plural3rdPerson: Word('проговаривают', 6),
  masculinePast: Word('проговаривал', 6),
  femininePast: Word('проговаривала', 6),
  neuterPast: Word('проговаривало', 6),
  pluralPast: Word('проговаривали', 6),
  imperativeInformal: Word('проговаривай', 6),
  imperativeFormal: Word('проговаривайте', 6),
  imperfect: [],
};

perfectVerbs.set(проговаривать.name.text, проговаривать);

export { проговаривать };