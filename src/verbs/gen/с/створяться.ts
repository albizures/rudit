import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const створяться: PerfectVerb = {
  name: Word('створяться', 5),
  singular1stPerson: Word('створяюсь', 5),
  singular2ndPerson: Word('створяешься', 5),
  singular3rdPerson: Word('створяется', 5),
  plural1stPerson: Word('створяемся', 5),
  plural2ndPerson: Word('створяетесь', 5),
  plural3rdPerson: Word('створяются', 5),
  masculinePast: Word('створялся', 5),
  femininePast: Word('створялась', 5),
  neuterPast: Word('створялось', 5),
  pluralPast: Word('створялись', 5),
  imperativeInformal: Word('створяйся', 5),
  imperativeFormal: Word('створяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(створяться.name.text, створяться);

export { створяться };