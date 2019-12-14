import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрясти: PerfectVerb = {
  name: Word('растрясти', 8),
  singular1stPerson: Word('растрясу', 7),
  singular2ndPerson: Word('растрясёшь', 7),
  singular3rdPerson: Word('растрясёт', 7),
  plural1stPerson: Word('растрясём', 7),
  plural2ndPerson: Word('растрясёте', 7),
  plural3rdPerson: Word('растрясут', 7),
  masculinePast: Word('растряс', 5),
  femininePast: Word('растрясла', 8),
  neuterPast: Word('растрясло', 8),
  pluralPast: Word('растрясли', 8),
  imperativeInformal: Word('растряси', 7),
  imperativeFormal: Word('растрясите', 7),
  imperfect: [],
};

perfectVerbs.set(растрясти.name.text, растрясти);

export { растрясти };