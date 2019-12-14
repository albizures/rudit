import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проспиртоваться: PerfectVerb = {
  name: Word('проспиртоваться', 10),
  singular1stPerson: Word('проспиртуюсь', 8),
  singular2ndPerson: Word('проспиртуешься', 8),
  singular3rdPerson: Word('проспиртуется', 8),
  plural1stPerson: Word('проспиртуемся', 8),
  plural2ndPerson: Word('проспиртуетесь', 8),
  plural3rdPerson: Word('проспиртуются', 8),
  masculinePast: Word('проспиртовался', 10),
  femininePast: Word('проспиртовалась', 10),
  neuterPast: Word('проспиртовалось', 10),
  pluralPast: Word('проспиртовались', 10),
  imperativeInformal: Word('проспиртуйся', 8),
  imperativeFormal: Word('проспиртуйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(проспиртоваться.name.text, проспиртоваться);

export { проспиртоваться };