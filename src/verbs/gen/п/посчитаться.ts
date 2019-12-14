import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посчитаться: PerfectVerb = {
  name: Word('посчитаться', 6),
  singular1stPerson: Word('посчитаюсь', 6),
  singular2ndPerson: Word('посчитаешься', 6),
  singular3rdPerson: Word('посчитается', 6),
  plural1stPerson: Word('посчитаемся', 6),
  plural2ndPerson: Word('посчитаетесь', 6),
  plural3rdPerson: Word('посчитаются', 6),
  masculinePast: Word('посчитался', 6),
  femininePast: Word('посчиталась', 6),
  neuterPast: Word('посчиталось', 6),
  pluralPast: Word('посчитались', 6),
  imperativeInformal: Word('посчитайся', 6),
  imperativeFormal: Word('посчитайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(посчитаться.name.text, посчитаться);

export { посчитаться };