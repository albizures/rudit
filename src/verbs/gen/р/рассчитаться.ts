import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассчитаться: PerfectVerb = {
  name: Word('рассчитаться', 7),
  singular1stPerson: Word('рассчитаюсь', 7),
  singular2ndPerson: Word('рассчитаешься', 7),
  singular3rdPerson: Word('рассчитается', 7),
  plural1stPerson: Word('рассчитаемся', 7),
  plural2ndPerson: Word('рассчитаетесь', 7),
  plural3rdPerson: Word('рассчитаются', 7),
  masculinePast: Word('рассчитался', 7),
  femininePast: Word('рассчиталась', 7),
  neuterPast: Word('рассчиталось', 7),
  pluralPast: Word('рассчитались', 7),
  imperativeInformal: Word('рассчитайся', 7),
  imperativeFormal: Word('рассчитайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(рассчитаться.name.text, рассчитаться);

export { рассчитаться };