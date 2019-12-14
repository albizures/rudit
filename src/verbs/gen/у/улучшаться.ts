import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улучшаться: PerfectVerb = {
  name: Word('улучшаться', 5),
  singular1stPerson: Word('улучшаюсь', 5),
  singular2ndPerson: Word('улучшаешься', 5),
  singular3rdPerson: Word('улучшается', 5),
  plural1stPerson: Word('улучшаемся', 5),
  plural2ndPerson: Word('улучшаетесь', 5),
  plural3rdPerson: Word('улучшаются', 5),
  masculinePast: Word('улучшался', 5),
  femininePast: Word('улучшалась', 5),
  neuterPast: Word('улучшалось', 5),
  pluralPast: Word('улучшались', 5),
  imperativeInformal: Word('улучшайся', 5),
  imperativeFormal: Word('улучшайтесь', 5),
  imperfect: ['улучшиться'],
};

perfectVerbs.set(улучшаться.name.text, улучшаться);

export { улучшаться };