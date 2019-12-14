import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переделываться: PerfectVerb = {
  name: Word('переделываться', 5),
  singular1stPerson: Word('переделываюсь', 5),
  singular2ndPerson: Word('переделываешься', 5),
  singular3rdPerson: Word('переделывается', 5),
  plural1stPerson: Word('переделываемся', 5),
  plural2ndPerson: Word('переделываетесь', 5),
  plural3rdPerson: Word('переделываются', 5),
  masculinePast: Word('переделывался', 5),
  femininePast: Word('переделывалась', 5),
  neuterPast: Word('переделывалось', 5),
  pluralPast: Word('переделывались', 5),
  imperativeInformal: Word('переделывайся', 5),
  imperativeFormal: Word('переделывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(переделываться.name.text, переделываться);

export { переделываться };