import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предусматривать: PerfectVerb = {
  name: Word('предусматривать', 7),
  singular1stPerson: Word('предусматриваю', 7),
  singular2ndPerson: Word('предусматриваешь', 7),
  singular3rdPerson: Word('предусматривает', 7),
  plural1stPerson: Word('предусматриваем', 7),
  plural2ndPerson: Word('предусматриваете', 7),
  plural3rdPerson: Word('предусматривают', 7),
  masculinePast: Word('предусматривал', 7),
  femininePast: Word('предусматривала', 7),
  neuterPast: Word('предусматривало', 7),
  pluralPast: Word('предусматривали', 7),
  imperativeInformal: Word('предусматривай', 7),
  imperativeFormal: Word('предусматривайте', 7),
  imperfect: ['предусмотреть'],
};

perfectVerbs.set(предусматривать.name.text, предусматривать);

export { предусматривать };