import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплетаться: PerfectVerb = {
  name: Word('сплетаться', 5),
  singular1stPerson: Word('сплетаюсь', 5),
  singular2ndPerson: Word('сплетаешься', 5),
  singular3rdPerson: Word('сплетается', 5),
  plural1stPerson: Word('сплетаемся', 5),
  plural2ndPerson: Word('сплетаетесь', 5),
  plural3rdPerson: Word('сплетаются', 5),
  masculinePast: Word('сплетался', 5),
  femininePast: Word('сплеталась', 5),
  neuterPast: Word('сплеталось', 5),
  pluralPast: Word('сплетались', 5),
  imperativeInformal: Word('сплетайся', 5),
  imperativeFormal: Word('сплетайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сплетаться.name.text, сплетаться);

export { сплетаться };