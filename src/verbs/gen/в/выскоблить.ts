import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскоблить: PerfectVerb = {
  name: Word('выскоблить', 1),
  singular1stPerson: Word('выскоблю', 1),
  singular2ndPerson: Word('выскоблишь', 1),
  singular3rdPerson: Word('выскоблит', 1),
  plural1stPerson: Word('выскоблим', 1),
  plural2ndPerson: Word('выскоблите', 1),
  plural3rdPerson: Word('выскоблят', 1),
  masculinePast: Word('выскоблил', 1),
  femininePast: Word('выскоблила', 1),
  neuterPast: Word('выскоблило', 1),
  pluralPast: Word('выскоблили', 1),
  imperativeInformal: Word('выскобли', 1),
  imperativeFormal: Word('выскоблите', 1),
  imperfect: [],
};

perfectVerbs.set(выскоблить.name.text, выскоблить);

export { выскоблить };