import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрясти: PerfectVerb = {
  name: Word('потрясти', 7),
  singular1stPerson: Word('потрясу', 6),
  singular2ndPerson: Word('потрясёшь', 1),
  singular3rdPerson: Word('потрясёт', 1),
  plural1stPerson: Word('потрясём', 1),
  plural2ndPerson: Word('потрясёте', 8),
  plural3rdPerson: Word('потрясут', 6),
  masculinePast: Word('потряс', 4),
  femininePast: Word('потрясла', 7),
  neuterPast: Word('потрясло', 7),
  pluralPast: Word('потрясли', 7),
  imperativeInformal: Word('потряси', 6),
  imperativeFormal: Word('потрясите', 6),
  imperfect: [],
};

perfectVerbs.set(потрясти.name.text, потрясти);

export { потрясти };