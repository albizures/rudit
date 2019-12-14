import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переписываться: PerfectVerb = {
  name: Word('переписываться', 5),
  singular1stPerson: Word('переписываюсь', 5),
  singular2ndPerson: Word('переписываешься', 5),
  singular3rdPerson: Word('переписывается', 5),
  plural1stPerson: Word('переписываемся', 5),
  plural2ndPerson: Word('переписываетесь', 5),
  plural3rdPerson: Word('переписываются', 5),
  masculinePast: Word('переписывался', 5),
  femininePast: Word('переписывалась', 5),
  neuterPast: Word('переписывалось', 5),
  pluralPast: Word('переписывались', 5),
  imperativeInformal: Word('переписывайся', 5),
  imperativeFormal: Word('переписывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(переписываться.name.text, переписываться);

export { переписываться };