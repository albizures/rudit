import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помешаться: PerfectVerb = {
  name: Word('помешаться', 5),
  singular1stPerson: Word('помешаюсь', 5),
  singular2ndPerson: Word('помешаешься', 5),
  singular3rdPerson: Word('помешается', 5),
  plural1stPerson: Word('помешаемся', 5),
  plural2ndPerson: Word('помешаетесь', 5),
  plural3rdPerson: Word('помешаются', 5),
  masculinePast: Word('помешался', 5),
  femininePast: Word('помешалась', 5),
  neuterPast: Word('помешалось', 5),
  pluralPast: Word('помешались', 5),
  imperativeInformal: Word('помешайся', 5),
  imperativeFormal: Word('помешайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(помешаться.name.text, помешаться);

export { помешаться };