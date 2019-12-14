import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрыть: PerfectVerb = {
  name: Word('прикрыть', 5),
  singular1stPerson: Word('прикрою', 5),
  singular2ndPerson: Word('прикроешь', 5),
  singular3rdPerson: Word('прикроет', 5),
  plural1stPerson: Word('прикроем', 5),
  plural2ndPerson: Word('прикроете', 5),
  plural3rdPerson: Word('прикроют', 5),
  masculinePast: Word('прикрыл', 5),
  femininePast: Word('прикрыла', 5),
  neuterPast: Word('прикрыло', 5),
  pluralPast: Word('прикрыли', 5),
  imperativeInformal: Word('прикрой', 5),
  imperativeFormal: Word('прикройте', 5),
  imperfect: ['прикрывать'],
};

perfectVerbs.set(прикрыть.name.text, прикрыть);

export { прикрыть };