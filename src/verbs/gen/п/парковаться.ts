import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const парковаться: PerfectVerb = {
  name: Word('парковаться', 6),
  singular1stPerson: Word('паркуюсь', 4),
  singular2ndPerson: Word('паркуешься', 4),
  singular3rdPerson: Word('паркуется', 4),
  plural1stPerson: Word('паркуемся', 4),
  plural2ndPerson: Word('паркуетесь', 4),
  plural3rdPerson: Word('паркуются', 4),
  masculinePast: Word('парковался', 6),
  femininePast: Word('парковалась', 6),
  neuterPast: Word('парковалось', 6),
  pluralPast: Word('парковались', 6),
  imperativeInformal: Word('паркуйся', 4),
  imperativeFormal: Word('паркуйтесь', 4),
  imperfect: ['припарковаться'],
};

perfectVerbs.set(парковаться.name.text, парковаться);

export { парковаться };