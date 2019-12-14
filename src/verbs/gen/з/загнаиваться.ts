import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загнаиваться: PerfectVerb = {
  name: Word('загнаиваться', 4),
  singular1stPerson: Word('загнаиваюсь', 4),
  singular2ndPerson: Word('загнаиваешься', 4),
  singular3rdPerson: Word('загнаивается', 4),
  plural1stPerson: Word('загнаиваемся', 4),
  plural2ndPerson: Word('загнаиваетесь', 4),
  plural3rdPerson: Word('загнаиваются', 4),
  masculinePast: Word('загнаивался', 4),
  femininePast: Word('загнаивалась', 4),
  neuterPast: Word('загнаивалось', 4),
  pluralPast: Word('загнаивались', 4),
  imperativeInformal: Word('загнаивайся', 4),
  imperativeFormal: Word('загнаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(загнаиваться.name.text, загнаиваться);

export { загнаиваться };