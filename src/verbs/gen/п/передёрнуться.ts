import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передёрнуться: PerfectVerb = {
  name: Word('передёрнуться', 5),
  singular1stPerson: Word('передёрнусь', 5),
  singular2ndPerson: Word('передёрнешься', 5),
  singular3rdPerson: Word('передёрнется', 5),
  plural1stPerson: Word('передёрнемся', 5),
  plural2ndPerson: Word('передёрнетесь', 5),
  plural3rdPerson: Word('передёрнутся', 5),
  masculinePast: Word('передёрнулся', 5),
  femininePast: Word('передёрнулась', 5),
  neuterPast: Word('передёрнулось', 5),
  pluralPast: Word('передёрнулись', 5),
  imperativeInformal: Word('передёрнись', 5),
  imperativeFormal: Word('передёрнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(передёрнуться.name.text, передёрнуться);

export { передёрнуться };