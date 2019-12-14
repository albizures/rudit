import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обанкротиться: PerfectVerb = {
  name: Word('обанкротиться', 6),
  singular1stPerson: Word('обанкрочусь', 6),
  singular2ndPerson: Word('обанкротишься', 6),
  singular3rdPerson: Word('обанкротится', 6),
  plural1stPerson: Word('обанкротимся', 6),
  plural2ndPerson: Word('обанкротитесь', 6),
  plural3rdPerson: Word('обанкротятся', 6),
  masculinePast: Word('обанкротился', 6),
  femininePast: Word('обанкротилась', 6),
  neuterPast: Word('обанкротилось', 6),
  pluralPast: Word('обанкротились', 6),
  imperativeInformal: Word('обанкроться', 6),
  imperativeFormal: Word('обанкротьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обанкротиться.name.text, обанкротиться);

export { обанкротиться };