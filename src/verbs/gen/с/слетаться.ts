import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слетаться: PerfectVerb = {
  name: Word('слетаться', 4),
  singular1stPerson: Word('слетаюсь', 4),
  singular2ndPerson: Word('слетаешься', 4),
  singular3rdPerson: Word('слетается', 4),
  plural1stPerson: Word('слетаемся', 4),
  plural2ndPerson: Word('слетаетесь', 4),
  plural3rdPerson: Word('слетаются', 4),
  masculinePast: Word('слетался', 4),
  femininePast: Word('слеталась', 4),
  neuterPast: Word('слеталось', 4),
  pluralPast: Word('слетались', 4),
  imperativeInformal: Word('слетайся', 4),
  imperativeFormal: Word('слетайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(слетаться.name.text, слетаться);

export { слетаться };