import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбодрять: PerfectVerb = {
  name: Word('подбодрять', 7),
  singular1stPerson: Word('подбодряю', 7),
  singular2ndPerson: Word('подбодряешь', 7),
  singular3rdPerson: Word('подбодряет', 7),
  plural1stPerson: Word('подбодряем', 7),
  plural2ndPerson: Word('подбодряете', 7),
  plural3rdPerson: Word('подбодряют', 7),
  masculinePast: Word('подбодрял', 7),
  femininePast: Word('подбодряла', 7),
  neuterPast: Word('подбодряло', 7),
  pluralPast: Word('подбодряли', 7),
  imperativeInformal: Word('подбодряй', 7),
  imperativeFormal: Word('подбодряйте', 7),
  imperfect: [],
};

perfectVerbs.set(подбодрять.name.text, подбодрять);

export { подбодрять };