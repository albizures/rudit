import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахвататься: PerfectVerb = {
  name: Word('нахвататься', 6),
  singular1stPerson: Word('нахватаюсь', 6),
  singular2ndPerson: Word('нахватаешься', 6),
  singular3rdPerson: Word('нахватается', 6),
  plural1stPerson: Word('нахватаемся', 6),
  plural2ndPerson: Word('нахватаетесь', 6),
  plural3rdPerson: Word('нахватаются', 6),
  masculinePast: Word('нахватался', 6),
  femininePast: Word('нахваталась', 6),
  neuterPast: Word('нахваталось', 6),
  pluralPast: Word('нахватались', 6),
  imperativeInformal: Word('нахватайся', 6),
  imperativeFormal: Word('нахватайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(нахвататься.name.text, нахвататься);

export { нахвататься };