import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепаривать: PerfectVerb = {
  name: Word('перепаривать', 5),
  singular1stPerson: Word('перепариваю', 5),
  singular2ndPerson: Word('перепариваешь', 5),
  singular3rdPerson: Word('перепаривает', 5),
  plural1stPerson: Word('перепариваем', 5),
  plural2ndPerson: Word('перепариваете', 5),
  plural3rdPerson: Word('перепаривают', 5),
  masculinePast: Word('перепаривал', 5),
  femininePast: Word('перепаривала', 5),
  neuterPast: Word('перепаривало', 5),
  pluralPast: Word('перепаривали', 5),
  imperativeInformal: Word('перепаривай', 5),
  imperativeFormal: Word('перепаривайте', 5),
  imperfect: [],
};

perfectVerbs.set(перепаривать.name.text, перепаривать);

export { перепаривать };