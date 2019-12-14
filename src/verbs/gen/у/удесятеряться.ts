import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удесятеряться: PerfectVerb = {
  name: Word('удесятеряться', 8),
  singular1stPerson: Word('удесятеряюсь', 8),
  singular2ndPerson: Word('удесятеряешься', 8),
  singular3rdPerson: Word('удесятеряется', 8),
  plural1stPerson: Word('удесятеряемся', 8),
  plural2ndPerson: Word('удесятеряетесь', 8),
  plural3rdPerson: Word('удесятеряются', 8),
  masculinePast: Word('удесятерялся', 8),
  femininePast: Word('удесятерялась', 8),
  neuterPast: Word('удесятерялось', 8),
  pluralPast: Word('удесятерялись', 8),
  imperativeInformal: Word('удесятеряйся', 8),
  imperativeFormal: Word('удесятеряйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(удесятеряться.name.text, удесятеряться);

export { удесятеряться };