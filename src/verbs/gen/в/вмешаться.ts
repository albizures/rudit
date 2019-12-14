import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмешаться: PerfectVerb = {
  name: Word('вмешаться', 4),
  singular1stPerson: Word('вмешаюсь', 4),
  singular2ndPerson: Word('вмешаешься', 4),
  singular3rdPerson: Word('вмешается', 4),
  plural1stPerson: Word('вмешаемся', 4),
  plural2ndPerson: Word('вмешаетесь', 4),
  plural3rdPerson: Word('вмешаются', 4),
  masculinePast: Word('вмешался', 4),
  femininePast: Word('вмешалась', 4),
  neuterPast: Word('вмешалось', 4),
  pluralPast: Word('вмешались', 4),
  imperativeInformal: Word('вмешайся', 4),
  imperativeFormal: Word('вмешайтесь', 4),
  imperfect: ['вмешиваться'],
};

perfectVerbs.set(вмешаться.name.text, вмешаться);

export { вмешаться };