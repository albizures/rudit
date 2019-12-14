import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засомневаться: PerfectVerb = {
  name: Word('засомневаться', 8),
  singular1stPerson: Word('засомневаюсь', 8),
  singular2ndPerson: Word('засомневаешься', 8),
  singular3rdPerson: Word('засомневается', 8),
  plural1stPerson: Word('засомневаемся', 8),
  plural2ndPerson: Word('засомневаетесь', 8),
  plural3rdPerson: Word('засомневаются', 8),
  masculinePast: Word('засомневался', 8),
  femininePast: Word('засомневалась', 8),
  neuterPast: Word('засомневалось', 8),
  pluralPast: Word('засомневались', 8),
  imperativeInformal: Word('засомневайся', 8),
  imperativeFormal: Word('засомневайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(засомневаться.name.text, засомневаться);

export { засомневаться };