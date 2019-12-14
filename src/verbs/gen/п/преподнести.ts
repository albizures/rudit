import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преподнести: PerfectVerb = {
  name: Word('преподнести', 10),
  singular1stPerson: Word('преподнесу', 9),
  singular2ndPerson: Word('преподнесёшь', 2),
  singular3rdPerson: Word('преподнесёт', 2),
  plural1stPerson: Word('преподнесём', 2),
  plural2ndPerson: Word('преподнесёте', 2),
  plural3rdPerson: Word('преподнесут', 9),
  masculinePast: Word('преподнёс', 2),
  femininePast: Word('преподнесла', 10),
  neuterPast: Word('преподнесло', 10),
  pluralPast: Word('преподнесли', 10),
  imperativeInformal: Word('преподнеси', 9),
  imperativeFormal: Word('преподнесите', 9),
  imperfect: [],
};

perfectVerbs.set(преподнести.name.text, преподнести);

export { преподнести };