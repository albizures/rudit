import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переглядываться: PerfectVerb = {
  name: Word('переглядываться', 6),
  singular1stPerson: Word('переглядываюсь', 6),
  singular2ndPerson: Word('переглядываешься', 6),
  singular3rdPerson: Word('переглядывается', 6),
  plural1stPerson: Word('переглядываемся', 6),
  plural2ndPerson: Word('переглядываетесь', 6),
  plural3rdPerson: Word('переглядываются', 6),
  masculinePast: Word('переглядывался', 6),
  femininePast: Word('переглядывалась', 6),
  neuterPast: Word('переглядывалось', 6),
  pluralPast: Word('переглядывались', 6),
  imperativeInformal: Word('переглядывайся', 6),
  imperativeFormal: Word('переглядывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(переглядываться.name.text, переглядываться);

export { переглядываться };