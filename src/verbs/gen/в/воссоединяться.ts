import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоединяться: PerfectVerb = {
  name: Word('воссоединяться', 9),
  singular1stPerson: Word('воссоединяюсь', 9),
  singular2ndPerson: Word('воссоединяешься', 9),
  singular3rdPerson: Word('воссоединяется', 9),
  plural1stPerson: Word('воссоединяемся', 9),
  plural2ndPerson: Word('воссоединяетесь', 9),
  plural3rdPerson: Word('воссоединяются', 9),
  masculinePast: Word('воссоединялся', 9),
  femininePast: Word('воссоединялась', 9),
  neuterPast: Word('воссоединялось', 9),
  pluralPast: Word('воссоединялись', 9),
  imperativeInformal: Word('воссоединяйся', 9),
  imperativeFormal: Word('воссоединяйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(воссоединяться.name.text, воссоединяться);

export { воссоединяться };