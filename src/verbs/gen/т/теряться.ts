import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const теряться: PerfectVerb = {
  name: Word('теряться', 3),
  singular1stPerson: Word('теряюсь', 3),
  singular2ndPerson: Word('теряешься', 3),
  singular3rdPerson: Word('теряется', 3),
  plural1stPerson: Word('теряемся', 3),
  plural2ndPerson: Word('теряетесь', 3),
  plural3rdPerson: Word('теряются', 3),
  masculinePast: Word('терялся', 3),
  femininePast: Word('терялась', 3),
  neuterPast: Word('терялось', 3),
  pluralPast: Word('терялись', 3),
  imperativeInformal: Word('теряйся', 3),
  imperativeFormal: Word('теряйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(теряться.name.text, теряться);

export { теряться };