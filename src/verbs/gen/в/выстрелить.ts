import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстрелить: PerfectVerb = {
  name: Word('выстрелить', 1),
  singular1stPerson: Word('выстрелю', 1),
  singular2ndPerson: Word('выстрелишь', 1),
  singular3rdPerson: Word('выстрелит', 1),
  plural1stPerson: Word('выстрелим', 1),
  plural2ndPerson: Word('выстрелите', 1),
  plural3rdPerson: Word('выстрелят', 1),
  masculinePast: Word('выстрелил', 1),
  femininePast: Word('выстрелила', 1),
  neuterPast: Word('выстрелило', 1),
  pluralPast: Word('выстрелили', 1),
  imperativeInformal: Word('выстрели', 1),
  imperativeFormal: Word('выстрелите', 1),
  imperfect: ['стрелять'],
};

perfectVerbs.set(выстрелить.name.text, выстрелить);

export { выстрелить };