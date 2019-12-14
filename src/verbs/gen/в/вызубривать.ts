import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызубривать: PerfectVerb = {
  name: Word('вызубривать', 3),
  singular1stPerson: Word('вызубриваю', 3),
  singular2ndPerson: Word('вызубриваешь', 3),
  singular3rdPerson: Word('вызубривает', 3),
  plural1stPerson: Word('вызубриваем', 3),
  plural2ndPerson: Word('вызубриваете', 3),
  plural3rdPerson: Word('вызубривают', 3),
  masculinePast: Word('вызубривал', 3),
  femininePast: Word('вызубривала', 3),
  neuterPast: Word('вызубривало', 3),
  pluralPast: Word('вызубривали', 3),
  imperativeInformal: Word('вызубривай', 3),
  imperativeFormal: Word('вызубривайте', 3),
  imperfect: [],
};

perfectVerbs.set(вызубривать.name.text, вызубривать);

export { вызубривать };