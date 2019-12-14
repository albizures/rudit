import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрыть: PerfectVerb = {
  name: Word('скрыть', 3),
  singular1stPerson: Word('скрою', 3),
  singular2ndPerson: Word('скроешь', 3),
  singular3rdPerson: Word('скроет', 3),
  plural1stPerson: Word('скроем', 3),
  plural2ndPerson: Word('скроете', 3),
  plural3rdPerson: Word('скроют', 3),
  masculinePast: Word('скрыл', 3),
  femininePast: Word('скрыла', 3),
  neuterPast: Word('скрыло', 3),
  pluralPast: Word('скрыли', 3),
  imperativeInformal: Word('скрой', 3),
  imperativeFormal: Word('скройте', 3),
  imperfect: ['скрывать'],
};

perfectVerbs.set(скрыть.name.text, скрыть);

export { скрыть };