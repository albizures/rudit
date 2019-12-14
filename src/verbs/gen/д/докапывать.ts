import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докапывать: PerfectVerb = {
  name: Word('докапывать', 3),
  singular1stPerson: Word('докапываю', 3),
  singular2ndPerson: Word('докапываешь', 3),
  singular3rdPerson: Word('докапывает', 3),
  plural1stPerson: Word('докапываем', 3),
  plural2ndPerson: Word('докапываете', 3),
  plural3rdPerson: Word('докапывают', 3),
  masculinePast: Word('докапывал', 3),
  femininePast: Word('докапывала', 3),
  neuterPast: Word('докапывало', 3),
  pluralPast: Word('докапывали', 3),
  imperativeInformal: Word('докапывай', 3),
  imperativeFormal: Word('докапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(докапывать.name.text, докапывать);

export { докапывать };