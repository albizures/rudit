import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплетаться: PerfectVerb = {
  name: Word('расплетаться', 7),
  singular1stPerson: Word('расплетаюсь', 7),
  singular2ndPerson: Word('расплетаешься', 7),
  singular3rdPerson: Word('расплетается', 7),
  plural1stPerson: Word('расплетаемся', 7),
  plural2ndPerson: Word('расплетаетесь', 7),
  plural3rdPerson: Word('расплетаются', 7),
  masculinePast: Word('расплетался', 7),
  femininePast: Word('расплеталась', 7),
  neuterPast: Word('расплеталось', 7),
  pluralPast: Word('расплетались', 7),
  imperativeInformal: Word('расплетайся', 7),
  imperativeFormal: Word('расплетайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расплетаться.name.text, расплетаться);

export { расплетаться };