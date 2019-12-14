import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побаиваться: PerfectVerb = {
  name: Word('побаиваться', 3),
  singular1stPerson: Word('побаиваюсь', 3),
  singular2ndPerson: Word('побаиваешься', 3),
  singular3rdPerson: Word('побаивается', 3),
  plural1stPerson: Word('побаиваемся', 3),
  plural2ndPerson: Word('побаиваетесь', 3),
  plural3rdPerson: Word('побаиваются', 3),
  masculinePast: Word('побаивался', 3),
  femininePast: Word('побаивалась', 3),
  neuterPast: Word('побаивалось', 3),
  pluralPast: Word('побаивались', 3),
  imperativeInformal: Word('побаивайся', 3),
  imperativeFormal: Word('побаивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(побаиваться.name.text, побаиваться);

export { побаиваться };