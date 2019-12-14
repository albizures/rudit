import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преподнести: PerfectVerb = {
  name: Word('преподнести', 10),
  singular1stPerson: Word('преподнесу', 9),
  singular2ndPerson: Word('преподнесёшь', 9),
  singular3rdPerson: Word('преподнесёт', 9),
  plural1stPerson: Word('преподнесём', 9),
  plural2ndPerson: Word('преподнесёте', 9),
  plural3rdPerson: Word('преподнесут', 9),
  masculinePast: Word('преподнёс', 7),
  femininePast: Word('преподнесла', 10),
  neuterPast: Word('преподнесло', 10),
  pluralPast: Word('преподнесли', 10),
  imperativeInformal: Word('преподнеси', 9),
  imperativeFormal: Word('преподнесите', 9),
  imperfect: [],
};

perfectVerbs.set(преподнести.name.text, преподнести);

export { преподнести };