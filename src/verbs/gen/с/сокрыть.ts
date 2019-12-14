import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сокрыть: PerfectVerb = {
  name: Word('сокрыть', 4),
  singular1stPerson: Word('сокрою', 4),
  singular2ndPerson: Word('сокроешь', 4),
  singular3rdPerson: Word('сокроет', 4),
  plural1stPerson: Word('сокроем', 4),
  plural2ndPerson: Word('сокроете', 4),
  plural3rdPerson: Word('сокроют', 4),
  masculinePast: Word('сокрыл', 4),
  femininePast: Word('сокрыла', 4),
  neuterPast: Word('сокрыло', 4),
  pluralPast: Word('сокрыли', 4),
  imperativeInformal: Word('сокрой', 4),
  imperativeFormal: Word('сокройте', 4),
  imperfect: [],
};

perfectVerbs.set(сокрыть.name.text, сокрыть);

export { сокрыть };