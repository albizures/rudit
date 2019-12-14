import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const абстрагироваться: PerfectVerb = {
  name: Word('абстрагироваться', 7),
  singular1stPerson: Word('абстрагируюсь', 7),
  singular2ndPerson: Word('абстрагируешься', 7),
  singular3rdPerson: Word('абстрагируется', 7),
  plural1stPerson: Word('абстрагируемся', 7),
  plural2ndPerson: Word('абстрагируетесь', 7),
  plural3rdPerson: Word('абстрагируются', 7),
  masculinePast: Word('абстрагировался', 7),
  femininePast: Word('абстрагировалась', 7),
  neuterPast: Word('абстрагировалось', 7),
  pluralPast: Word('абстрагировались', 7),
  imperativeInformal: Word('абстрагируйся', 7),
  imperativeFormal: Word('абстрагируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(абстрагироваться.name.text, абстрагироваться);

export { абстрагироваться };