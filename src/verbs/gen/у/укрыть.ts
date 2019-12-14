import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрыть: PerfectVerb = {
  name: Word('укрыть', 3),
  singular1stPerson: Word('укрою', 3),
  singular2ndPerson: Word('укроешь', 3),
  singular3rdPerson: Word('укроет', 3),
  plural1stPerson: Word('укроем', 3),
  plural2ndPerson: Word('укроете', 3),
  plural3rdPerson: Word('укроют', 3),
  masculinePast: Word('укрыл', 3),
  femininePast: Word('укрыла', 3),
  neuterPast: Word('укрыло', 3),
  pluralPast: Word('укрыли', 3),
  imperativeInformal: Word('укрой', 3),
  imperativeFormal: Word('укройте', 3),
  imperfect: ['укрывать'],
};

perfectVerbs.set(укрыть.name.text, укрыть);

export { укрыть };