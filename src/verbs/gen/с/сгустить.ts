import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгустить: PerfectVerb = {
  name: Word('сгустить', 5),
  singular1stPerson: Word('сгущу', 4),
  singular2ndPerson: Word('сгустишь', 5),
  singular3rdPerson: Word('сгустит', 5),
  plural1stPerson: Word('сгустим', 5),
  plural2ndPerson: Word('сгустите', 5),
  plural3rdPerson: Word('сгустят', 5),
  masculinePast: Word('сгустил', 5),
  femininePast: Word('сгустила', 5),
  neuterPast: Word('сгустило', 5),
  pluralPast: Word('сгустили', 5),
  imperativeInformal: Word('сгусти', 5),
  imperativeFormal: Word('сгустите', 5),
  imperfect: [],
};

perfectVerbs.set(сгустить.name.text, сгустить);

export { сгустить };