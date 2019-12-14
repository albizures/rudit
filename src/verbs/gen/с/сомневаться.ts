import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сомневаться: PerfectVerb = {
  name: Word('сомневаться', 6),
  singular1stPerson: Word('сомневаюсь', 6),
  singular2ndPerson: Word('сомневаешься', 6),
  singular3rdPerson: Word('сомневается', 6),
  plural1stPerson: Word('сомневаемся', 6),
  plural2ndPerson: Word('сомневаетесь', 6),
  plural3rdPerson: Word('сомневаются', 6),
  masculinePast: Word('сомневался', 6),
  femininePast: Word('сомневалась', 6),
  neuterPast: Word('сомневалось', 6),
  pluralPast: Word('сомневались', 6),
  imperativeInformal: Word('сомневайся', 6),
  imperativeFormal: Word('сомневайтесь', 6),
  imperfect: ['усомниться'],
};

perfectVerbs.set(сомневаться.name.text, сомневаться);

export { сомневаться };