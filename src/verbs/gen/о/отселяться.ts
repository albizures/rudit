import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отселяться: PerfectVerb = {
  name: Word('отселяться', 5),
  singular1stPerson: Word('отселяюсь', 5),
  singular2ndPerson: Word('отселяешься', 5),
  singular3rdPerson: Word('отселяется', 5),
  plural1stPerson: Word('отселяемся', 5),
  plural2ndPerson: Word('отселяетесь', 5),
  plural3rdPerson: Word('отселяются', 5),
  masculinePast: Word('отселялся', 5),
  femininePast: Word('отселялась', 5),
  neuterPast: Word('отселялось', 5),
  pluralPast: Word('отселялись', 5),
  imperativeInformal: Word('отселяйся', 5),
  imperativeFormal: Word('отселяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отселяться.name.text, отселяться);

export { отселяться };