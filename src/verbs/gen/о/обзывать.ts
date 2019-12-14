import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обзывать: PerfectVerb = {
  name: Word('обзывать', 5),
  singular1stPerson: Word('обзываю', 5),
  singular2ndPerson: Word('обзываешь', 5),
  singular3rdPerson: Word('обзывает', 5),
  plural1stPerson: Word('обзываем', 5),
  plural2ndPerson: Word('обзываете', 5),
  plural3rdPerson: Word('обзывают', 5),
  masculinePast: Word('обзывал', 5),
  femininePast: Word('обзывала', 5),
  neuterPast: Word('обзывало', 5),
  pluralPast: Word('обзывали', 5),
  imperativeInformal: Word('обзывай', 5),
  imperativeFormal: Word('обзывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обзывать.name.text, обзывать);

export { обзывать };