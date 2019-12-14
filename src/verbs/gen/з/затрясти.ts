import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрясти: PerfectVerb = {
  name: Word('затрясти', 7),
  singular1stPerson: Word('затрясу', 6),
  singular2ndPerson: Word('затрясёшь', 1),
  singular3rdPerson: Word('затрясёт', 1),
  plural1stPerson: Word('затрясём', 1),
  plural2ndPerson: Word('затрясёте', 1),
  plural3rdPerson: Word('затрясут', 6),
  masculinePast: Word('затряс', 4),
  femininePast: Word('затрясла', 7),
  neuterPast: Word('затрясло', 7),
  pluralPast: Word('затрясли', 7),
  imperativeInformal: Word('затряси', 6),
  imperativeFormal: Word('затрясите', 6),
  imperfect: [],
};

perfectVerbs.set(затрясти.name.text, затрясти);

export { затрясти };