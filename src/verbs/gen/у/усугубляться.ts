import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усугубляться: PerfectVerb = {
  name: Word('усугубляться', 7),
  singular1stPerson: Word('усугубляюсь', 7),
  singular2ndPerson: Word('усугубляешься', 7),
  singular3rdPerson: Word('усугубляется', 7),
  plural1stPerson: Word('усугубляемся', 7),
  plural2ndPerson: Word('усугубляетесь', 7),
  plural3rdPerson: Word('усугубляются', 7),
  masculinePast: Word('усугублялся', 7),
  femininePast: Word('усугублялась', 7),
  neuterPast: Word('усугублялось', 7),
  pluralPast: Word('усугублялись', 7),
  imperativeInformal: Word('усугубляйся', 7),
  imperativeFormal: Word('усугубляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(усугубляться.name.text, усугубляться);

export { усугубляться };