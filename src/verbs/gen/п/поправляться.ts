import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поправляться: PerfectVerb = {
  name: Word('поправляться', 7),
  singular1stPerson: Word('поправляюсь', 7),
  singular2ndPerson: Word('поправляешься', 7),
  singular3rdPerson: Word('поправляется', 7),
  plural1stPerson: Word('поправляемся', 7),
  plural2ndPerson: Word('поправляетесь', 7),
  plural3rdPerson: Word('поправляются', 7),
  masculinePast: Word('поправлялся', 7),
  femininePast: Word('поправлялась', 7),
  neuterPast: Word('поправлялось', 7),
  pluralPast: Word('поправлялись', 7),
  imperativeInformal: Word('поправляйся', 7),
  imperativeFormal: Word('поправляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(поправляться.name.text, поправляться);

export { поправляться };