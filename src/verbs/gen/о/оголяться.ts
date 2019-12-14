import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оголяться: PerfectVerb = {
  name: Word('оголяться', 4),
  singular1stPerson: Word('оголяюсь', 4),
  singular2ndPerson: Word('оголяешься', 4),
  singular3rdPerson: Word('оголяется', 4),
  plural1stPerson: Word('оголяемся', 4),
  plural2ndPerson: Word('оголяетесь', 4),
  plural3rdPerson: Word('оголяются', 4),
  masculinePast: Word('оголялся', 4),
  femininePast: Word('оголялась', 4),
  neuterPast: Word('оголялось', 4),
  pluralPast: Word('оголялись', 4),
  imperativeInformal: Word('оголяйся', 4),
  imperativeFormal: Word('оголяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(оголяться.name.text, оголяться);

export { оголяться };