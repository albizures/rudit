import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переламываться: PerfectVerb = {
  name: Word('переламываться', 5),
  singular1stPerson: Word('переламываюсь', 5),
  singular2ndPerson: Word('переламываешься', 5),
  singular3rdPerson: Word('переламывается', 5),
  plural1stPerson: Word('переламываемся', 5),
  plural2ndPerson: Word('переламываетесь', 5),
  plural3rdPerson: Word('переламываются', 5),
  masculinePast: Word('переламывался', 5),
  femininePast: Word('переламывалась', 5),
  neuterPast: Word('переламывалось', 5),
  pluralPast: Word('переламывались', 5),
  imperativeInformal: Word('переламывайся', 5),
  imperativeFormal: Word('переламывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(переламываться.name.text, переламываться);

export { переламываться };