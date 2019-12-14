import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const класть: PerfectVerb = {
  name: Word('класть', 2),
  singular1stPerson: Word('кладу', 2),
  singular2ndPerson: Word('кладёшь', 2),
  singular3rdPerson: Word('кладёт', 2),
  plural1stPerson: Word('кладём', 2),
  plural2ndPerson: Word('кладёте', 2),
  plural3rdPerson: Word('кладут', 2),
  masculinePast: Word('клал', 2),
  femininePast: Word('клала', 2),
  neuterPast: Word('клало', 2),
  pluralPast: Word('клали', 2),
  imperativeInformal: Word('Клади', 2),
  imperativeFormal: Word('Кладите', 2),
  imperfect: ['положить'],
};

perfectVerbs.set(класть.name.text, класть);

export { класть };