import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришпоривать: PerfectVerb = {
  name: Word('пришпоривать', 5),
  singular1stPerson: Word('пришпориваю', 5),
  singular2ndPerson: Word('пришпориваешь', 5),
  singular3rdPerson: Word('пришпоривает', 5),
  plural1stPerson: Word('пришпориваем', 5),
  plural2ndPerson: Word('пришпориваете', 5),
  plural3rdPerson: Word('пришпоривают', 5),
  masculinePast: Word('пришпоривал', 5),
  femininePast: Word('пришпоривала', 5),
  neuterPast: Word('пришпоривало', 5),
  pluralPast: Word('пришпоривали', 5),
  imperativeInformal: Word('пришпоривай', 5),
  imperativeFormal: Word('пришпоривайте', 5),
  imperfect: [],
};

perfectVerbs.set(пришпоривать.name.text, пришпоривать);

export { пришпоривать };