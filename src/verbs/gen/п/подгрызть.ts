import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгрызть: PerfectVerb = {
  name: Word('подгрызть', 5),
  singular1stPerson: Word('подгрызу', 7),
  singular2ndPerson: Word('подгрызёшь', 7),
  singular3rdPerson: Word('подгрызёт', 7),
  plural1stPerson: Word('подгрызём', 7),
  plural2ndPerson: Word('подгрызёте', 7),
  plural3rdPerson: Word('подгрызут', 7),
  masculinePast: Word('подгрыз', 5),
  femininePast: Word('подгрызла', 5),
  neuterPast: Word('подгрызло', 5),
  pluralPast: Word('подгрызли', 5),
  imperativeInformal: Word('подгрызи', 7),
  imperativeFormal: Word('подгрызите', 7),
  imperfect: [],
};

perfectVerbs.set(подгрызть.name.text, подгрызть);

export { подгрызть };