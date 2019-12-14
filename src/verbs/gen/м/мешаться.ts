import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мешаться: PerfectVerb = {
  name: Word('мешаться', 3),
  singular1stPerson: Word('мешаюсь', 3),
  singular2ndPerson: Word('мешаешься', 3),
  singular3rdPerson: Word('мешается', 3),
  plural1stPerson: Word('мешаемся', 3),
  plural2ndPerson: Word('мешаетесь', 3),
  plural3rdPerson: Word('мешаются', 3),
  masculinePast: Word('мешался', 3),
  femininePast: Word('мешалась', 3),
  neuterPast: Word('мешалось', 3),
  pluralPast: Word('мешались', 3),
  imperativeInformal: Word('мешайся', 3),
  imperativeFormal: Word('мешайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(мешаться.name.text, мешаться);

export { мешаться };