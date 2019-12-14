import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натрясти: PerfectVerb = {
  name: Word('натрясти', 7),
  singular1stPerson: Word('натрясу', 6),
  singular2ndPerson: Word('натрясёшь', 1),
  singular3rdPerson: Word('натрясёт', 1),
  plural1stPerson: Word('натрясём', 1),
  plural2ndPerson: Word('натрясёте', 1),
  plural3rdPerson: Word('натрясут', 6),
  masculinePast: Word('натряс', 4),
  femininePast: Word('натрясла', 7),
  neuterPast: Word('натрясло', 7),
  pluralPast: Word('натрясли', 7),
  imperativeInformal: Word('натряси', 6),
  imperativeFormal: Word('натрясите', 6),
  imperfect: [],
};

perfectVerbs.set(натрясти.name.text, натрясти);

export { натрясти };