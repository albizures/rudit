import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затаптывать: PerfectVerb = {
  name: Word('затаптывать', 3),
  singular1stPerson: Word('затаптываю', 3),
  singular2ndPerson: Word('затаптываешь', 3),
  singular3rdPerson: Word('затаптывает', 3),
  plural1stPerson: Word('затаптываем', 3),
  plural2ndPerson: Word('затаптываете', 3),
  plural3rdPerson: Word('затаптывают', 3),
  masculinePast: Word('затаптывал', 3),
  femininePast: Word('затаптывала', 3),
  neuterPast: Word('затаптывало', 3),
  pluralPast: Word('затаптывали', 3),
  imperativeInformal: Word('затаптывай', 3),
  imperativeFormal: Word('затаптывайте', 3),
  imperfect: [],
};

perfectVerbs.set(затаптывать.name.text, затаптывать);

export { затаптывать };