import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засасывать: PerfectVerb = {
  name: Word('засасывать', 3),
  singular1stPerson: Word('засасываю', 3),
  singular2ndPerson: Word('засасываешь', 3),
  singular3rdPerson: Word('засасывает', 3),
  plural1stPerson: Word('засасываем', 3),
  plural2ndPerson: Word('засасываете', 3),
  plural3rdPerson: Word('засасывают', 3),
  masculinePast: Word('засасывал', 3),
  femininePast: Word('засасывала', 3),
  neuterPast: Word('засасывало', 3),
  pluralPast: Word('засасывали', 3),
  imperativeInformal: Word('засасывай', 3),
  imperativeFormal: Word('засасывайте', 3),
  imperfect: [],
};

perfectVerbs.set(засасывать.name.text, засасывать);

export { засасывать };