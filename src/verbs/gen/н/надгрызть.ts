import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надгрызть: PerfectVerb = {
  name: Word('надгрызть', 5),
  singular1stPerson: Word('надгрызу', 7),
  singular2ndPerson: Word('надгрызёшь', 1),
  singular3rdPerson: Word('надгрызёт', 1),
  plural1stPerson: Word('надгрызём', 1),
  plural2ndPerson: Word('надгрызёте', 1),
  plural3rdPerson: Word('надгрызут', 7),
  masculinePast: Word('надгрыз', 5),
  femininePast: Word('надгрызла', 5),
  neuterPast: Word('надгрызло', 5),
  pluralPast: Word('надгрызли', 5),
  imperativeInformal: Word('надгрызи', 7),
  imperativeFormal: Word('надгрызите', 7),
  imperfect: [],
};

perfectVerbs.set(надгрызть.name.text, надгрызть);

export { надгрызть };