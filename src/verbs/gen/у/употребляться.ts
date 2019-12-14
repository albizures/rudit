import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const употребляться: PerfectVerb = {
  name: Word('употребляться', 8),
  singular1stPerson: Word('употребляюсь', 8),
  singular2ndPerson: Word('употребляешься', 8),
  singular3rdPerson: Word('употребляется', 8),
  plural1stPerson: Word('употребляемся', 8),
  plural2ndPerson: Word('употребляетесь', 8),
  plural3rdPerson: Word('употребляются', 8),
  masculinePast: Word('употреблялся', 8),
  femininePast: Word('употреблялась', 8),
  neuterPast: Word('употреблялось', 8),
  pluralPast: Word('употреблялись', 8),
  imperativeInformal: Word('употребляйся', 8),
  imperativeFormal: Word('употребляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(употребляться.name.text, употребляться);

export { употребляться };