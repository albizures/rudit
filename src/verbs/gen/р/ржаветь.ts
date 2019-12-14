import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ржаветь: PerfectVerb = {
  name: Word('ржаветь', 4),
  singular1stPerson: Word('ржавею', 4),
  singular2ndPerson: Word('ржавеешь', 4),
  singular3rdPerson: Word('ржавеет', 4),
  plural1stPerson: Word('ржавеем', 4),
  plural2ndPerson: Word('ржавеете', 4),
  plural3rdPerson: Word('ржавеют', 4),
  masculinePast: Word('ржавел', 4),
  femininePast: Word('ржавела', 4),
  neuterPast: Word('ржавело', 4),
  pluralPast: Word('ржавели', 4),
  imperativeInformal: Word('ржавей', 4),
  imperativeFormal: Word('ржавейте', 4),
  imperfect: [],
};

perfectVerbs.set(ржаветь.name.text, ржаветь);

export { ржаветь };