import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окружить: PerfectVerb = {
  name: Word('окружить', 5),
  singular1stPerson: Word('окружу', 5),
  singular2ndPerson: Word('окружишь', 5),
  singular3rdPerson: Word('окружит', 5),
  plural1stPerson: Word('окружим', 5),
  plural2ndPerson: Word('окружите', 5),
  plural3rdPerson: Word('окружат', 5),
  masculinePast: Word('окружил', 5),
  femininePast: Word('окружила', 5),
  neuterPast: Word('окружило', 5),
  pluralPast: Word('окружили', 5),
  imperativeInformal: Word('окружи', 5),
  imperativeFormal: Word('окружите', 5),
  imperfect: ['окружать'],
};

perfectVerbs.set(окружить.name.text, окружить);

export { окружить };