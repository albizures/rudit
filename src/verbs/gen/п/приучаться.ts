import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приучаться: PerfectVerb = {
  name: Word('приучаться', 5),
  singular1stPerson: Word('приучаюсь', 5),
  singular2ndPerson: Word('приучаешься', 5),
  singular3rdPerson: Word('приучается', 5),
  plural1stPerson: Word('приучаемся', 5),
  plural2ndPerson: Word('приучаетесь', 5),
  plural3rdPerson: Word('приучаются', 5),
  masculinePast: Word('приучался', 5),
  femininePast: Word('приучалась', 5),
  neuterPast: Word('приучалось', 5),
  pluralPast: Word('приучались', 5),
  imperativeInformal: Word('приучайся', 5),
  imperativeFormal: Word('приучайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(приучаться.name.text, приучаться);

export { приучаться };