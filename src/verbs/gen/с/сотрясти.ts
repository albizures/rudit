import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сотрясти: PerfectVerb = {
  name: Word('сотрясти', 7),
  singular1stPerson: Word('сотрясу', 6),
  singular2ndPerson: Word('сотрясёшь', 6),
  singular3rdPerson: Word('сотрясёт', 6),
  plural1stPerson: Word('сотрясём', 6),
  plural2ndPerson: Word('сотрясёте', 6),
  plural3rdPerson: Word('сотрясут', 6),
  masculinePast: Word('сотряс', 4),
  femininePast: Word('сотрясла', 7),
  neuterPast: Word('сотрясло', 7),
  pluralPast: Word('сотрясли', 7),
  imperativeInformal: Word('сотряси', 6),
  imperativeFormal: Word('сотрясите', 6),
  imperfect: [],
};

perfectVerbs.set(сотрясти.name.text, сотрясти);

export { сотрясти };