import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умывать: PerfectVerb = {
  name: Word('умывать', 4),
  singular1stPerson: Word('умываю', 4),
  singular2ndPerson: Word('умываешь', 4),
  singular3rdPerson: Word('умывает', 4),
  plural1stPerson: Word('умываем', 4),
  plural2ndPerson: Word('умываете', 4),
  plural3rdPerson: Word('умывают', 4),
  masculinePast: Word('умывал', 4),
  femininePast: Word('умывала', 4),
  neuterPast: Word('умывало', 4),
  pluralPast: Word('умывали', 4),
  imperativeInformal: Word('умывай', 4),
  imperativeFormal: Word('умывайте', 4),
  imperfect: [],
};

perfectVerbs.set(умывать.name.text, умывать);

export { умывать };