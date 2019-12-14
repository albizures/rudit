import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втолковывать: PerfectVerb = {
  name: Word('втолковывать', 5),
  singular1stPerson: Word('втолковываю', 5),
  singular2ndPerson: Word('втолковываешь', 5),
  singular3rdPerson: Word('втолковывает', 5),
  plural1stPerson: Word('втолковываем', 5),
  plural2ndPerson: Word('втолковываете', 5),
  plural3rdPerson: Word('втолковывают', 5),
  masculinePast: Word('втолковывал', 5),
  femininePast: Word('втолковывала', 5),
  neuterPast: Word('втолковывало', 5),
  pluralPast: Word('втолковывали', 5),
  imperativeInformal: Word('втолковывай', 5),
  imperativeFormal: Word('втолковывайте', 5),
  imperfect: [],
};

perfectVerbs.set(втолковывать.name.text, втолковывать);

export { втолковывать };