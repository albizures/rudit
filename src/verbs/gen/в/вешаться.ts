import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вешаться: PerfectVerb = {
  name: Word('вешаться', 1),
  singular1stPerson: Word('вешаюсь', 1),
  singular2ndPerson: Word('вешаешься', 1),
  singular3rdPerson: Word('вешается', 1),
  plural1stPerson: Word('вешаемся', 1),
  plural2ndPerson: Word('вешаетесь', 1),
  plural3rdPerson: Word('вешаются', 1),
  masculinePast: Word('вешался', 1),
  femininePast: Word('вешалась', 1),
  neuterPast: Word('вешалось', 1),
  pluralPast: Word('вешались', 1),
  imperativeInformal: Word('вешайся', 1),
  imperativeFormal: Word('вешайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вешаться.name.text, вешаться);

export { вешаться };