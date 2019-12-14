import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заржаветь: PerfectVerb = {
  name: Word('заржаветь', 6),
  singular1stPerson: Word('заржавею', 6),
  singular2ndPerson: Word('заржавеешь', 6),
  singular3rdPerson: Word('заржавеет', 6),
  plural1stPerson: Word('заржавеем', 6),
  plural2ndPerson: Word('заржавеете', 6),
  plural3rdPerson: Word('заржавеют', 6),
  masculinePast: Word('заржавел', 6),
  femininePast: Word('заржавела', 6),
  neuterPast: Word('заржавело', 6),
  pluralPast: Word('заржавели', 6),
  imperativeInformal: Word('заржавей', 6),
  imperativeFormal: Word('заржавейте', 6),
  imperfect: [],
};

perfectVerbs.set(заржаветь.name.text, заржаветь);

export { заржаветь };