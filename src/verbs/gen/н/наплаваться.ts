import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплаваться: PerfectVerb = {
  name: Word('наплаваться', 4),
  singular1stPerson: Word('наплаваюсь', 4),
  singular2ndPerson: Word('наплаваешься', 4),
  singular3rdPerson: Word('наплавается', 4),
  plural1stPerson: Word('наплаваемся', 4),
  plural2ndPerson: Word('наплаваетесь', 4),
  plural3rdPerson: Word('наплаваются', 4),
  masculinePast: Word('наплавался', 4),
  femininePast: Word('наплавалась', 4),
  neuterPast: Word('наплавалось', 4),
  pluralPast: Word('наплавались', 4),
  imperativeInformal: Word('наплавайся', 4),
  imperativeFormal: Word('наплавайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наплаваться.name.text, наплаваться);

export { наплаваться };