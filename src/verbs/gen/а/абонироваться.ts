import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const абонироваться: PerfectVerb = {
  name: Word('абонироваться', 4),
  singular1stPerson: Word('абонируюсь', 4),
  singular2ndPerson: Word('абонируешься', 4),
  singular3rdPerson: Word('абонируется', 4),
  plural1stPerson: Word('абонируемся', 4),
  plural2ndPerson: Word('абонируетесь', 4),
  plural3rdPerson: Word('абонируются', 4),
  masculinePast: Word('абонировался', 4),
  femininePast: Word('абонировалась', 4),
  neuterPast: Word('абонировалось', 4),
  pluralPast: Word('абонировались', 4),
  imperativeInformal: Word('абонируйся', 4),
  imperativeFormal: Word('абонируйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(абонироваться.name.text, абонироваться);

export { абонироваться };