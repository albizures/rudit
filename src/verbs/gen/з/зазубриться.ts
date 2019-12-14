import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазубриться: PerfectVerb = {
  name: Word('зазубриться', 6),
  singular1stPerson: Word('зазубрюсь', 6),
  singular2ndPerson: Word('зазубришься', 6),
  singular3rdPerson: Word('зазубрится', 6),
  plural1stPerson: Word('зазубримся', 6),
  plural2ndPerson: Word('зазубритесь', 6),
  plural3rdPerson: Word('зазубрятся', 6),
  masculinePast: Word('зазубрился', 6),
  femininePast: Word('зазубрилась', 6),
  neuterPast: Word('зазубрилось', 6),
  pluralPast: Word('зазубрились', 6),
  imperativeInformal: Word('зазубрись', 6),
  imperativeFormal: Word('зазубритесь', 6),
  imperfect: [],
};

perfectVerbs.set(зазубриться.name.text, зазубриться);

export { зазубриться };