import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соотнести: PerfectVerb = {
  name: Word('соотнести', 8),
  singular1stPerson: Word('соотнесу', 7),
  singular2ndPerson: Word('соотнесёшь', 7),
  singular3rdPerson: Word('соотнесёт', 7),
  plural1stPerson: Word('соотнесём', 7),
  plural2ndPerson: Word('соотнесёте', 7),
  plural3rdPerson: Word('соотнесут', 7),
  masculinePast: Word('соотнёс', 5),
  femininePast: Word('соотнесла', 8),
  neuterPast: Word('соотнесло', 8),
  pluralPast: Word('соотнесли', 8),
  imperativeInformal: Word('соотнеси', 7),
  imperativeFormal: Word('соотнесите', 7),
  imperfect: [],
};

perfectVerbs.set(соотнести.name.text, соотнести);

export { соотнести };