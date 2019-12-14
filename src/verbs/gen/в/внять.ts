import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внять: PerfectVerb = {
  name: Word('внять', 2),
  singular1stPerson: Word('-', -1),
  singular2ndPerson: Word('-', -1),
  singular3rdPerson: Word('-', -1),
  plural1stPerson: Word('-', -1),
  plural2ndPerson: Word('-', -1),
  plural3rdPerson: Word('-', -1),
  masculinePast: Word('внял', 2),
  femininePast: Word('вняла', 4),
  neuterPast: Word('вняло', 2),
  pluralPast: Word('вняли', 2),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(внять.name.text, внять);

export { внять };