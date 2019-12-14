import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смешаться: PerfectVerb = {
  name: Word('смешаться', 4),
  singular1stPerson: Word('смешаюсь', 4),
  singular2ndPerson: Word('смешаешься', 4),
  singular3rdPerson: Word('смешается', 4),
  plural1stPerson: Word('смешаемся', 4),
  plural2ndPerson: Word('смешаетесь', 4),
  plural3rdPerson: Word('смешаются', 4),
  masculinePast: Word('смешался', 4),
  femininePast: Word('смешалась', 4),
  neuterPast: Word('смешалось', 4),
  pluralPast: Word('смешались', 4),
  imperativeInformal: Word('смешайся', 4),
  imperativeFormal: Word('смешайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(смешаться.name.text, смешаться);

export { смешаться };