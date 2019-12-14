import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбраковывать: PerfectVerb = {
  name: Word('выбраковывать', 6),
  singular1stPerson: Word('выбраковываю', 6),
  singular2ndPerson: Word('выбраковываешь', 6),
  singular3rdPerson: Word('выбраковывает', 6),
  plural1stPerson: Word('выбраковываем', 6),
  plural2ndPerson: Word('выбраковываете', 6),
  plural3rdPerson: Word('выбраковывают', 6),
  masculinePast: Word('выбраковывал', 6),
  femininePast: Word('выбраковывала', 6),
  neuterPast: Word('выбраковывало', 6),
  pluralPast: Word('выбраковывали', 6),
  imperativeInformal: Word('выбраковывай', 6),
  imperativeFormal: Word('выбраковывайте', 6),
  imperfect: [],
};

perfectVerbs.set(выбраковывать.name.text, выбраковывать);

export { выбраковывать };