import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплетаться: PerfectVerb = {
  name: Word('заплетаться', 6),
  singular1stPerson: Word('заплетаюсь', 6),
  singular2ndPerson: Word('заплетаешься', 6),
  singular3rdPerson: Word('заплетается', 6),
  plural1stPerson: Word('заплетаемся', 6),
  plural2ndPerson: Word('заплетаетесь', 6),
  plural3rdPerson: Word('заплетаются', 6),
  masculinePast: Word('заплетался', 6),
  femininePast: Word('заплеталась', 6),
  neuterPast: Word('заплеталось', 6),
  pluralPast: Word('заплетались', 6),
  imperativeInformal: Word('заплетайся', 6),
  imperativeFormal: Word('заплетайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заплетаться.name.text, заплетаться);

export { заплетаться };