import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выключить: PerfectVerb = {
  name: Word('выключить', 1),
  singular1stPerson: Word('выключу', 1),
  singular2ndPerson: Word('выключишь', 1),
  singular3rdPerson: Word('выключит', 1),
  plural1stPerson: Word('выключим', 1),
  plural2ndPerson: Word('выключите', 1),
  plural3rdPerson: Word('выключат', 1),
  masculinePast: Word('выключил', 1),
  femininePast: Word('выключила', 1),
  neuterPast: Word('выключило', 1),
  pluralPast: Word('выключили', 1),
  imperativeInformal: Word('выключи', 1),
  imperativeFormal: Word('выключите', 1),
  imperfect: ['выключать'],
};

perfectVerbs.set(выключить.name.text, выключить);

export { выключить };