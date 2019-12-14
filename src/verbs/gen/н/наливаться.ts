import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наливаться: PerfectVerb = {
  name: Word('наливаться', 5),
  singular1stPerson: Word('наливаюсь', 5),
  singular2ndPerson: Word('наливаешься', 5),
  singular3rdPerson: Word('наливается', 5),
  plural1stPerson: Word('наливаемся', 5),
  plural2ndPerson: Word('наливаетесь', 5),
  plural3rdPerson: Word('наливаются', 5),
  masculinePast: Word('наливался', 5),
  femininePast: Word('наливалась', 5),
  neuterPast: Word('наливалось', 5),
  pluralPast: Word('наливались', 5),
  imperativeInformal: Word('наливайся', 5),
  imperativeFormal: Word('наливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(наливаться.name.text, наливаться);

export { наливаться };