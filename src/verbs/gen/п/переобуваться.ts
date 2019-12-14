import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переобуваться: PerfectVerb = {
  name: Word('переобуваться', 8),
  singular1stPerson: Word('переобуваюсь', 8),
  singular2ndPerson: Word('переобуваешься', 8),
  singular3rdPerson: Word('переобувается', 8),
  plural1stPerson: Word('переобуваемся', 8),
  plural2ndPerson: Word('переобуваетесь', 8),
  plural3rdPerson: Word('переобуваются', 8),
  masculinePast: Word('переобувался', 8),
  femininePast: Word('переобувалась', 8),
  neuterPast: Word('переобувалось', 8),
  pluralPast: Word('переобувались', 8),
  imperativeInformal: Word('переобувайся', 8),
  imperativeFormal: Word('переобувайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(переобуваться.name.text, переобуваться);

export { переобуваться };