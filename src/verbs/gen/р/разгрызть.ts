import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгрызть: PerfectVerb = {
  name: Word('разгрызть', 5),
  singular1stPerson: Word('разгрызу', 7),
  singular2ndPerson: Word('разгрызёшь', 1),
  singular3rdPerson: Word('разгрызёт', 1),
  plural1stPerson: Word('разгрызём', 1),
  plural2ndPerson: Word('разгрызёте', 1),
  plural3rdPerson: Word('разгрызут', 7),
  masculinePast: Word('разгрыз', 5),
  femininePast: Word('разгрызла', 5),
  neuterPast: Word('разгрызло', 5),
  pluralPast: Word('разгрызли', 5),
  imperativeInformal: Word('разгрызи', 7),
  imperativeFormal: Word('разгрызите', 7),
  imperfect: [],
};

perfectVerbs.set(разгрызть.name.text, разгрызть);

export { разгрызть };