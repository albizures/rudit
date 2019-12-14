import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распутаться: PerfectVerb = {
  name: Word('распутаться', 4),
  singular1stPerson: Word('распутаюсь', 4),
  singular2ndPerson: Word('распутаешься', 4),
  singular3rdPerson: Word('распутается', 4),
  plural1stPerson: Word('распутаемся', 4),
  plural2ndPerson: Word('распутаетесь', 4),
  plural3rdPerson: Word('распутаются', 4),
  masculinePast: Word('распутался', 4),
  femininePast: Word('распуталась', 4),
  neuterPast: Word('распуталось', 4),
  pluralPast: Word('распутались', 4),
  imperativeInformal: Word('распутайся', 4),
  imperativeFormal: Word('распутайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(распутаться.name.text, распутаться);

export { распутаться };