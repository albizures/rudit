import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противостоять: PerfectVerb = {
  name: Word('противостоять', 10),
  singular1stPerson: Word('противостою', 10),
  singular2ndPerson: Word('противостоишь', 10),
  singular3rdPerson: Word('противостоит', 10),
  plural1stPerson: Word('противостоим', 10),
  plural2ndPerson: Word('противостоите', 10),
  plural3rdPerson: Word('противостоят', 10),
  masculinePast: Word('противостоял', 10),
  femininePast: Word('противостояла', 10),
  neuterPast: Word('противостояло', 10),
  pluralPast: Word('противостояли', 10),
  imperativeInformal: Word('противостой', 9),
  imperativeFormal: Word('противостойте', 9),
  imperfect: [],
};

perfectVerbs.set(противостоять.name.text, противостоять);

export { противостоять };