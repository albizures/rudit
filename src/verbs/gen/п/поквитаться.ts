import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поквитаться: PerfectVerb = {
  name: Word('поквитаться', 6),
  singular1stPerson: Word('поквитаюсь', 6),
  singular2ndPerson: Word('поквитаешься', 6),
  singular3rdPerson: Word('поквитается', 6),
  plural1stPerson: Word('поквитаемся', 6),
  plural2ndPerson: Word('поквитаетесь', 6),
  plural3rdPerson: Word('поквитаются', 6),
  masculinePast: Word('поквитался', 6),
  femininePast: Word('поквиталась', 6),
  neuterPast: Word('поквиталось', 6),
  pluralPast: Word('поквитались', 6),
  imperativeInformal: Word('поквитайся', 6),
  imperativeFormal: Word('поквитайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поквитаться.name.text, поквитаться);

export { поквитаться };