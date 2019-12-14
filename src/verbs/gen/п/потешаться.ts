import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потешаться: PerfectVerb = {
  name: Word('потешаться', 5),
  singular1stPerson: Word('потешаюсь', 5),
  singular2ndPerson: Word('потешаешься', 5),
  singular3rdPerson: Word('потешается', 5),
  plural1stPerson: Word('потешаемся', 5),
  plural2ndPerson: Word('потешаетесь', 5),
  plural3rdPerson: Word('потешаются', 5),
  masculinePast: Word('потешался', 5),
  femininePast: Word('потешалась', 5),
  neuterPast: Word('потешалось', 5),
  pluralPast: Word('потешались', 5),
  imperativeInformal: Word('потешайся', 5),
  imperativeFormal: Word('потешайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(потешаться.name.text, потешаться);

export { потешаться };