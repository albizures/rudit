import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стекаться: PerfectVerb = {
  name: Word('стекаться', 4),
  singular1stPerson: Word('стекаюсь', 4),
  singular2ndPerson: Word('стекаешься', 4),
  singular3rdPerson: Word('стекается', 4),
  plural1stPerson: Word('стекаемся', 4),
  plural2ndPerson: Word('стекаетесь', 4),
  plural3rdPerson: Word('стекаются', 4),
  masculinePast: Word('стекался', 4),
  femininePast: Word('стекалась', 4),
  neuterPast: Word('стекалось', 4),
  pluralPast: Word('стекались', 4),
  imperativeInformal: Word('стекайся', 4),
  imperativeFormal: Word('стекайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(стекаться.name.text, стекаться);

export { стекаться };