import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const округляться: PerfectVerb = {
  name: Word('округляться', 6),
  singular1stPerson: Word('округляюсь', 6),
  singular2ndPerson: Word('округляешься', 6),
  singular3rdPerson: Word('округляется', 6),
  plural1stPerson: Word('округляемся', 6),
  plural2ndPerson: Word('округляетесь', 6),
  plural3rdPerson: Word('округляются', 6),
  masculinePast: Word('округлялся', 6),
  femininePast: Word('округлялась', 6),
  neuterPast: Word('округлялось', 6),
  pluralPast: Word('округлялись', 6),
  imperativeInformal: Word('округляйся', 6),
  imperativeFormal: Word('округляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(округляться.name.text, округляться);

export { округляться };