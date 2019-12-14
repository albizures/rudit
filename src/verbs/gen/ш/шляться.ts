import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шляться: PerfectVerb = {
  name: Word('шляться', 2),
  singular1stPerson: Word('шляюсь', 2),
  singular2ndPerson: Word('шляешься', 2),
  singular3rdPerson: Word('шляется', 2),
  plural1stPerson: Word('шляемся', 2),
  plural2ndPerson: Word('шляетесь', 2),
  plural3rdPerson: Word('шляются', 2),
  masculinePast: Word('шлялся', 2),
  femininePast: Word('шлялась', 2),
  neuterPast: Word('шлялось', 2),
  pluralPast: Word('шлялись', 2),
  imperativeInformal: Word('шляйся', 2),
  imperativeFormal: Word('шляйтесь', 2),
  imperfect: [],
};

perfectVerbs.set(шляться.name.text, шляться);

export { шляться };