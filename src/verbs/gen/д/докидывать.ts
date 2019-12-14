import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докидывать: PerfectVerb = {
  name: Word('докидывать', 3),
  singular1stPerson: Word('докидываю', 3),
  singular2ndPerson: Word('докидываешь', 3),
  singular3rdPerson: Word('докидывает', 3),
  plural1stPerson: Word('докидываем', 3),
  plural2ndPerson: Word('докидываете', 3),
  plural3rdPerson: Word('докидывают', 3),
  masculinePast: Word('докидывал', 3),
  femininePast: Word('докидывала', 3),
  neuterPast: Word('докидывало', 3),
  pluralPast: Word('докидывали', 3),
  imperativeInformal: Word('докидывай', 3),
  imperativeFormal: Word('докидывайте', 3),
  imperfect: [],
};

perfectVerbs.set(докидывать.name.text, докидывать);

export { докидывать };