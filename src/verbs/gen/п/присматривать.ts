import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присматривать: PerfectVerb = {
  name: Word('присматривать', 5),
  singular1stPerson: Word('присматриваю', 5),
  singular2ndPerson: Word('присматриваешь', 5),
  singular3rdPerson: Word('присматривает', 5),
  plural1stPerson: Word('присматриваем', 5),
  plural2ndPerson: Word('присматриваете', 5),
  plural3rdPerson: Word('присматривают', 5),
  masculinePast: Word('присматривал', 5),
  femininePast: Word('присматривала', 5),
  neuterPast: Word('присматривало', 5),
  pluralPast: Word('присматривали', 5),
  imperativeInformal: Word('присматривай', 5),
  imperativeFormal: Word('присматривайте', 5),
  imperfect: ['присмотреть'],
};

perfectVerbs.set(присматривать.name.text, присматривать);

export { присматривать };