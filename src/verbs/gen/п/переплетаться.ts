import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплетаться: PerfectVerb = {
  name: Word('переплетаться', 8),
  singular1stPerson: Word('переплетаюсь', 8),
  singular2ndPerson: Word('переплетаешься', 8),
  singular3rdPerson: Word('переплетается', 8),
  plural1stPerson: Word('переплетаемся', 8),
  plural2ndPerson: Word('переплетаетесь', 8),
  plural3rdPerson: Word('переплетаются', 8),
  masculinePast: Word('переплетался', 8),
  femininePast: Word('переплеталась', 8),
  neuterPast: Word('переплеталось', 8),
  pluralPast: Word('переплетались', 8),
  imperativeInformal: Word('переплетайся', 8),
  imperativeFormal: Word('переплетайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(переплетаться.name.text, переплетаться);

export { переплетаться };