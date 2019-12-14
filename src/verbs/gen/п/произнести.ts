import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const произнести: PerfectVerb = {
  name: Word('произнести', 9),
  singular1stPerson: Word('произнесу', 8),
  singular2ndPerson: Word('произнесёшь', 8),
  singular3rdPerson: Word('произнесёт', 8),
  plural1stPerson: Word('произнесём', 8),
  plural2ndPerson: Word('произнесёте', 8),
  plural3rdPerson: Word('произнесут', 8),
  masculinePast: Word('произнёс', 6),
  femininePast: Word('произнесла', 9),
  neuterPast: Word('произнесло', 9),
  pluralPast: Word('произнесли', 9),
  imperativeInformal: Word('произнеси', 8),
  imperativeFormal: Word('произнесите', 8),
  imperfect: ['произносить'],
};

perfectVerbs.set(произнести.name.text, произнести);

export { произнести };