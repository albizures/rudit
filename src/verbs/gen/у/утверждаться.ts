import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утверждаться: PerfectVerb = {
  name: Word('утверждаться', 7),
  singular1stPerson: Word('утверждаюсь', 7),
  singular2ndPerson: Word('утверждаешься', 7),
  singular3rdPerson: Word('утверждается', 7),
  plural1stPerson: Word('утверждаемся', 7),
  plural2ndPerson: Word('утверждаетесь', 7),
  plural3rdPerson: Word('утверждаются', 7),
  masculinePast: Word('утверждался', 7),
  femininePast: Word('утверждалась', 7),
  neuterPast: Word('утверждалось', 7),
  pluralPast: Word('утверждались', 7),
  imperativeInformal: Word('утверждайся', 7),
  imperativeFormal: Word('утверждайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(утверждаться.name.text, утверждаться);

export { утверждаться };