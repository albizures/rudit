import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проникнуться: PerfectVerb = {
  name: Word('проникнуться', 4),
  singular1stPerson: Word('проникнусь', 4),
  singular2ndPerson: Word('проникнешься', 4),
  singular3rdPerson: Word('проникнется', 4),
  plural1stPerson: Word('проникнемся', 4),
  plural2ndPerson: Word('проникнетесь', 4),
  plural3rdPerson: Word('проникнутся', 4),
  masculinePast: Word('проникся', 4),
  femininePast: Word('прониклась', 4),
  neuterPast: Word('прониклось', 4),
  pluralPast: Word('прониклись', 4),
  imperativeInformal: Word('проникнись', 4),
  imperativeFormal: Word('проникнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(проникнуться.name.text, проникнуться);

export { проникнуться };