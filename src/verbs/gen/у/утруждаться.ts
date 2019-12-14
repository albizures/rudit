import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утруждаться: PerfectVerb = {
  name: Word('утруждаться', 6),
  singular1stPerson: Word('утруждаюсь', 6),
  singular2ndPerson: Word('утруждаешься', 6),
  singular3rdPerson: Word('утруждается', 6),
  plural1stPerson: Word('утруждаемся', 6),
  plural2ndPerson: Word('утруждаетесь', 6),
  plural3rdPerson: Word('утруждаются', 6),
  masculinePast: Word('утруждался', 6),
  femininePast: Word('утруждалась', 6),
  neuterPast: Word('утруждалось', 6),
  pluralPast: Word('утруждались', 6),
  imperativeInformal: Word('утруждайся', 6),
  imperativeFormal: Word('утруждайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(утруждаться.name.text, утруждаться);

export { утруждаться };