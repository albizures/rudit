import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбушеваться: PerfectVerb = {
  name: Word('разбушеваться', 8),
  singular1stPerson: Word('разбушуюсь', 6),
  singular2ndPerson: Word('разбушуешься', 6),
  singular3rdPerson: Word('разбушуется', 6),
  plural1stPerson: Word('разбушуемся', 6),
  plural2ndPerson: Word('разбушуетесь', 6),
  plural3rdPerson: Word('разбушуются', 6),
  masculinePast: Word('разбушевался', 8),
  femininePast: Word('разбушевалась', 8),
  neuterPast: Word('разбушевалось', 8),
  pluralPast: Word('разбушевались', 8),
  imperativeInformal: Word('разбушуйся', 6),
  imperativeFormal: Word('разбушуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разбушеваться.name.text, разбушеваться);

export { разбушеваться };