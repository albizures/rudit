import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошпаривать: PerfectVerb = {
  name: Word('ошпаривать', 3),
  singular1stPerson: Word('ошпариваю', 3),
  singular2ndPerson: Word('ошпариваешь', 3),
  singular3rdPerson: Word('ошпаривает', 3),
  plural1stPerson: Word('ошпариваем', 3),
  plural2ndPerson: Word('ошпариваете', 3),
  plural3rdPerson: Word('ошпаривают', 3),
  masculinePast: Word('ошпаривал', 3),
  femininePast: Word('ошпаривала', 3),
  neuterPast: Word('ошпаривало', 3),
  pluralPast: Word('ошпаривали', 3),
  imperativeInformal: Word('ошпаривай', 3),
  imperativeFormal: Word('ошпаривайте', 3),
  imperfect: [],
};

perfectVerbs.set(ошпаривать.name.text, ошпаривать);

export { ошпаривать };