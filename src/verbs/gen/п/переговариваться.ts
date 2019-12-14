import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переговариваться: PerfectVerb = {
  name: Word('переговариваться', 7),
  singular1stPerson: Word('переговариваюсь', 7),
  singular2ndPerson: Word('переговариваешься', 7),
  singular3rdPerson: Word('переговаривается', 7),
  plural1stPerson: Word('переговариваемся', 7),
  plural2ndPerson: Word('переговариваетесь', 7),
  plural3rdPerson: Word('переговариваются', 7),
  masculinePast: Word('переговаривался', 7),
  femininePast: Word('переговаривалась', 7),
  neuterPast: Word('переговаривалось', 7),
  pluralPast: Word('переговаривались', 7),
  imperativeInformal: Word('переговаривайся', 7),
  imperativeFormal: Word('переговаривайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переговариваться.name.text, переговариваться);

export { переговариваться };