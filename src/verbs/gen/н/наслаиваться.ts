import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслаиваться: PerfectVerb = {
  name: Word('наслаиваться', 4),
  singular1stPerson: Word('наслаиваюсь', 4),
  singular2ndPerson: Word('наслаиваешься', 4),
  singular3rdPerson: Word('наслаивается', 4),
  plural1stPerson: Word('наслаиваемся', 4),
  plural2ndPerson: Word('наслаиваетесь', 4),
  plural3rdPerson: Word('наслаиваются', 4),
  masculinePast: Word('наслаивался', 4),
  femininePast: Word('наслаивалась', 4),
  neuterPast: Word('наслаивалось', 4),
  pluralPast: Word('наслаивались', 4),
  imperativeInformal: Word('наслаивайся', 4),
  imperativeFormal: Word('наслаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наслаиваться.name.text, наслаиваться);

export { наслаиваться };