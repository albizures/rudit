import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перековывать: PerfectVerb = {
  name: Word('перековывать', 5),
  singular1stPerson: Word('перековываю', 5),
  singular2ndPerson: Word('перековываешь', 5),
  singular3rdPerson: Word('перековывает', 5),
  plural1stPerson: Word('перековываем', 5),
  plural2ndPerson: Word('перековываете', 5),
  plural3rdPerson: Word('перековывают', 5),
  masculinePast: Word('перековывал', 5),
  femininePast: Word('перековывала', 5),
  neuterPast: Word('перековывало', 5),
  pluralPast: Word('перековывали', 5),
  imperativeInformal: Word('перековывай', 5),
  imperativeFormal: Word('перековывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перековывать.name.text, перековывать);

export { перековывать };