import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокусить: PerfectVerb = {
  name: Word('прокусить', 6),
  singular1stPerson: Word('прокушу', 6),
  singular2ndPerson: Word('прокусишь', 4),
  singular3rdPerson: Word('прокусит', 4),
  plural1stPerson: Word('прокусим', 4),
  plural2ndPerson: Word('прокусите', 4),
  plural3rdPerson: Word('прокусят', 4),
  masculinePast: Word('прокусил', 6),
  femininePast: Word('прокусила', 6),
  neuterPast: Word('прокусило', 6),
  pluralPast: Word('прокусили', 6),
  imperativeInformal: Word('прокуси', 6),
  imperativeFormal: Word('прокусите', 6),
  imperfect: [],
};

perfectVerbs.set(прокусить.name.text, прокусить);

export { прокусить };