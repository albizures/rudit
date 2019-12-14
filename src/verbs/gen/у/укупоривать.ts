import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укупоривать: PerfectVerb = {
  name: Word('укупоривать', 2),
  singular1stPerson: Word('укупориваю', 2),
  singular2ndPerson: Word('укупориваешь', 2),
  singular3rdPerson: Word('укупоривает', 2),
  plural1stPerson: Word('укупориваем', 2),
  plural2ndPerson: Word('укупориваете', 2),
  plural3rdPerson: Word('укупоривают', 2),
  masculinePast: Word('укупоривал', 2),
  femininePast: Word('укупоривала', 2),
  neuterPast: Word('укупоривало', 2),
  pluralPast: Word('укупоривали', 2),
  imperativeInformal: Word('укупоривай', 2),
  imperativeFormal: Word('укупоривайте', 2),
  imperfect: [],
};

perfectVerbs.set(укупоривать.name.text, укупоривать);

export { укупоривать };