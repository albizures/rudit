import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соизволить: PerfectVerb = {
  name: Word('соизволить', 5),
  singular1stPerson: Word('соизволю', 5),
  singular2ndPerson: Word('соизволишь', 5),
  singular3rdPerson: Word('соизволит', 5),
  plural1stPerson: Word('соизволим', 5),
  plural2ndPerson: Word('соизволите', 5),
  plural3rdPerson: Word('соизволят', 5),
  masculinePast: Word('соизволил', 5),
  femininePast: Word('соизволила', 5),
  neuterPast: Word('соизволило', 5),
  pluralPast: Word('соизволили', 5),
  imperativeInformal: Word('соизволь', 5),
  imperativeFormal: Word('соизвольте', 5),
  imperfect: [],
};

perfectVerbs.set(соизволить.name.text, соизволить);

export { соизволить };