import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчленяться: PerfectVerb = {
  name: Word('расчленяться', 7),
  singular1stPerson: Word('расчленяюсь', 7),
  singular2ndPerson: Word('расчленяешься', 7),
  singular3rdPerson: Word('расчленяется', 7),
  plural1stPerson: Word('расчленяемся', 7),
  plural2ndPerson: Word('расчленяетесь', 7),
  plural3rdPerson: Word('расчленяются', 7),
  masculinePast: Word('расчленялся', 7),
  femininePast: Word('расчленялась', 7),
  neuterPast: Word('расчленялось', 7),
  pluralPast: Word('расчленялись', 7),
  imperativeInformal: Word('расчленяйся', 7),
  imperativeFormal: Word('расчленяйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расчленяться.name.text, расчленяться);

export { расчленяться };