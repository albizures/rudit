import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переволноваться: PerfectVerb = {
  name: Word('переволноваться', 10),
  singular1stPerson: Word('переволнуюсь', 8),
  singular2ndPerson: Word('переволнуешься', 8),
  singular3rdPerson: Word('переволнуется', 8),
  plural1stPerson: Word('переволнуемся', 8),
  plural2ndPerson: Word('переволнуетесь', 8),
  plural3rdPerson: Word('переволнуются', 8),
  masculinePast: Word('переволновался', 10),
  femininePast: Word('переволновалась', 10),
  neuterPast: Word('переволновалось', 10),
  pluralPast: Word('переволновались', 10),
  imperativeInformal: Word('переволнуйся', 8),
  imperativeFormal: Word('переволнуйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(переволноваться.name.text, переволноваться);

export { переволноваться };