import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налетаться: PerfectVerb = {
  name: Word('налетаться', 5),
  singular1stPerson: Word('налетаюсь', 5),
  singular2ndPerson: Word('налетаешься', 5),
  singular3rdPerson: Word('налетается', 5),
  plural1stPerson: Word('налетаемся', 5),
  plural2ndPerson: Word('налетаетесь', 5),
  plural3rdPerson: Word('налетаются', 5),
  masculinePast: Word('налетался', 5),
  femininePast: Word('налеталась', 5),
  neuterPast: Word('налеталось', 5),
  pluralPast: Word('налетались', 5),
  imperativeInformal: Word('налетайся', 5),
  imperativeFormal: Word('налетайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(налетаться.name.text, налетаться);

export { налетаться };