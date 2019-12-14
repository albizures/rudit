import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стрясти: PerfectVerb = {
  name: Word('стрясти', 6),
  singular1stPerson: Word('стрясу', 5),
  singular2ndPerson: Word('стрясёшь', 3),
  singular3rdPerson: Word('стрясёт', 3),
  plural1stPerson: Word('стрясём', 3),
  plural2ndPerson: Word('стрясёте', 7),
  plural3rdPerson: Word('стрясут', 5),
  masculinePast: Word('стряс', 3),
  femininePast: Word('стрясла', 6),
  neuterPast: Word('стрясло', 6),
  pluralPast: Word('стрясли', 6),
  imperativeInformal: Word('стряси', 5),
  imperativeFormal: Word('стрясите', 5),
  imperfect: [],
};

perfectVerbs.set(стрясти.name.text, стрясти);

export { стрясти };