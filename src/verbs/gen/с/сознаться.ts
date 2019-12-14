import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сознаться: PerfectVerb = {
  name: Word('сознаться', 4),
  singular1stPerson: Word('сознаюсь', 4),
  singular2ndPerson: Word('сознаешься', 4),
  singular3rdPerson: Word('сознается', 4),
  plural1stPerson: Word('сознаемся', 4),
  plural2ndPerson: Word('сознаетесь', 4),
  plural3rdPerson: Word('сознаются', 4),
  masculinePast: Word('сознался', 4),
  femininePast: Word('созналась', 4),
  neuterPast: Word('созналось', 4),
  pluralPast: Word('сознались', 4),
  imperativeInformal: Word('сознайся', 4),
  imperativeFormal: Word('сознайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сознаться.name.text, сознаться);

export { сознаться };