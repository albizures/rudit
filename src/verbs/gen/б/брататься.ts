import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брататься: PerfectVerb = {
  name: Word('брататься', 4),
  singular1stPerson: Word('братаюсь', 4),
  singular2ndPerson: Word('братаешься', 4),
  singular3rdPerson: Word('братается', 4),
  plural1stPerson: Word('братаемся', 4),
  plural2ndPerson: Word('братаетесь', 4),
  plural3rdPerson: Word('братаются', 4),
  masculinePast: Word('братался', 4),
  femininePast: Word('браталась', 4),
  neuterPast: Word('браталось', 4),
  pluralPast: Word('братались', 4),
  imperativeInformal: Word('братайся', 4),
  imperativeFormal: Word('братайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(брататься.name.text, брататься);

export { брататься };