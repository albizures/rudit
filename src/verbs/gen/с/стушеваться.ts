import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стушеваться: PerfectVerb = {
  name: Word('стушеваться', 6),
  singular1stPerson: Word('стушуюсь', 4),
  singular2ndPerson: Word('стушуешься', 4),
  singular3rdPerson: Word('стушуется', 4),
  plural1stPerson: Word('стушуемся', 4),
  plural2ndPerson: Word('стушуетесь', 4),
  plural3rdPerson: Word('стушуются', 4),
  masculinePast: Word('стушевался', 6),
  femininePast: Word('стушевалась', 6),
  neuterPast: Word('стушевалось', 6),
  pluralPast: Word('стушевались', 6),
  imperativeInformal: Word('стушуйся', 4),
  imperativeFormal: Word('стушуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(стушеваться.name.text, стушеваться);

export { стушеваться };