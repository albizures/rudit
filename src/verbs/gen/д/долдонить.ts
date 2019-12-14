import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долдонить: PerfectVerb = {
  name: Word('долдонить', 4),
  singular1stPerson: Word('долдоню', 4),
  singular2ndPerson: Word('долдонишь', 4),
  singular3rdPerson: Word('долдонит', 4),
  plural1stPerson: Word('долдоним', 4),
  plural2ndPerson: Word('долдоните', 4),
  plural3rdPerson: Word('долдонят', 4),
  masculinePast: Word('долдонил', 4),
  femininePast: Word('долдонила', 4),
  neuterPast: Word('долдонило', 4),
  pluralPast: Word('долдонили', 4),
  imperativeInformal: Word('долдонь', 4),
  imperativeFormal: Word('долдоньте', 4),
  imperfect: [],
};

perfectVerbs.set(долдонить.name.text, долдонить);

export { долдонить };