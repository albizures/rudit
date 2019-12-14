import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const серебриться: PerfectVerb = {
  name: Word('серебриться', 6),
  singular1stPerson: Word('серебрюсь', 6),
  singular2ndPerson: Word('серебришься', 6),
  singular3rdPerson: Word('серебрится', 6),
  plural1stPerson: Word('серебримся', 6),
  plural2ndPerson: Word('серебритесь', 6),
  plural3rdPerson: Word('серебрятся', 6),
  masculinePast: Word('серебрился', 6),
  femininePast: Word('серебрилась', 6),
  neuterPast: Word('серебрилось', 6),
  pluralPast: Word('серебрились', 6),
  imperativeInformal: Word('серебрись', 6),
  imperativeFormal: Word('серебритесь', 6),
  imperfect: [],
};

perfectVerbs.set(серебриться.name.text, серебриться);

export { серебриться };