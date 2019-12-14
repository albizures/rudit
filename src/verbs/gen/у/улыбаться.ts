import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улыбаться: PerfectVerb = {
  name: Word('улыбаться', 4),
  singular1stPerson: Word('улыбаюсь', 4),
  singular2ndPerson: Word('улыбаешься', 4),
  singular3rdPerson: Word('улыбается', 4),
  plural1stPerson: Word('улыбаемся', 4),
  plural2ndPerson: Word('улыбаетесь', 4),
  plural3rdPerson: Word('улыбаются', 4),
  masculinePast: Word('улыбался', 4),
  femininePast: Word('улыбалась', 4),
  neuterPast: Word('улыбалось', 4),
  pluralPast: Word('улыбались', 4),
  imperativeInformal: Word('улыбайся', 4),
  imperativeFormal: Word('улыбайтесь', 4),
  imperfect: ['улыбнуться'],
};

perfectVerbs.set(улыбаться.name.text, улыбаться);

export { улыбаться };