import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запутаться: PerfectVerb = {
  name: Word('запутаться', 3),
  singular1stPerson: Word('запутаюсь', 3),
  singular2ndPerson: Word('запутаешься', 3),
  singular3rdPerson: Word('запутается', 3),
  plural1stPerson: Word('запутаемся', 3),
  plural2ndPerson: Word('запутаетесь', 3),
  plural3rdPerson: Word('запутаются', 3),
  masculinePast: Word('запутался', 3),
  femininePast: Word('запуталась', 3),
  neuterPast: Word('запуталось', 3),
  pluralPast: Word('запутались', 3),
  imperativeInformal: Word('запутайся', 3),
  imperativeFormal: Word('запутайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(запутаться.name.text, запутаться);

export { запутаться };