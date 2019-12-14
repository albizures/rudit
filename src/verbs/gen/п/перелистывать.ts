import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелистывать: PerfectVerb = {
  name: Word('перелистывать', 5),
  singular1stPerson: Word('перелистываю', 5),
  singular2ndPerson: Word('перелистываешь', 5),
  singular3rdPerson: Word('перелистывает', 5),
  plural1stPerson: Word('перелистываем', 5),
  plural2ndPerson: Word('перелистываете', 5),
  plural3rdPerson: Word('перелистывают', 5),
  masculinePast: Word('перелистывал', 5),
  femininePast: Word('перелистывала', 5),
  neuterPast: Word('перелистывало', 5),
  pluralPast: Word('перелистывали', 5),
  imperativeInformal: Word('перелистывай', 5),
  imperativeFormal: Word('перелистывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перелистывать.name.text, перелистывать);

export { перелистывать };