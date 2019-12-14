import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хвататься: PerfectVerb = {
  name: Word('хвататься', 4),
  singular1stPerson: Word('хватаюсь', 4),
  singular2ndPerson: Word('хватаешься', 4),
  singular3rdPerson: Word('хватается', 4),
  plural1stPerson: Word('хватаемся', 4),
  plural2ndPerson: Word('хватаетесь', 4),
  plural3rdPerson: Word('хватаются', 4),
  masculinePast: Word('хватался', 4),
  femininePast: Word('хваталась', 4),
  neuterPast: Word('хваталось', 4),
  pluralPast: Word('хватались', 4),
  imperativeInformal: Word('хватайся', 4),
  imperativeFormal: Word('хватайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(хвататься.name.text, хвататься);

export { хвататься };