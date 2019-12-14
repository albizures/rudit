import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикусить: PerfectVerb = {
  name: Word('прикусить', 6),
  singular1stPerson: Word('прикушу', 6),
  singular2ndPerson: Word('прикусишь', 4),
  singular3rdPerson: Word('прикусит', 4),
  plural1stPerson: Word('прикусим', 4),
  plural2ndPerson: Word('прикусите', 4),
  plural3rdPerson: Word('прикусят', 4),
  masculinePast: Word('прикусил', 6),
  femininePast: Word('прикусила', 6),
  neuterPast: Word('прикусило', 6),
  pluralPast: Word('прикусили', 6),
  imperativeInformal: Word('прикуси', 6),
  imperativeFormal: Word('прикусите', 6),
  imperfect: [],
};

perfectVerbs.set(прикусить.name.text, прикусить);

export { прикусить };