import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проветриваться: PerfectVerb = {
  name: Word('проветриваться', 4),
  singular1stPerson: Word('проветриваюсь', 4),
  singular2ndPerson: Word('проветриваешься', 4),
  singular3rdPerson: Word('проветривается', 4),
  plural1stPerson: Word('проветриваемся', 4),
  plural2ndPerson: Word('проветриваетесь', 4),
  plural3rdPerson: Word('проветриваются', 4),
  masculinePast: Word('проветривался', 4),
  femininePast: Word('проветривалась', 4),
  neuterPast: Word('проветривалось', 4),
  pluralPast: Word('проветривались', 4),
  imperativeInformal: Word('проветривайся', 4),
  imperativeFormal: Word('проветривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(проветриваться.name.text, проветриваться);

export { проветриваться };