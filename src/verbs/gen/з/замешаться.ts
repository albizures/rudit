import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замешаться: PerfectVerb = {
  name: Word('замешаться', 5),
  singular1stPerson: Word('замешаюсь', 5),
  singular2ndPerson: Word('замешаешься', 5),
  singular3rdPerson: Word('замешается', 5),
  plural1stPerson: Word('замешаемся', 5),
  plural2ndPerson: Word('замешаетесь', 5),
  plural3rdPerson: Word('замешаются', 5),
  masculinePast: Word('замешался', 5),
  femininePast: Word('замешалась', 5),
  neuterPast: Word('замешалось', 5),
  pluralPast: Word('замешались', 5),
  imperativeInformal: Word('замешайся', 5),
  imperativeFormal: Word('замешайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(замешаться.name.text, замешаться);

export { замешаться };