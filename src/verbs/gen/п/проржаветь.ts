import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проржаветь: PerfectVerb = {
  name: Word('проржаветь', 7),
  singular1stPerson: Word('проржавею', 7),
  singular2ndPerson: Word('проржавеешь', 7),
  singular3rdPerson: Word('проржавеет', 7),
  plural1stPerson: Word('проржавеем', 7),
  plural2ndPerson: Word('проржавеете', 7),
  plural3rdPerson: Word('проржавеют', 7),
  masculinePast: Word('проржавел', 7),
  femininePast: Word('проржавела', 7),
  neuterPast: Word('проржавело', 7),
  pluralPast: Word('проржавели', 7),
  imperativeInformal: Word('проржавей', 7),
  imperativeFormal: Word('проржавейте', 7),
  imperfect: [],
};

perfectVerbs.set(проржаветь.name.text, проржаветь);

export { проржаветь };