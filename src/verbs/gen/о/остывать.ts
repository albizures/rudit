import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остывать: PerfectVerb = {
  name: Word('остывать', 5),
  singular1stPerson: Word('остываю', 5),
  singular2ndPerson: Word('остываешь', 5),
  singular3rdPerson: Word('остывает', 5),
  plural1stPerson: Word('остываем', 5),
  plural2ndPerson: Word('остываете', 5),
  plural3rdPerson: Word('остывают', 5),
  masculinePast: Word('остывал', 5),
  femininePast: Word('остывала', 5),
  neuterPast: Word('остывало', 5),
  pluralPast: Word('остывали', 5),
  imperativeInformal: Word('остывай', 5),
  imperativeFormal: Word('остывайте', 5),
  imperfect: [],
};

perfectVerbs.set(остывать.name.text, остывать);

export { остывать };