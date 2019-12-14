import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздаться: PerfectVerb = {
  name: Word('раздаться', 4),
  singular1stPerson: Word('раздамся', 4),
  singular2ndPerson: Word('раздашься', 4),
  singular3rdPerson: Word('раздастся', 4),
  plural1stPerson: Word('раздадимся', 6),
  plural2ndPerson: Word('раздадитесь', 6),
  plural3rdPerson: Word('раздадутся', 6),
  masculinePast: Word('раздался,раздался'', 4),
  femininePast: Word('раздалась', 6),
  neuterPast: Word('раздалось,раздало'сь', 6),
  pluralPast: Word('раздались', 6),
  imperativeInformal: Word('раздайся', 4),
  imperativeFormal: Word('раздайтесь', 4),
  imperfect: ['раздаваться'],
};

perfectVerbs.set(раздаться.name.text, раздаться);

export { раздаться };