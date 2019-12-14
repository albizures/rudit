import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскусить: PerfectVerb = {
  name: Word('раскусить', 6),
  singular1stPerson: Word('раскушу', 6),
  singular2ndPerson: Word('раскусишь', 4),
  singular3rdPerson: Word('раскусит', 4),
  plural1stPerson: Word('раскусим', 4),
  plural2ndPerson: Word('раскусите', 4),
  plural3rdPerson: Word('раскусят', 4),
  masculinePast: Word('раскусил', 6),
  femininePast: Word('раскусила', 6),
  neuterPast: Word('раскусило', 6),
  pluralPast: Word('раскусили', 6),
  imperativeInformal: Word('раскуси', 6),
  imperativeFormal: Word('раскусите', 6),
  imperfect: [],
};

perfectVerbs.set(раскусить.name.text, раскусить);

export { раскусить };