import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усматривать: PerfectVerb = {
  name: Word('усматривать', 3),
  singular1stPerson: Word('усматриваю', 3),
  singular2ndPerson: Word('усматриваешь', 3),
  singular3rdPerson: Word('усматривает', 3),
  plural1stPerson: Word('усматриваем', 3),
  plural2ndPerson: Word('усматриваете', 3),
  plural3rdPerson: Word('усматривают', 3),
  masculinePast: Word('усматривал', 3),
  femininePast: Word('усматривала', 3),
  neuterPast: Word('усматривало', 3),
  pluralPast: Word('усматривали', 3),
  imperativeInformal: Word('усматривай', 3),
  imperativeFormal: Word('усматривайте', 3),
  imperfect: [],
};

perfectVerbs.set(усматривать.name.text, усматривать);

export { усматривать };