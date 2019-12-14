import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кататься: PerfectVerb = {
  name: Word('кататься', 3),
  singular1stPerson: Word('катаюсь', 3),
  singular2ndPerson: Word('катаешься', 3),
  singular3rdPerson: Word('катается', 3),
  plural1stPerson: Word('катаемся', 3),
  plural2ndPerson: Word('катаетесь', 3),
  plural3rdPerson: Word('катаются', 3),
  masculinePast: Word('катался', 3),
  femininePast: Word('каталась', 3),
  neuterPast: Word('каталось', 3),
  pluralPast: Word('катались', 3),
  imperativeInformal: Word('катайся', 3),
  imperativeFormal: Word('катайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(кататься.name.text, кататься);

export { кататься };