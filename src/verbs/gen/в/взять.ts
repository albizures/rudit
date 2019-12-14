import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взять: PerfectVerb = {
  name: Word('взять', 2),
  singular1stPerson: Word('возьму', 5),
  singular2ndPerson: Word('возьмёшь', 5),
  singular3rdPerson: Word('возьмёт', 5),
  plural1stPerson: Word('возьмём', 5),
  plural2ndPerson: Word('возьмёте', 5),
  plural3rdPerson: Word('возьмут', 5),
  masculinePast: Word('взял', 2),
  femininePast: Word('взяла', 4),
  neuterPast: Word('взяло,взяло'', 2),
  pluralPast: Word('взяли', 2),
  imperativeInformal: Word('возьми', 5),
  imperativeFormal: Word('возьмите', 5),
  imperfect: ['брать'],
};

perfectVerbs.set(взять.name.text, взять);

export { взять };