import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измеряться: PerfectVerb = {
  name: Word('измеряться', 5),
  singular1stPerson: Word('измеряюсь', 5),
  singular2ndPerson: Word('измеряешься', 5),
  singular3rdPerson: Word('измеряется', 5),
  plural1stPerson: Word('измеряемся', 5),
  plural2ndPerson: Word('измеряетесь', 5),
  plural3rdPerson: Word('измеряются', 5),
  masculinePast: Word('измерялся', 5),
  femininePast: Word('измерялась', 5),
  neuterPast: Word('измерялось', 5),
  pluralPast: Word('измерялись', 5),
  imperativeInformal: Word('измеряйся', 5),
  imperativeFormal: Word('измеряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(измеряться.name.text, измеряться);

export { измеряться };