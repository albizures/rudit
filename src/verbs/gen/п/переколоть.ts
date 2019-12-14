import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переколоть: PerfectVerb = {
  name: Word('переколоть', 7),
  singular1stPerson: Word('переколю', 7),
  singular2ndPerson: Word('переколешь', 5),
  singular3rdPerson: Word('переколет', 5),
  plural1stPerson: Word('переколем', 5),
  plural2ndPerson: Word('переколете', 5),
  plural3rdPerson: Word('переколют', 5),
  masculinePast: Word('переколол', 7),
  femininePast: Word('переколола', 7),
  neuterPast: Word('перекололо', 7),
  pluralPast: Word('перекололи', 7),
  imperativeInformal: Word('переколи', 7),
  imperativeFormal: Word('переколите', 7),
  imperfect: [],
};

perfectVerbs.set(переколоть.name.text, переколоть);

export { переколоть };