import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согреваться: PerfectVerb = {
  name: Word('согреваться', 6),
  singular1stPerson: Word('согреваюсь', 6),
  singular2ndPerson: Word('согреваешься', 6),
  singular3rdPerson: Word('согревается', 6),
  plural1stPerson: Word('согреваемся', 6),
  plural2ndPerson: Word('согреваетесь', 6),
  plural3rdPerson: Word('согреваются', 6),
  masculinePast: Word('согревался', 6),
  femininePast: Word('согревалась', 6),
  neuterPast: Word('согревалось', 6),
  pluralPast: Word('согревались', 6),
  imperativeInformal: Word('согревайся', 6),
  imperativeFormal: Word('согревайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(согреваться.name.text, согреваться);

export { согреваться };