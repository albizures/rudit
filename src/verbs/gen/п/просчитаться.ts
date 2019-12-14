import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просчитаться: PerfectVerb = {
  name: Word('просчитаться', 7),
  singular1stPerson: Word('просчитаюсь', 7),
  singular2ndPerson: Word('просчитаешься', 7),
  singular3rdPerson: Word('просчитается', 7),
  plural1stPerson: Word('просчитаемся', 7),
  plural2ndPerson: Word('просчитаетесь', 7),
  plural3rdPerson: Word('просчитаются', 7),
  masculinePast: Word('просчитался', 7),
  femininePast: Word('просчиталась', 7),
  neuterPast: Word('просчиталось', 7),
  pluralPast: Word('просчитались', 7),
  imperativeInformal: Word('просчитайся', 7),
  imperativeFormal: Word('просчитайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(просчитаться.name.text, просчитаться);

export { просчитаться };