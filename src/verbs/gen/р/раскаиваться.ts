import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскаиваться: PerfectVerb = {
  name: Word('раскаиваться', 4),
  singular1stPerson: Word('раскаиваюсь', 4),
  singular2ndPerson: Word('раскаиваешься', 4),
  singular3rdPerson: Word('раскаивается', 4),
  plural1stPerson: Word('раскаиваемся', 4),
  plural2ndPerson: Word('раскаиваетесь', 4),
  plural3rdPerson: Word('раскаиваются', 4),
  masculinePast: Word('раскаивался', 4),
  femininePast: Word('раскаивалась', 4),
  neuterPast: Word('раскаивалось', 4),
  pluralPast: Word('раскаивались', 4),
  imperativeInformal: Word('раскаивайся', 4),
  imperativeFormal: Word('раскаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскаиваться.name.text, раскаиваться);

export { раскаиваться };