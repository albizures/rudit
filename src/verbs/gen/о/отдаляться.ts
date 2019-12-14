import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдаляться: PerfectVerb = {
  name: Word('отдаляться', 5),
  singular1stPerson: Word('отдаляюсь', 5),
  singular2ndPerson: Word('отдаляешься', 5),
  singular3rdPerson: Word('отдаляется', 5),
  plural1stPerson: Word('отдаляемся', 5),
  plural2ndPerson: Word('отдаляетесь', 5),
  plural3rdPerson: Word('отдаляются', 5),
  masculinePast: Word('отдалялся', 5),
  femininePast: Word('отдалялась', 5),
  neuterPast: Word('отдалялось', 5),
  pluralPast: Word('отдалялись', 5),
  imperativeInformal: Word('отдаляйся', 5),
  imperativeFormal: Word('отдаляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отдаляться.name.text, отдаляться);

export { отдаляться };