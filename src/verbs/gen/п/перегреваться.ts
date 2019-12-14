import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегреваться: PerfectVerb = {
  name: Word('перегреваться', 8),
  singular1stPerson: Word('перегреваюсь', 8),
  singular2ndPerson: Word('перегреваешься', 8),
  singular3rdPerson: Word('перегревается', 8),
  plural1stPerson: Word('перегреваемся', 8),
  plural2ndPerson: Word('перегреваетесь', 8),
  plural3rdPerson: Word('перегреваются', 8),
  masculinePast: Word('перегревался', 8),
  femininePast: Word('перегревалась', 8),
  neuterPast: Word('перегревалось', 8),
  pluralPast: Word('перегревались', 8),
  imperativeInformal: Word('перегревайся', 8),
  imperativeFormal: Word('перегревайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(перегреваться.name.text, перегреваться);

export { перегреваться };