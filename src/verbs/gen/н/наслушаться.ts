import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслушаться: PerfectVerb = {
  name: Word('наслушаться', 4),
  singular1stPerson: Word('наслушаюсь', 4),
  singular2ndPerson: Word('наслушаешься', 4),
  singular3rdPerson: Word('наслушается', 4),
  plural1stPerson: Word('наслушаемся', 4),
  plural2ndPerson: Word('наслушаетесь', 4),
  plural3rdPerson: Word('наслушаются', 4),
  masculinePast: Word('наслушался', 4),
  femininePast: Word('наслушалась', 4),
  neuterPast: Word('наслушалось', 4),
  pluralPast: Word('наслушались', 4),
  imperativeInformal: Word('наслушайся', 4),
  imperativeFormal: Word('наслушайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наслушаться.name.text, наслушаться);

export { наслушаться };