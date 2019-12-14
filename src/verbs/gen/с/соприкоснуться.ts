import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соприкоснуться: PerfectVerb = {
  name: Word('соприкоснуться', 9),
  singular1stPerson: Word('соприкоснусь', 9),
  singular2ndPerson: Word('соприкоснёшься', 4),
  singular3rdPerson: Word('соприкоснётся', 4),
  plural1stPerson: Word('соприкоснёмся', 4),
  plural2ndPerson: Word('соприкоснётесь', 11),
  plural3rdPerson: Word('соприкоснутся', 9),
  masculinePast: Word('соприкоснулся', 9),
  femininePast: Word('соприкоснулась', 9),
  neuterPast: Word('соприкоснулось', 9),
  pluralPast: Word('соприкоснулись', 9),
  imperativeInformal: Word('соприкоснись', 9),
  imperativeFormal: Word('соприкоснитесь', 9),
  imperfect: [],
};

perfectVerbs.set(соприкоснуться.name.text, соприкоснуться);

export { соприкоснуться };