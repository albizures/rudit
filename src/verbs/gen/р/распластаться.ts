import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распластаться: PerfectVerb = {
  name: Word('распластаться', 8),
  singular1stPerson: Word('распластаюсь', 8),
  singular2ndPerson: Word('распластаешься', 8),
  singular3rdPerson: Word('распластается', 8),
  plural1stPerson: Word('распластаемся', 8),
  plural2ndPerson: Word('распластаетесь', 8),
  plural3rdPerson: Word('распластаются', 8),
  masculinePast: Word('распластался', 8),
  femininePast: Word('распласталась', 8),
  neuterPast: Word('распласталось', 8),
  pluralPast: Word('распластались', 8),
  imperativeInformal: Word('распластайся', 8),
  imperativeFormal: Word('распластайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(распластаться.name.text, распластаться);

export { распластаться };