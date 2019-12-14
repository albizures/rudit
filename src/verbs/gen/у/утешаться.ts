import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утешаться: PerfectVerb = {
  name: Word('утешаться', 4),
  singular1stPerson: Word('утешаюсь', 4),
  singular2ndPerson: Word('утешаешься', 4),
  singular3rdPerson: Word('утешается', 4),
  plural1stPerson: Word('утешаемся', 4),
  plural2ndPerson: Word('утешаетесь', 4),
  plural3rdPerson: Word('утешаются', 4),
  masculinePast: Word('утешался', 4),
  femininePast: Word('утешалась', 4),
  neuterPast: Word('утешалось', 4),
  pluralPast: Word('утешались', 4),
  imperativeInformal: Word('утешайся', 4),
  imperativeFormal: Word('утешайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(утешаться.name.text, утешаться);

export { утешаться };