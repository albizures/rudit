import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгрызть: PerfectVerb = {
  name: Word('выгрызть', 1),
  singular1stPerson: Word('выгрызу', 1),
  singular2ndPerson: Word('выгрызешь', 1),
  singular3rdPerson: Word('выгрызет', 1),
  plural1stPerson: Word('выгрызем', 1),
  plural2ndPerson: Word('выгрызете', 1),
  plural3rdPerson: Word('выгрызут', 1),
  masculinePast: Word('выгрыз', 1),
  femininePast: Word('выгрызла', 1),
  neuterPast: Word('выгрызло', 1),
  pluralPast: Word('выгрызли', 1),
  imperativeInformal: Word('выгрызи', 1),
  imperativeFormal: Word('выгрызите', 1),
  imperfect: [],
};

perfectVerbs.set(выгрызть.name.text, выгрызть);

export { выгрызть };