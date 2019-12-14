import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрыть: PerfectVerb = {
  name: Word('перекрыть', 6),
  singular1stPerson: Word('перекрою', 6),
  singular2ndPerson: Word('перекроешь', 6),
  singular3rdPerson: Word('перекроет', 6),
  plural1stPerson: Word('перекроем', 6),
  plural2ndPerson: Word('перекроете', 6),
  plural3rdPerson: Word('перекроют', 6),
  masculinePast: Word('перекрыл', 6),
  femininePast: Word('перекрыла', 6),
  neuterPast: Word('перекрыло', 6),
  pluralPast: Word('перекрыли', 6),
  imperativeInformal: Word('перекрой', 6),
  imperativeFormal: Word('перекройте', 6),
  imperfect: [],
};

perfectVerbs.set(перекрыть.name.text, перекрыть);

export { перекрыть };