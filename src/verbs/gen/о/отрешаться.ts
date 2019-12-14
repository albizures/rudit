import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрешаться: PerfectVerb = {
  name: Word('отрешаться', 5),
  singular1stPerson: Word('отрешаюсь', 5),
  singular2ndPerson: Word('отрешаешься', 5),
  singular3rdPerson: Word('отрешается', 5),
  plural1stPerson: Word('отрешаемся', 5),
  plural2ndPerson: Word('отрешаетесь', 5),
  plural3rdPerson: Word('отрешаются', 5),
  masculinePast: Word('отрешался', 5),
  femininePast: Word('отрешалась', 5),
  neuterPast: Word('отрешалось', 5),
  pluralPast: Word('отрешались', 5),
  imperativeInformal: Word('отрешайся', 5),
  imperativeFormal: Word('отрешайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отрешаться.name.text, отрешаться);

export { отрешаться };