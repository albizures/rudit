import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запинаться: PerfectVerb = {
  name: Word('запинаться', 5),
  singular1stPerson: Word('запинаюсь', 5),
  singular2ndPerson: Word('запинаешься', 5),
  singular3rdPerson: Word('запинается', 5),
  plural1stPerson: Word('запинаемся', 5),
  plural2ndPerson: Word('запинаетесь', 5),
  plural3rdPerson: Word('запинаются', 5),
  masculinePast: Word('запинался', 5),
  femininePast: Word('запиналась', 5),
  neuterPast: Word('запиналось', 5),
  pluralPast: Word('запинались', 5),
  imperativeInformal: Word('запинайся', 5),
  imperativeFormal: Word('запинайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(запинаться.name.text, запинаться);

export { запинаться };