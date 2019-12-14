import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передёрнуться: PerfectVerb = {
  name: Word('передёрнуться', 1),
  singular1stPerson: Word('передёрнусь', 1),
  singular2ndPerson: Word('передёрнешься', 1),
  singular3rdPerson: Word('передёрнется', 1),
  plural1stPerson: Word('передёрнемся', 1),
  plural2ndPerson: Word('передёрнетесь', 1),
  plural3rdPerson: Word('передёрнутся', 1),
  masculinePast: Word('передёрнулся', 1),
  femininePast: Word('передёрнулась', 10),
  neuterPast: Word('передёрнулось', 1),
  pluralPast: Word('передёрнулись', 1),
  imperativeInformal: Word('передёрнись', 1),
  imperativeFormal: Word('передёрнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(передёрнуться.name.text, передёрнуться);

export { передёрнуться };