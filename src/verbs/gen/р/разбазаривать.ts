import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбазаривать: PerfectVerb = {
  name: Word('разбазаривать', 6),
  singular1stPerson: Word('разбазариваю', 6),
  singular2ndPerson: Word('разбазариваешь', 6),
  singular3rdPerson: Word('разбазаривает', 6),
  plural1stPerson: Word('разбазариваем', 6),
  plural2ndPerson: Word('разбазариваете', 6),
  plural3rdPerson: Word('разбазаривают', 6),
  masculinePast: Word('разбазаривал', 6),
  femininePast: Word('разбазаривала', 6),
  neuterPast: Word('разбазаривало', 6),
  pluralPast: Word('разбазаривали', 6),
  imperativeInformal: Word('разбазаривай', 6),
  imperativeFormal: Word('разбазаривайте', 6),
  imperfect: ['разбазарить'],
};

perfectVerbs.set(разбазаривать.name.text, разбазаривать);

export { разбазаривать };