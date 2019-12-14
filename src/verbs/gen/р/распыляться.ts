import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распыляться: PerfectVerb = {
  name: Word('распыляться', 6),
  singular1stPerson: Word('распыляюсь', 6),
  singular2ndPerson: Word('распыляешься', 6),
  singular3rdPerson: Word('распыляется', 6),
  plural1stPerson: Word('распыляемся', 6),
  plural2ndPerson: Word('распыляетесь', 6),
  plural3rdPerson: Word('распыляются', 6),
  masculinePast: Word('распылялся', 6),
  femininePast: Word('распылялась', 6),
  neuterPast: Word('распылялось', 6),
  pluralPast: Word('распылялись', 6),
  imperativeInformal: Word('распыляйся', 6),
  imperativeFormal: Word('распыляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(распыляться.name.text, распыляться);

export { распыляться };