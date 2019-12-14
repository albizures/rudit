import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проветривать: PerfectVerb = {
  name: Word('проветривать', 4),
  singular1stPerson: Word('проветриваю', 4),
  singular2ndPerson: Word('проветриваешь', 4),
  singular3rdPerson: Word('проветривает', 4),
  plural1stPerson: Word('проветриваем', 4),
  plural2ndPerson: Word('проветриваете', 4),
  plural3rdPerson: Word('проветривают', 4),
  masculinePast: Word('проветривал', 4),
  femininePast: Word('проветривала', 4),
  neuterPast: Word('проветривало', 4),
  pluralPast: Word('проветривали', 4),
  imperativeInformal: Word('проветривай', 4),
  imperativeFormal: Word('проветривайте', 4),
  imperfect: ['проветрить'],
};

perfectVerbs.set(проветривать.name.text, проветривать);

export { проветривать };